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
    const [snakeMoveTile, setSnakeMoveTile] = useState(1);
    const board = createBoard()

    const handlMoveSnake = (e) =>{
        switch(e.key){
            case "ArrowUp":
                setSnakeMoveTile(-BOARD_SIZE)
                break
            case "ArrowRight":
                setSnakeMoveTile(1)
                break
            case "ArrowDown":
                setSnakeMoveTile(BOARD_SIZE)
                break
            case "ArrowLeft":
                setSnakeMoveTile(-1)
                break
            default:
                return console.log(e.key)
        }
    }

    const moveSnake = () =>{
        var justChanged = false
        if(snake[0] % 10 == 9 && !justChanged){
            setSnake([Math.floor(snake[0] / 10) * 10])
            justChanged = true
            return
        }else if(snake[0] % 10 == 0 && !justChanged){
            setSnake([Math.floor(snake[0] / 10) * 10 + 9])
            justChanged = true
            return
        }else setSnake([snake[0] + snakeMoveTile])

        console.log("deneme")
        justChanged = false
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
        <div className="board" onKeyDown={(event) => {handlMoveSnake(event)}} tabIndex={0}>
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