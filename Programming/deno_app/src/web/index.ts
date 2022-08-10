import { MuseumController } from "../meseums/index.ts";
import { serve } from "../deps.ts"

interface CreateServerDependencies {
    configuration:{
        port:number
    },
    museum:MuseumController
}

export async function createServer ({
    configuration: {
        port
    },
    museum
}: CreateServerDependencies)
 {
// const PORT = 8080;
const server = serve(`:${port}`);

console.log(`Server runnikg at https://localhost;${port}`);

for await ( let req of server ) {
    if (req.url === "/api/museums" && req.method === "GET") {
        req.respond({
            body: JSON.stringify({
                museums: await museum.getAll()
            }),
            status: 200
        })
        continue
    }
    req.respond({ body: 'museums api', status:200 })
   }
 }
