export interface ICharacterService {
  getCharacter: (arg: Object | null) => Promise<any>;
  getCharacterFilter: (arg: Object | null) => Promise<any>;
  updateCharacter : (filter:number, item:Object) => Promise<any>;
}