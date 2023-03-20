import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;

    img{
        margin-top:100px;
        z-index:99;
        transition: all .5s ease-in-out .0s;

    }

    @media (max-width: 750px) {
        margin-top: 50px;
        display: block;
        justify-content: center;

        img {
            width: 200px;
            margin-left: 20px;
        }
    }
   
`

export const Circulo = styled.div`
        width: 100%;
        max-width: 90%;
        height: 100%;
        background-color: #ACBCCC;
        position: absolute;
        bottom: 0;
        right: 0;
        clip-path: circle(600px at right 1000px);
        transition: all .5s ease-in-out .0s;
        ;

        @media (max-width: 750px) {
            display: none;
        }

       
`

export const Ipho = styled.div`
    
    
    h1{
        font-size: 30px;
        font-weight: 700;
    }

    h2{
        font-size: 40px;
        margin: 10px 0 15px 0;
    }

    p{
        font-size: 15px;
        margin-bottom: 25px;
    }

    h3{
        font-size: 20px;
        color: #626262;
        font-weight: 300;
        margin-bottom: 30px;
    }

    .botao{
    background-color:#0071e3 ;
    border: none;
    color: #ffffff;
    padding: 10px 30px;
    border-radius: 30px;
    margin-bottom: 40px;
    cursor: pointer;
    transition:all .6s ease-in-out .0s ;

    &:hover{
        transform: scale(1.2);
    }

    &:active{
        opacity: .2;

    }

    }
    @media (max-width: 750px){

        h1{
            font-size: 20;
            line-height: 90px;
        }

        h2{
            font-size: 30px;
            line-height: 30px;
            margin-bottom: 20px;
        }
        p{
            margin-bottom: 50px;
        }
    }

    

`

export const Container_button = styled.div`
    display: flex;
    gap: 10px;

    .style{
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease-in-out 0s;

        &:hover{
            transform: scale(1.2);
        }

        &:active{
            opacity: .2;
        }

    }

  

    .azul{
        background-color: #0071e5;
    }

    .amarelo{
        background-color: #D6C05A;
    }

    .branco{
        background-color: #F1F0Ed;
    }

    
    .preto{
        background-color: #24292F;
    }

    
    .vermelho{
        background-color: #F13D46;
    }

    
    .roxo{
        background-color: #f0c;
    }
`

 