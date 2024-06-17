export interface Controller {
  get: (arg: Object | null) => Promise<any>;
  getFilter: (arg: Object | null) => Promise<any>;
  update: (filter:number, item:Object) => Promise<any>;
}