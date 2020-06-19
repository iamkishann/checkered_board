import React from 'react';
import Board from './Board.js';


export class App extends React.Component {

    constructor(props) {
        super(props);

        this.columns = this.setColumns();

        this.state = {
            players: null,
            history: [{
                boardState: this.createBoard(),
            }],
            activePiece: null,
            moves: [],
            jumpKills: null,
            hasJumped: null,
            stepNumber: 0,
            winner: null,
        }
    }

    setColumns() {
        const columns = {};
        columns.a = 0;
        columns.b = 1;
        columns.c = 2;
        columns.d = 3;
        columns.e = 4;
        columns.f = 5;
        columns.g = 6;
        columns.h = 7;

        return columns;
    }

    createBoard() {

        let board = {};

        for (let key in this.columns) {

            if (this.columns.hasOwnProperty(key)) {
                for (let n = 1; n <= 8 ; ++n) {

                    let row = key + n;
                    board[row] = null;
                }
            }
        }

        return board;
    }



    render() {
        const columns = this.columns;
        const stateHistory = this.state.history;
        const currentState = stateHistory[this.state.stepNumber];
        const boardState = currentState.boardState;
        const moves = this.state.moves;


        return(
            <div className="game-board">
            <Board
        boardState = {boardState}
        moves = {moves}
        columns = {columns}
        />
        </div>
    );
    }
}
