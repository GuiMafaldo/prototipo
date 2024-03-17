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

    @media(max-width: 767px){
        display: block;
    }
`

export const FirstDireitos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    p{
        font-family: helvetica;
        margin-top: 40px;
        
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
    }
    span{
        margin-left: 6px;
        transition:  ease 0.3s;
        background-color:#0D1B2A;
        color: #fff;
        padding: 8px;
        font-weight: bold;
        font-family: helvetica;
        cursor: pointer;
}
    div{
        display: flex;
        align-items: center;
        margin-top: 40px;
    }

    @media(max-width: 767px){
        display: block;
        flex-direction: row;
        align-items: left;
        width: 100%;

        p{
            font-size: 14px;
            margin-top: 40px;
        }

        a{
            display: flex;
            margin-top: 10px;
        }

        div{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        span{
            margin: 0 auto;
            margin-bottom: -8px;
            margin-left: 10px;
            padding: 8px;
            background-color: #0D1B2A;
            color: #fff;
            font-weight: bold;
            font-family: helvetica;
        }
    }
`