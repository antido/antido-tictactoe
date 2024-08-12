import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IPlayers } from '../Interface/GlobalInterface';

const Home = () => {
    const navigate = useNavigate();

    const [players, setPlayers] = useState<IPlayers[]>([]);
    const [addModal, setAddModal] = useState<boolean>(false);

    // Toggle Add Modal 
    const addDataModal = () => setAddModal(!addModal);

    // Handle Field OnChange
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPlayers(prev => ({
            ...prev,
            [name]: value
        }));
    }

    // Handle Start Game
    const startGame = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { player1, player2 } = e.target;

        if (player1.value === "") {
            toast.error("Player 1 name is required.");
        } else if (player2.value === "") {
            toast.error("Player 2 name is required.");
        } else {
            navigate("/board");
        }
    }

    return (
        <>
            <ToastContainer autoClose={2000} />
            <div className="main-container text-center">
                <h2 className="display-4">Play <b>Tic-Tac-Toe</b></h2>
                <button 
                    className="btn btn-md btn-primary my-5"
                    onClick={addDataModal}
                >
                    Start New Game
                </button>
            </div>

            {/* Add Modal */}
            <Modal isOpen={addModal} toggle={addDataModal} backdrop="static" keyboard={false}>
                <ModalHeader toggle={addDataModal}>Set Players</ModalHeader>
                <ModalBody>
                    <Form onSubmit={startGame}>
                        <FormGroup>
                            <small className="fw-bold text-success">Player 1:</small>
                            <Input
                                id="player1Field"
                                name="player1"
                                placeholder="Type here"
                                type="text"
                                onChange={handleOnChange}
                            />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <small className="fw-bold text-success">Player 2:</small>
                            <Input
                                id="player2Field"
                                name="player2"
                                placeholder="Type here"
                                type="text"
                                onChange={handleOnChange}
                            />
                        </FormGroup>
                        {' '}
                        <Button
                            color="primary"
                            type="submit">
                            START
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
            {/* End Add Modal */}
        </>
    )
}

export default Home;