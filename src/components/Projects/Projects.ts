import styled from "styled-components";

export const Geral = styled.div`
    padding-top: 80px;
    max-width: 1440px;
    width: 100%;
    text-align: center;
    background-color: #e3e3e3;
    padding-bottom: 40px;

    @media (max-width: 767px) {
        display: block;
        width: 100%;
        margin: 0 auto;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
    }
`

export const Imagem = styled.img`
    width: 100%;
    height: 190px;

    @media(max-width: 767px) {
        width: 80%;
        margin-top: 80px;
        border-radius: 4px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80%;
        margin: 0 auto;
        margin-top: 120px;
        margin-bottom: -3px;
    }
`

export const Title = styled.h2`
    margin-bottom: 140px;
    margin-top: 42px;
    font-family: Helvetica;
    font-size: 42px;
    color: #0D1B2A;


    @media(max-width: 767px) {
        width: 100%;
        margin-bottom: 80px;
        
    }
    @media(min-width: 767px) and (max-width: 1024px){
        width: 100%;
        margin-bottom: 80px;
    }
`

export const Cards = styled.div`
    display: flex;
    width: 100%;
    gap: 30px;
    margin: 0 64px;
    padding-bottom: 20px;
    
    
    @media (max-width: 767px) {
        display: block;
        width: 80%;
        text-align: center;
        margin: 0 auto;
    }

    @media(min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
    }

    @media(min-width: 1025px){
        width: 90%;
        margin: 0 auto;
    }
`

export const Description = styled.h4`
    font-size: 22px;
    font-family: Helvetica;
    color: #0D1B2A;
    background-color: #fff;
    padding: 20px;
    margin-top: -3px;

    @media (max-width: 767px) {
        width: 80%;
        margin: 0 auto;
        margin-top: -3px;
        border-radius: 2px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80%;
        display: block;
        margin: 0 auto;
    }
`
export const DivInterna = styled.div`
    width: 90%;
    padding-bottom: 20px;

    @media (max-width: 767px){
        margin: 0 auto;
    }
`

export const Text = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
    color: #0D1B2A;
    background-color: #fff;
    padding: 8px;

    @media(max-width: 767px) {
        width: 80%;
        margin: 0 auto;
        padding-bottom: 30px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding-bottom: 30px;
    }
`

export const Botao = styled.a`
    background-color: #0D1B2A;
    color: #fff;
    padding: 12px;
    margin-right: 20px;
    margin-top: 20px;
    border: 2px solid #fff;
    border-radius: 10px;
    text-decoration: none;

    @media(max-width: 667px) {
        cursor: pointer;
        margin-top: 30px;
        margin-left: 15px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 60%;
        display: block;
        margin: 0 auto;
        margin-top: 20px;
    }
`