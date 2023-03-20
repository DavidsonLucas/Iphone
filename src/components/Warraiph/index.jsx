import React from 'react'
import Amarelo from '../assets/iphone-amarelo.png'
import Azul from '../assets/iphone-azul.png'
import Branco from '../assets/iphone-branco.png'
import Black from '../assets/iphone-preto.png'
import Roxo from '../assets/iphone-roxo.png'
import Vermelho from '../assets/iphone-Vemelho.png'
import * as c from './styled'

const Warraiph = () => {
  const trocarDeCor_Azul = () => {
    let circulo = document.querySelector('.circulo')
    let imgSrc = document.querySelector('.iphone')
    circulo.style.background = "#ACBCCC"
    imgSrc.src = Azul
  }
  const trocarDeCor_Amarelo = () => {
    let circulo = document.querySelector('.circulo')
    let imgSrc = document.querySelector('.iphone')
    circulo.style.background = "#D6C05A"
    imgSrc.src = Amarelo
  }
  const trocarDeCor_Branco = () => {
    let circulo = document.querySelector('.circulo')
    let imgSrc = document.querySelector('.iphone')
    circulo.style.background = "#F1F0Ed"
    imgSrc.src = Branco
  }
  const trocarDeCor_Preto = () => {
    let circulo = document.querySelector('.circulo')
    let imgSrc = document.querySelector('.iphone')
    circulo.style.background = "#24292F"
    imgSrc.src = Black
  }
  const trocarDeCor_Vermelho = () => {
    let circulo = document.querySelector('.circulo')
    let imgSrc = document.querySelector('.iphone')
    circulo.style.background = "#F13D46"
    imgSrc.src = Vermelho
  }
  const trocarDeCor_Roxo = () => {
    let circulo = document.querySelector('.circulo')
    let imgSrc = document.querySelector('.iphone')
    circulo.style.background = "#AEA3B4"
    imgSrc.src = Roxo
  }

  return (
    <c.Container>
      <c.Ipho>
        <h1 >iPhone 14</h1>

        <h2 >Tão poderoso. Tão ao seu alcance.</h2>

        <p >
          Em dois tamanhos perfeitos. Agora com um toque de amarelo.
        </p>

        <h3 >A partir de R$ 633,25/mês ou R$ 7.599</h3>
        <button className="botao">Comprar</button>

        <p className="escolha-cor">Escolha sua cor:</p>
        <c.Container_button>
          <button className="azul troca-cor style" onClick={trocarDeCor_Azul}></button>
          <button className="amarelo troca-cor style" onClick={trocarDeCor_Amarelo}></button>
          <button className="branco troca-cor style" onClick={trocarDeCor_Branco}></button>
          <button className="preto troca-cor style" onClick={trocarDeCor_Preto}></button>
          <button className="vermelho troca-cor style" onClick={trocarDeCor_Vermelho}></button>
          <button className="roxo troca-cor style" onClick={trocarDeCor_Roxo}></button>
        </c.Container_button>
      </c.Ipho>
        <c.Circulo className='circulo'></c.Circulo>
        <img className='iphone' src={Azul} alt="iphone" width={450} />
    </c.Container>
  )
}

export default Warraiph
