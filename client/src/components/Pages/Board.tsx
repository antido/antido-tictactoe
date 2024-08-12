import React, { useEffect } from 'react';

const Board = () => {
    useEffect(() => {
        const board = document.getElementById('board')!;
        const squares = document.getElementsByClassName('square')!;
        const players = ['X', 'O'];

        let currentPlayer = players[0];
        const endMessage = document.createElement('h2');
        endMessage.style.marginTop = '30px';
        endMessage.style.textAlign = 'center';

        if (board) {
            board.after(endMessage);
        }

        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        // Click Event For Each Board Square
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener('click', () => {
                if (squares[i].textContent !== '') {
                    return;
                }
                squares[i].textContent = currentPlayer;

                if (checkWin(currentPlayer)) {
                    endMessage.textContent = `Game over! ${currentPlayer} wins!`;
                    return;
                }

                if (checkTie()) {
                    endMessage.textContent = `Game is tied!`;
                    return;
                }
                currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];

                if (currentPlayer == players[0]) {
                    endMessage.textContent = `X's turn!`;
                } else {
                    endMessage.textContent = `O's turn!`;
                }     
            });   
        }

        // Check If Player Win
        const checkWin = (currentPlayer) => {
            for (let i = 0; i < winningCombinations.length; i++) {
                const [a, b, c] = winningCombinations[i];
                
                if (squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer) {
                    return true;
                }
            }
            return false;
        }

        // Check If Players Tied
        const checkTie = () => {
            for (let i = 0; i < squares.length; i++) {
                if (squares[i].textContent === '') {
                    return false;
                }
            }
            return true;
        }

        // Restart Game
        const restartButton = () => {
            for (let i = 0; i < squares.length; i++) {
                squares[i].textContent = "";
            }
            // endMessage.textContent = `X's turn!`;
            currentPlayer = players[0];
        }
    }, []);

    return (
        <div className="main-container text-center">
            <h2 className="display-5 mb-5">Tic Tac Toe</h2>

            <div id="board">
                <div className="square" id="square0"></div>
                <div className="square" id="square1"></div>
                <div className="square" id="square2"></div>
                <div className="square" id="square3"></div>
                <div className="square" id="square4"></div>
                <div className="square" id="square5"></div>
                <div className="square" id="square6"></div>
                <div className="square" id="square7"></div>
                <div className="square" id="square8"></div>
            </div>  
            <div id="endGame">
                {/* <input type="button" value="Restart" id="restartButton" onClick={() => restartButton()} /> */}
            </div>
        </div>
    )
}

export default Board;