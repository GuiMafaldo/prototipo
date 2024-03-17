import { AboutMe, Avatar, FirstDiv, Icons, ListIcons, TextSobre} from "./About";

const About = () => {
    return (
        <FirstDiv id="home">
            <h1>DESENVOLVEDOR FRONT-END</h1>
            <AboutMe>
            <TextSobre>
                Olá a todos. <br /> <br />

                Meu nome é Guilherme, tenho 29 anos e sou um entusiasta do desenvolvimento front-end.
                Meu percurso nesse campo tem sido uma jornada repleta de aprendizado e dedicação <br /> <br />
                Cada projeto que assumi foi uma oportunidade para aplicar minhas habilidades técnicas e liderança, enquanto explorava novas tecnologias e tendências. Por exemplo,
                liderar equipes em projetos complexos me permitiu não apenas alcançar metas, mas também inspirar meus colegas a darem o melhor de si. <br /> <br />
                <p>Minha capacidade de aprendizado rápido e de ensinar outros é um dos meus maiores trunfos. Isso se reflete no meu compromisso em permanecer proativo na busca por desenvolvimento contínuo,
                tanto para mim quanto para aqueles ao meu redor.</p>
                Estou ansioso para compartilhar mais detalhes e insights sobre cada projeto durante nossa entrevista. <br /> <br />
                <p>Estou ansioso para compartilhar mais detalhes e insights sobre cada projeto durante nossa entrevista e, principalmente, para colaborar em projetos futuros que desafiem e inspirem meu crescimento
                profissional. </p> <br/>

                <p>Obrigado por dedicarem um tempo para conhecer meu trabalho.</p>
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