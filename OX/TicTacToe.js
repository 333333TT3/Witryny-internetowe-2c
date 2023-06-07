class TicTacToe {
  constructor() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.currentPlayer = 'X';
    this.moves = 0;
    this.isGameOver = false;
  }

  makeMove(row, col) {
    if (this.isGameOver || this.board[row][col] !== '') {
      return;
    }

    this.board[row][col] = this.currentPlayer;
    this.moves++;

    if (this.checkWin(row, col)) {
      this.isGameOver = true;
      alert(`Player ${this.currentPlayer} won`);
    } else if (this.moves === 9) {
      this.isGameOver = true;
      alert("It's a draw");
    } else {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWin(row, col) {
    const player = this.board[row][col];

    if (
      this.board[row][0] === player &&
      this.board[row][1] === player &&
      this.board[row][2] === player
    ) {
      return true;
    }

    if (
      this.board[0][col] === player &&
      this.board[1][col] === player &&
      this.board[2][col] === player
    ) {
      return true;
    }

    if (
      (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) ||
      (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player)
    ) {
      return true;
    }
    return false;
  }
}
const ticTacToe = new TicTacToe();