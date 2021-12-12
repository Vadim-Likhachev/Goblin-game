export default class GamePlay {
  constructor(board, char) {
    this.board = board;
    this.char = char;
    this.activeChar = null;
  }

  init() {
    this.redrawBoard();

    this.start();
  }

  redrawBoard() {
    const board = this.board.newBoard();
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = '<h1 class=\'title\'>Goblin Game!</h1>';
    container.appendChild(board);
    body.insertBefore(container, body.firstChild);
    this.cells = [...board.children];
  }

  generate() {
    const position = Math.floor(Math.random() * this.boardSize ** 2);
    if (position === this.position) {
      this.generateposition();
      return;
    }
    this.deletedChar();
    this.position = position;
    this.adventChar();
  }

  deletedChar() {
    if (this.activeChar === null) {
      return;
    }
    this.cells[this.position].firstChild.remove();
  }

  adventChar() {
    this.activeChar = this.char.getChar();
    this.cells[this.position].appendChild(this.activeChar);
  }

  start() {
    setInterval(() => {
      this.generateposition();
    }, 1000);
  }
}
