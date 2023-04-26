export type Guess = {
  name: string;
  guess: number;
};

export type Result = {
  winners: Guess[];
  result: number;
};
