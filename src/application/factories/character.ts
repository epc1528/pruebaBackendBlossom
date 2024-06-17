import { CharacterService } from '../../domain/services';
import { CharacterRepository } from '../../infrastructure/repositories/character.repository';
import {
  CharacterController
} from '../../infrastructure/entry-points/api/v1/character/character.controller';

export class characterController {
  async getCharacter(arg: Object | null): Promise<CharacterController> {
    const characterRepository = new CharacterRepository();
    const characterService = new CharacterService(characterRepository);
    const characterController = new CharacterController(characterService);
    const mirar = await characterController.get(arg)
    return mirar;
  }

  async getCharacterFilter(arg: Object | null): Promise<CharacterController> {
    const characterRepository = new CharacterRepository();
    const characterService = new CharacterService(characterRepository);
    const characterController = new CharacterController(characterService);
    const mirar = await characterController.getFilter(arg)
    return mirar;
  }

  async updateCharacter(filter:number, item:Object): Promise<CharacterController> {
    const characterRepository = new CharacterRepository();
    const characterService = new CharacterService(characterRepository);
    const characterController = new CharacterController(characterService);
    const mirar = await characterController.update(filter, item)
    return mirar;
  }
}