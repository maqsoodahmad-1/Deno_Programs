import { createServer } from "./web/index.ts";
import { MongoClient } from "./deps.ts";
import {
  Controller as MuseumController,
  Repository as MuseumRepository,
} from "./meseums/index.ts";

import {
  Controller as UserController,
  Repository as UserRepository,
} from "./users/index.ts";

import { AuthRepository, Algorithm } from "./deps.ts";

const authConfiguration = { 
  algorithm: "HS512" as Algorithm,
  key: "my-secure-key",
  tokenExpirationInSeconds:120
}

//connecting with the uri(connection string)
const client = new MongoClient();
await client.connect("mongodb://127.0.0.1:27017")
const db = client.database("test");

const authRepository = new AuthRepository({
  configuration: authConfiguration
});

const museumRepository = new MuseumRepository();
const museumController = new MuseumController({ museumRepository });

const userRepository = new UserRepository({storage:db});
const userController = new UserController({ userRepository,authRepository });

museumRepository.storage.set("1fbdd2a9-1b97-46e0-b450-62819e5772ff", {
  id: "1fbdd2a9-1b97-46e0-b450-62819e5772ff",
  name: "The Louvre",
  description:
    "The world's largest art museum and a historic monument in Paris, France.",
  location: {
    lat: "48.860294",
    lng: "2.33862",
  },
});

createServer({
  configuration: {
    port: 8080,
    authorization:{
      key: authConfiguration.key,
      algorithm: authConfiguration.algorithm
    }
  },
  museum: museumController,
  user: userController,
});
export {db}
// console.log(await museumController.getAll())
