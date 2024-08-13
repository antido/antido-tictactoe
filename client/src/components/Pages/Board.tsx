import React, { useState, useEffect } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import { useNavigate, useLocation } from "react-router-dom";

const Board = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [player1Win, setPlayer1Win] = useState(0);
    const [player2Win, setPlayer2Win] = useState(0);
    const [promptModal, setPromptModal] = useState<boolean>(false);

    // Toggle Prompt Modal 
    const viewPromptModal = () => setPromptModal(!promptModal);

    let playersData = location.state.players;
    const playersName: string[] = Object.values(playersData);
    const players = [{ type: 'X', name: playersName[0] }, { type: 'O', name: playersName[1] }];

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

    useEffect(() => {
        const board = document.getElementById('board')!;
        const squares = document.getElementsByClassName('square')!;

        let currentPlayer = players[0].type;
        const endMessage = document.createElement('h2');
        endMessage.style.marginTop = '30px';
        endMessage.style.textAlign = 'center';
        endMessage.style.color = 'blue';

        if (board) {
            board.after(endMessage);
        }

        // Click Event For Each Board Square
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener('click', () => {
                if (squares[i].textContent !== '') {
                    return;
                }
                squares[i].textContent = currentPlayer;

                if (checkWin(currentPlayer)) {
                    let winnerName = players[0].name;

                    if (currentPlayer !== "X") {
                        winnerName = players[1].name;  
                    } 

                    endMessage.style.color = 'green';
                    endMessage.textContent = `Game over! ${winnerName} wins!`;
                    board.classList.add("not-allowed");

                    setTimeout(() => {
                        viewPromptModal();
                    }, 500);

                    return;
                }

                if (checkTie()) {
                    endMessage.style.color = 'coral';
                    endMessage.textContent = `Game is tied!`;

                    setTimeout(() => {
                        viewPromptModal();
                    }, 500);

                    return;
                }
                currentPlayer = (currentPlayer === players[0].type) ? players[1].type : players[0].type;

                if (currentPlayer == players[0].type) {
                    endMessage.textContent = players[0].name + `'s turn!`;
                } else {
                    endMessage.textContent = players[1].name + `'s turn!`;
                }     
            });   
        }

        // Check If Player Win
        const checkWin = (currentPlayer: string) => {
            for (let i = 0; i < winningCombinations.length; i++) {
                const [a, b, c] = winningCombinations[i];
                
                if (squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer) {
                    if (currentPlayer === "X") {
                        setPlayer1Win(player1Win => ++player1Win);
                    } else {
                        setPlayer2Win(player2Win => ++player2Win);
                    }

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
    }, []);

    // New Game
    const newGame = () => {
        const board = document.getElementById('board')!;
        const squares = document.getElementsByClassName('square')!;

        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = "";
        }

        viewPromptModal();
        board.classList.remove("not-allowed");       
    }

    // Stop Game And Return Home
    const stopGame = () => {
        navigate("/");
    }

    return (
        <>
            <div className="main-container">
                <h2 className="display-5 text-center">Tic Tac Toe</h2>

                <div className="players-section my-3">
                    <small className="fw-bold">{playersName[0]}:</small>
                    <span className="px-1">{player1Win}</span>
                    <br/>
                    <small className="fw-bold">{playersName[1]}:</small>
                    <span className="px-1">{player2Win}</span>
                </div>
                
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
            </div>
            
            {/* Prompt Modal */}
            <Modal isOpen={promptModal} toggle={viewPromptModal} backdrop="static" keyboard={false}>
                <ModalHeader toggle={viewPromptModal}>Message Prompt</ModalHeader>
                <ModalBody>
                    <div className="d-flex justify-content-center align-items-center gap-4">
                        <Button
                            color="danger"
                            type="button"
                            onClick={() => stopGame()}
                        >
                            Stop
                        </Button>
                        <Button
                            color="primary"
                            type="button"
                            onClick={() => newGame()}
                        >
                            Continue
                        </Button>
                    </div>
                </ModalBody>
            </Modal>
            {/* End Add Modal */}
        </>
    )
}

export default Board;