import { AboutMe, Avatar, FirstDiv, Icons, ListIcons, Paragraph, Space, Title } from "./About";

const About = () => {
    return (
        <FirstDiv id="home">
            <AboutMe>
                <Title>Olá, Mundo.</Title>
                <Paragraph>Aqui você encontrara as informações necessarias <Space><br /></Space>
                    para me conhecer melhor.</Paragraph> <br />
                <Paragraph>Sou estudante de Desenvolvimento web, FRONT & <Space><br /></Space>
                    BACK END.</Paragraph> <br />
                <Paragraph>Abaixo tem as seções com Projetos, Skills e meus Contatos <Space><br /></Space>
                    para mais informações.</Paragraph>
            </AboutMe>
            <Avatar src="/img/avatar.png" alt="avatar" />
            <ListIcons>
                <Icons src="/img/icons/github.svg" alt="logo github" />
                <Icons src="/img/icons/linkedin.png" alt="logo linkedin" />
                <Icons src="/img/icons/gmail.png" alt="logo gmail" />
                <Icons src="/img/icons/zap.png" alt="logo zap" />
            </ListIcons>
        </FirstDiv>
    )
}
export default About;