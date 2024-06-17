import { ICharacterService } from '../../../../../domain/services/character/character.implementation';
import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import { badRequest, ok, serverError } from '../../helpers/api-response';

export class CharacterController implements Controller {
  constructor(private readonly testService: ICharacterService) {}
  async get(arg:Object | null): Promise<any> {
    try {
      return await this.testService.getCharacter(arg);
    } catch (error) {
      return serverError(error);
    }
  }

  async getFilter(arg:Object | null): Promise<any> {
    try {
      return await this.testService.getCharacterFilter(arg);
    } catch (error) {
      return serverError(error);
    }
  }

  async update(filter:number, item:Object): Promise<any> {
    try {
      return await this.testService.updateCharacter(filter, item);
    } catch (error) {
      return serverError(error);
    }
  }
}