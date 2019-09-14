interface Attack {
  damage: number;
}

interface Attacks {
  fast: Attack[];
  special: Attack[];
}

interface Pokemon {
  id: string;
  name: string;
  number: string;
  evolutions: Pokemon[];
  isLoading: boolean;
  attacks: Attacks;
}

export default Pokemon;
