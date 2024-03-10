import styled from "styled-components";

interface MenuHamb {
    isOpen: boolean
}


export const Cabecalho = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #0D1B2A;
max-width: 1440px;
width: 100%;
padding: 20px;

@media (max-width: 767px){
    display: flex;
    align-itens: center;
    justify-content:start;
    width: 100%;
    margin: 0;
    
}

@media (min-width: 768px) and (max-width: 1024px) {
    max-width: 1024px;
    width: 100%;
}
`
export const MenuMobile = styled.div`
    display: none;
    margin-left: 540px;
    font-size: 30px;
    

    @media(max-width: 767px){
        display: flex;
        width: 100%;
        margin: 0;
        margin-left: 20px;
        font-size: 26px;
    }
`

export const Menu = styled.menu<MenuHamb>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
        width: 100%;
        display: ${(props) => props.isOpen ? 'flex' : 'none'};
    }
    @media (min-width: 767px) and (max-width: 1024px) {
        display: flex;
    }

    
`
export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 300px;

    @media (max-width: 767px) {
        display: flex;
        margin: 0;
        width: 100%;

        a{
            font-size: 16px;
            
        }
    }

    @media (min-width: 767px) and (max-width: 1024px) {
        display: flex;
        margin: 0;
        width: 100%;
    }
`
export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-family: sans-serif;
    font-size: 20px;
    margin-right: 40px;

    a{
        color: #fff;
        text-decoration: none;
    }

    @media (max-width: 767px) {
        font-size: 14px;
        margin: 10px;
        

`

export const Imagem = styled.img`
    margin-left: 60px;

    @media (max-width: 767px) {
        display: none;
    }
`