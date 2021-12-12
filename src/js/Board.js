/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unreachable-loop */
export default class Board {
  constructor() {
    this.board = null;
  }

  newBoard() {
    const board = document.createElement('div');
    board.classList.add('board');

    for (let i = 0; i <= 4; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      board.appendChild(cell);
    }
    this.board = board;
    return this.board;
  }
}
