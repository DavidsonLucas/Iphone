import styled from "styled-components";

export const Tudo = styled.div`
    border-bottom:1px solid #a0a0a0 ;
    padding:10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    

    img{
        margin-right: 8rem;
    }

    @media (max-width: 750px){
        img{
            margin-left: 38rem;
        }
    }    
`

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    gap:80px;
    
    li{
        display: flex;
        font-weight: 500;
    }

    a{
            position: relative;
            font-size: 1.1rem;
            font-weight: 500;
            margin-left: 20px;

            &::after{
                content: '';
                position: absolute;
                left: 0;
                bottom: -6px;
                width: 100%;
                height: 3px;
                background: #9F9E9E;
                border-radius: 5px;
                transform-origin: right;
                transform: scalex(0);
                transition: transform .5s;
            }

            &:hover::after{
                transform-origin: left;
                transform: scalex(1);
            }

            @media (max-width: 750px){
                display: none;
            }
}
`