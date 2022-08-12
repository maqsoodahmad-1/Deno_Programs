// deno-lint-ignore-file
//deno-lint-ignore-file require-await
import { Museum } from "../types.ts";
import { Database, Collection } from "../../deps.ts"
import { MuseumRepository } from "../index.ts";

interface RepositoryDependencies {
    storage:Database,
}

export class Repository implements MuseumRepository {
    storage : Collection<Museum>
    constructor({ storage}: RepositoryDependencies ) {
        this.storage = storage.collection<Museum>('Museums');
    }
            async getAll() {
                const all_museusm = await this.storage.find().toArray();
                return all_museusm
            }
    
}

// function getAll() {
// throw new Error("Function not implemented.");
// }
