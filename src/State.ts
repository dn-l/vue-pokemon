export interface FilterParams {
  showOnlyFavourite: boolean;
  showEvolutions: boolean;
}

export enum SortBy {
  Name = 'Name',
  Number = 'Number',
  Damage = 'Damage',
}

interface State {
  favourites: string[];
  filterParams: FilterParams;
  sortBy: SortBy;
}

export default State;
