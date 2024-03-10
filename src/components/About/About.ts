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

        h1{
            font-size: 22px;
        }
    }

    @media (min-width: 768px) {
        width: 100%;
        margin-top: -1px;
        padding-bottom: 30px;
    }
`
export const AboutMe = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 60px;

    @media(max-width: 767px){
        width: 90%;
        margin: 0 auto;
        display: block;
    }

    @media (min-width: 768px) {
        width: 70%;
        height: 60vh;
        margin: 0 auto;
    }
`
export const ListIcons = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 280px;
    margin-top: -190px;
    
    @media(max-width: 767px){
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        width: 30%;
    }
    @media(min-width: 767px) and (max-width: 1024px ){
        display: none;
    }
`
export const TextSobre = styled.p`
    width: 100%;
    margin: 0 auto;
    color: #fff;
    font-family: sans-serif;
    font-weight: normal;

    @media(max-width: 767px) {
        width: 90%;
        margin: 0 auto;
    }
    @media(min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        font-size: 14px;
    }
`
export const Avatar = styled.img`
    height: 300px;
    border-radius: 20px;

    @media(max-width: 767px) {
        margin: 0 auto;
        width: 200px;
        height: 200px;
        margin-left: 20%;
        margin-top: 30px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 160px;
        height: 200px;
        margin: 0 auto;
    }
`
export const Icons = styled.img`
    width: 30px;
    height: 30px;
    display: flex;
    margin-top: -50px;
    margin-right: 18px;
    cursor: pointer;

    @media (max-width: 767px){
        display: flex;
        width: 26x;
        height: 24px;
        
    }
    @media (min-width: 767px) and (max-width: 1024px){
        display: flex;
        width: 26x;
        height: 24px;
        
    }
`
