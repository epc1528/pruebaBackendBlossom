export interface Controller {
  get: (arg: Object | null) => Promise<any>;
  getFilter: (arg: Object | null) => Promise<any>;
  update: (filter:number, item:Object) => Promise<any>;
  getUnique: (arg: Object | null) => Promise<any>;
  getLocation: (arg: number) => Promise<any>;
  getEpisode: (arg: number) => Promise<any>;
  getOrigin: (arg: number) => Promise<any>;
}