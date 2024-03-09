import { AboutMe, Avatar, FirstDiv, Icons, ListIcons, TextSobre} from "./About";

const About = () => {
    return (
        <FirstDiv id="home">
            <h1>DESENVOLVEDOR FRONT-END</h1>
            <AboutMe>
            <TextSobre>
                Olá a todos,

                Meu nome é Guilherme, tenho 29 anos e sou um entusiasta do desenvolvimento front-end.
                Meu percurso nesse campo tem sido uma jornada repleta de aprendizado e dedicação <br /> <br />
                Cada projeto que embarquei representou não apenas um desafio técnico, mas também uma oportunidade de crescimento pessoal e profissional.
                Através deles, pude aprimorar minhas habilidades, expandir meu conhecimento e explorar novas tecnologias e tendências. <br /> <br />
                Neste portfólio, compartilho com vocês uma seleção dos meus projetos mais recentes e significativos.
                Desde websites responsivos e intuitivos até aplicações web dinâmicas e inovadoras,
                cada projeto aqui apresentado foi desenvolvido com cuidado, atenção aos detalhes e um compromisso inabalável com a qualidade. <br /> <br />
                Espero que desfrutem desta jornada através do meu portfólio e que, ao explorarem cada projeto, possam vislumbrar não apenas o que fiz,
                mas também o que sou capaz de realizar no mundo do desenvolvimento front-end. <br /> <br />
                Obrigado por dedicarem um tempo para conhecer meu trabalho. 
                Estou ansioso para compartilhar mais detalhes e insights sobre cada projeto durante nossa entrevista.
            </TextSobre>
            <Avatar src="/img/foto.jpg" alt="avatar" />
            </AboutMe>
            <ListIcons>
                <Icons src="/img/icons/github.svg" alt="logo github" />
                <Icons src="/img/icons/linkedin.png" alt="logo linkedin" />
                <Icons src="/img/icons/insta.png" alt="logo Instagram" />
            </ListIcons>
        </FirstDiv>
    )
}
export default About;