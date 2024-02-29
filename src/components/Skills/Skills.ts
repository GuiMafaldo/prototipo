import styled from "styled-components";


export const SectionSkill = styled.div`
    max-width: 1280px;
    width: 100%;
    background-color: #0D1B2A;
    text-align: center;
    padding-bottom: 100px;

    @media (min-width: 768px){
        width: 90%;
    }
`
export const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (max-width: 767px){
        width: 70%;
        margin: 0 auto;
        img{
            width: 35px;
        }
    }
`

export const TitleSkill = styled.h2`
    padding-top: 80px;
    margin-bottom: 135px;
    text-align: center;
    color: #fff;
    font-size: 36px;
    font-family: helvetica;
`

export const Imagens = styled.img`
    max-widht: 420px;
    width: 100%; 
    
`
