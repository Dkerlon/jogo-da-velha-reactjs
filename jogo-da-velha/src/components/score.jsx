import { useState } from 'react'
import './game.css'
export default function Score(props){
    console.log(props.jogadorAtual)
    return(
        <>
        <h1 style={{textAlign:'center',marginBottom:'30px',fontWeight:'bold',color:'gray',fontSize:'50px'}}>JOGO DA VELHA!</h1>
        <div className='scorePainel'>
            <div className={props.jogadorAtual == 'X' ? 'red_score bordaR' : 'red_score'}>
                <span>X - {props.x}</span>
            </div>
            <div className={props.jogadorAtual == 'O' ? 'blue_score bordaA' : 'blue_score'}>
                <span>O - {props.o}</span>
            </div>
        </div>
        </>
    )
}