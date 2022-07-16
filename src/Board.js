import React, { useState, useEffect } from 'react';
import "./Board.css";

const BOARD_SIZE = 10;

const Board = () => {
    const createBoard = () =>{
        let rowCount = 0
        let colCount = 0
        let tempArr = []

        let rowNumber = []
        for(let row = 0; row < BOARD_SIZE; row++){
            let colNumber = []
            rowNumber.push(rowCount++)
            for(let col = 0; col < BOARD_SIZE; col++){
                colNumber.push(colCount++)
            }
            colCount = 0
            tempArr.push([colNumber, rowNumber])
        }
        return tempArr
    }

    const [snake, setSnake] = useState(new Set([12]))
    const board = createBoard()

    const moveSnake = () =>{
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
                {board.map((row, rowIdx) => {
                return(<div key={rowIdx} className="row">
                    {row.map((col, colIdx) =>{
                        return(<div key={colIdx} className={col}>
                            {col.map((cell, cellIdx)=>{
                                return(
                                    <div key={cellIdx} className="cell"></div>
                                )
                        })}</div>)
                    })}
                </div>)
            })}
        </div>
    );
};



export default Board;