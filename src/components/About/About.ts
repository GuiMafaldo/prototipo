import styled from "styled-components";


export const FirstDiv = styled.div`
    background-color: #0D1B2A;
    max-width: 1440px;
    width: 100%;
    display: block;
    justify-content: space-around;
    padding-bottom: 160px;
    padding-top: 40px;

    h1{
        text-align: center;
        font-family: "Acme";
        font-weight: 400;
        color: #fff;
        margin-bottom: 40px;
    }

    @media(max-width: 767px){
        display: block;
        width: 100%;
        margin-top: -1px;
    }

    @media (min-width: 768px) {
        width: 100%;
        margin-top: -1px;
    }
`
export const AboutMe = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 60px;

    @media(max-width: 767px){
        width: 100%;
        margin-left: 60px;
    }

    @media (min-width: 768px) {
        width: 100%;
        height: 60vh;
        margin-left: 40px;
    }
`
export const ListIcons = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 280px;
    margin-top: -190px;
    
    


    @media(max-width: 767px){
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:-100px;
    }
`

export const TextSobre = styled.p`
    width: 100%;
    margin: 0 auto;
    color: #fff;
    font-family: sans-serif;
    font-weight: normal;

    @media(max-width: 767px) {
        width: 100%;
        margin-left: -30px;
    }
    @media(min-width: 768px) {
        width: 100%;

    }
`
export const Avatar = styled.img`
    height: 300px;
    border-radius: 20px;

    @media(max-width: 767px) {
        margin: 0 10px 0 0;
    
    }

    @media (min-width: 768px){
        width: 200px;
        margin: 0 auto;
    }
`
export const Icons = styled.img`
    width: 30px;
    height: 30px;
    display: flex;
    margin-top: -50px;
    margin-right: 18px;
    @media (max-width: 767px){
        width: 26x;
    }
`