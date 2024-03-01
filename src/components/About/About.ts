import styled from "styled-components";


export const FirstDiv = styled.div`
    background-color: #0D1B2A;
    max-width: 1280px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 10px;
    padding-top: 40px;

    @media(max-width: 767px){
        display: block;
        width: 100%;
        margin-top: -1px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 90%;
        margin-top: -1px;
    }
`
export const AboutMe = styled.div`
    display: inline-block;
    width: 640px;
    text-align: center
    flex-direction: column;
    margin-left: 260px;

    @media(max-width: 767px){
        display: block;
        width: 100%;
        margin: 0 auto;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        margin-left: 140px;
    }
`
export const ListIcons = styled.div`
    display: flex;
    margin: 0 auto;
    align-itens: center;
    


    @media(max-width: 767px){
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:-100px;
    }
`

export const Title = styled.h1`
    color: #fff;
    margin-top: 73px;
    margin-bottom: 28px;
    font-family: sans-serif;

    @media(max-width: 767px){
        display: block;
        width: 100%;
        font-size: 24px;
        text-align: center;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 18px;
        margin: 0 auto;
        margin-bottom: 30px;
    }
`

export const Paragraph = styled.p`
    font-size: 16px;
    font-family: sans-serif;
    color: #fff;
    display: block;

    @media(max-width: 767px){
        width: 100%;
        font-size: 12px;
        margin: 0;
        text-align: center;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 12px;
        font-weigth: normal;
    }
`
export const Space = styled.span`
    @media(max-width: 767px){
        display: none;
    }
`

export const Avatar = styled.img`
    width: 300px;
    heigth: 424px;
    margin-rigth: 150px;
    padding-bottom: 108px;

    @media(max-width: 767px) {
        width: 300px;
        margin: 10px 0 0 33px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 250px;
    }
`

export const Icons = styled.img`
    width: 40px;
    display: flex;
    @media (max-width: 767px){
        width: 36px;
        margin: -80px 12px 0;
    }
`