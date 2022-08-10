import type { MeseumController,MuseumRepository } from "./index.ts";
 interface ControllerDependencies {

    museumRepository: MuseumRepository
 }

export class Controller implements MeseumController {

    museumRepository: MuseumRepository

    constructor ({ museumRepository }:
    ControllerDependencies) {
        this.museumRepository = museumRepository
}
    async getAll() {
        return this.museumRepository.getAll();
    }
}