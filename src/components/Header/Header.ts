import styled from "styled-components";

export const Cabecalho = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0D1B2A;
    max-width: 1280px;
    width: 100%;
    padding: 20px;

    @media (max-width: 767px){
        display: flex;
        align-itens: center;
        justify-content: space-around;
        width: 100%;
        
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 1024px;
        width: 100%;
    }
`

export const Menu = styled.menu`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    
`
export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
        display: flex;
    }
`
export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin-right: 54px;
    color: #fff;
    font-family: sans-serif;
    font-size: 20px;

    a{
        color: #fff;
        text-decoration: none;
    }

    @media (max-width: 767px) {
        font-size: 14px;
        margin: 14px;
    }
`

export const Imagem = styled.img`
    margin-left: 60px;

    @media (max-width: 767px) {
        width: 100px;
        margin-left: 0px;
        margin-rigth: 20px;
    }
`