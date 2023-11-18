import '../index.css'
import { useState } from 'react';

export default function Square({value,squareClick}){
    return (
        <button className="square" onClick={squareClick}>{value}</button>
    );
}