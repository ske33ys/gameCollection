export interface Game {
  id: number,
  title: string,
  category: 'Board Game' | 'Card Game',
  elements: number,
  minPlayers: number,
  maxPlayers: number,
}
