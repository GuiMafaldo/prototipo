import styled from "styled-components";

export const FooterSpace = styled.footer`
    background-color: #d9d9d9;
    max-width: 1440px;
    width: 100%;
    padding: 40px;
`

export const FirstDiv = styled.div`
    display: block;
    text-align: center;

    h3{
        margin-bottom: 20px;
        font-size: 22px;
        font-family: helvetica;
    }
    p{
        margin-bottom: 20px;
    }
`

export const FirstDireitos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-family: helvetica;
        margin-right: 20px;
    }

    img{
        width: 36px;
        height: 36px;
    }

    a{
        color: #0D1B2A;
        text-decoration: none;
        display: flex;
        align-items: center;
        margin-left: 6px;
        cursor-pointer;
        
        :hover{
                margin-left: 6px;
                transition:  ease 0.3s;
                background-color:#d9d9d9;
                color: #0D1B2A;
                font-weight: bold;
                font-family: helvetica;
        }
        span{
            margin-left: 6px;
            padding: 8px;
            background-color: #0D1B2A;
            color: #fff;
            font-weight: bold;
            font-family: helvetica;
        }
    }
`