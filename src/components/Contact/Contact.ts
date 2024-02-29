import styled from "styled-components";

export const Divsion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    @media( max-width: 767px){
        width: 100%;
    }
`

export const Titulo = styled.h2`
    padding-top: 80px;
    padding-bottom: 60px;
    color: #0D1B2A;
    font-size: 42px;

    @media(max-width: 767px){
        font-size: 36px;
    }
`

export const Pes = styled.p`
    font-size: 32px;
    color: #0D1B2A;
    margin-bottom: 20px;

    @media(max-width: 767px){
        font-size: 18px;
        margin-left: -10px;
    }
`

export const Links = styled.a`
    text-decoration: none;
    color: #0D1B2A;

    @media(max-width: 767px){
        font-size: 18px;
        margin-left: -5px;
    }
`

export const ImagensPerfil = styled.img`
    margin-bottom: -10px;
    margin-right: 10px;
    width: 40px;


    @media(max-width: 767px){
        
        width: 30px;
    }
`