import React, { useState, useEffect } from 'react';
import "./Board.css";

const BOARD_SIZE = 10;

const Board = () => {
    const createBoard = () =>{
        let tempArr = []
        let Number = 0
        let numberArr = []

        for(let row = 0; row < BOARD_SIZE; row++){
            numberArr = []
            for(let col = 0; col < BOARD_SIZE; col++){
                numberArr.push(Number++)
            }
            tempArr.push(numberArr)
        }
        return tempArr
    }

    const [snake, setSnake] = useState([12])
    const board = createBoard()

    const moveSnake = () =>{
        setSnake([snake[0] + 1])
        console.log(snake)
    }

    const drawSnake = (cell) =>{
        var returnClass = "cell"
        snake.map((tiles) => {
            if(tiles === cell){
                returnClass = "snake-cell"
            }
        })
        
        return returnClass
    }

    useEffect(()=>{
        var interval = setInterval(() => {
            moveSnake()
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    },[snake] )   

    return (
        <div className="board">
            {board.map((row, rowIdx) => 
                <div key={rowIdx} className="row">
                {row.map((cell, cellIdx) =>
                    <div key={cellIdx} className={drawSnake(cell)}>{cell}</div>
                )}
            </div>)
            }
        </div>
    );
};



export default Board;