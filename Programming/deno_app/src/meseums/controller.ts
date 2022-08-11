import type { MuseumController,MuseumRepository } from "./index.ts";
 interface ControllerDependencies {

    museumRepository: MuseumRepository
 }

export class Controller implements MuseumController {

    museumRepository: MuseumRepository

    constructor ({ museumRepository }:
    ControllerDependencies) {
        this.museumRepository = museumRepository
}
    // deno-lint-ignore require-await
    async getAll() {
        return this.museumRepository.getAll();
    }
}