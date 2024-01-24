import { useState } from 'react'
import './game.css'
import Score from './score';

let pontuaçãoX = 0
let pontuaçãoO = 0
let JogadorAtual = 'X'
let jogoOnOff = true
export default function Game(){

    const [tabuleiro, setTabuleiro] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
    const jogo = (e,r,c) => {
        const target = e.textContent
        if(target == ''){
            if(e.classList.length == 2){
                e.classList.remove('red','blue')
                JogadorAtual == 'X' ? e.classList.add('red'): e.classList.add('blue')
            }else{
                JogadorAtual == 'X' ? e.classList.add('red'): e.classList.add('blue')
            }
            const novoTabuleiro = [...tabuleiro]
            novoTabuleiro[r][c] = JogadorAtual
            setTabuleiro(novoTabuleiro)
            JogadorAtual == 'X' ? JogadorAtual = 'O': JogadorAtual = 'X'
            VerificaVencedor(e)
        }else{
            return
        }
    }
    const VerificaVencedor = (e) => {
        //linhas
        for(let r = 0; r < 3; r++){
            let pontosX = 0
            let pontosO = 0
            for(let c = 0; c < 3; c++){
                if(tabuleiro[r][c] == 'X'){
                    pontosX++
                }else if(tabuleiro[r][c] == 'O'){
                    pontosO++
                }
            }
            if(pontosO >= 3){
                setTimeout(()=>setTabuleiro([['', '', ''], ['', '', ''], ['', '', '']]),1000)
                pontuaçãoO++
            }else if(pontosX >= 3){
                setTimeout(()=>setTabuleiro([['', '', ''], ['', '', ''], ['', '', '']]),1000)
                pontuaçãoX++
            }
        }
        //Colunas
        for(let c = 0; c < 3; c++){
            let pontosX = 0
            let pontosO = 0
            for(let r = 0; r < 3; r++){
                if(tabuleiro[r][c] == 'X'){
                    pontosX++
                }else if(tabuleiro[r][c] == 'O'){
                    pontosO++
                    console.log('O')
                }
            }
            if(pontosO >= 3){
                setTimeout(()=>setTabuleiro([['', '', ''], ['', '', ''], ['', '', '']]),1000)
                pontuaçãoO++
            }else if(pontosX >= 3){
                setTimeout(()=>setTabuleiro([['', '', ''], ['', '', ''], ['', '', '']]),1000)
                pontuaçãoX++
            }
        }
        // Diagonal Principal
        let pontosXDiagonalPrincipal = 0;
        let pontosODiagonalPrincipal = 0;
        for (let i = 0; i < 3; i++) {
            if (tabuleiro[i][i] === 'X') {
            pontosXDiagonalPrincipal++
            } else if (tabuleiro[i][i] === 'O') {
            pontosODiagonalPrincipal++
            }
        }
        if (pontosODiagonalPrincipal >= 3) {
            setTimeout(()=>setTabuleiro([['', '', ''], ['', '', ''], ['', '', '']]),1000)
            pontuaçãoO++
            return
        } else if (pontosXDiagonalPrincipal >= 3) {
            setTimeout(()=>setTabuleiro([['', '', ''], ['', '', ''], ['', '', '']]),1000)
            pontuaçãoX++
            return
        }

        // Diagonal Secundária
        let pontosXDiagonalSecundaria = 0;
        let pontosODiagonalSecundaria = 0;
        for (let i = 0; i < 3; i++) {
            if (tabuleiro[i][2 - i] === 'X') {
            pontosXDiagonalSecundaria++
            } else if (tabuleiro[i][2 - i] === 'O') {
            pontosODiagonalSecundaria++
            }
        }
        if (pontosODiagonalSecundaria >= 3) {
            setTimeout(()=>setTabuleiro([['', '', ''], ['', '', ''], ['', '', '']]),1000)
            pontuaçãoO++
        } else if (pontosXDiagonalSecundaria >= 3) {
            setTimeout(()=>setTabuleiro([['', '', ''], ['', '', ''], ['', '', '']]),1000)
            pontuaçãoX++
        }
        let vazio = 0
        tabuleiro.filter(() => {
            for(let r = 0; r < 3; r++){
                for(let c = 0; c <3; c++){
                    if(tabuleiro[r][c] === ''){
                        vazio++
                        console.log(vazio)
                    }
                }
            }
        })
        if(vazio <3){
            setTimeout(()=>{
                alert('VELHA!')
                setTabuleiro([['', '', ''], ['', '', ''], ['', '', '']])
            },1000)
        }
    }
    return(
        <>
        <Score x={pontuaçãoX} o={pontuaçãoO} jogadorAtual={JogadorAtual}/>
        <div className="gamecontent">
            <div className="campo" style={{color:{}}} onClick={(e) => jogo(e.target,0,0)}>{tabuleiro[0][0]}</div>
            <div className="campo" style={{color:{}}} onClick={(e) => jogo(e.target,0,1)}>{tabuleiro[0][1]}</div>
            <div className="campo" style={{color:{}}} onClick={(e) => jogo(e.target,0,2)}>{tabuleiro[0][2]}</div>
            <div className="campo" style={{color:{}}} onClick={(e) => jogo(e.target,1,0)}>{tabuleiro[1][0]}</div>
            <div className="campo" style={{color:{}}} onClick={(e) => jogo(e.target,1,1)}>{tabuleiro[1][1]}</div>
            <div className="campo" style={{color:{}}} onClick={(e) => jogo(e.target,1,2)}>{tabuleiro[1][2]}</div>
            <div className="campo" style={{color:{}}} onClick={(e) => jogo(e.target,2,0)}>{tabuleiro[2][0]}</div>
            <div className="campo" style={{color:{}}} onClick={(e) => jogo(e.target,2,1)}>{tabuleiro[2][1]}</div>
            <div className="campo" style={{color:{}}} onClick={(e) => jogo(e.target,2,2)}>{tabuleiro[2][2]}</div>  
        </div>
        </>
    )
}