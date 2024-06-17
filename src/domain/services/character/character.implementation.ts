export interface ICharacterService {
  getCharacter: (arg: Object | null) => Promise<any>;
  getCharacterFilter: (arg: Object | null) => Promise<any>;
  updateCharacter : (filter:number, item:Object) => Promise<any>;
  getCharacterUnique: (arg: Object | null) => Promise<any>;
  getCharacterOrigin: (arg: number) => Promise<any>;
  getCharacterLocation: (arg: number) => Promise<any>;
  getCharacterEpisode: (arg: number) => Promise<any>;
}