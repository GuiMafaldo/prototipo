import { Cards, Description, DivInterna, Geral, Imagem, Title, Text, Botao } from "./Projects";

const Projects = () => {
    return (
        <Geral id="projects">
            <div>
                <Title>Projetos</Title>
            </div>
            <Cards>
                <DivInterna>
                    <Imagem src="/img/disney+.png" alt="imagem disney+" />
                    <Description>Disney+</Description>
                    <Text>Projeto desenvolvido atraves do Curso de desenvolvedor Front- end
                        da Ebac, Com o intuito de colocar em pratica toda a didatica e
                        aprendizados do curso ate aquele momento.
                        Projeto foi executado com HTML, CSS, JAVASCRIPT, Gulpfile e um pouco de Bootstrap.
                        <Botao type="Button"
                            href="https://github.com/GuiMafaldo/clone_disney_plus">
                            Repositorio
                        </Botao>
                        <Botao type="Button"
                            href="https://clone-disney-plus-taupe.vercel.app/">
                            Deploy
                        </Botao>
                    </Text>
                </DivInterna>
                <DivInterna>
                    <Imagem src="/img/talk.png" alt="ebac-talk" />
                    <Description>Ebac Tech Talk</Description>
                    <Text>Projeto criado no curso de Desenvolvedor Front-end
                        com o intuito de promover um evento ficticio,
                        com um contador criado em JAVASCRIPT de contagem regressiva ate o evento
                        Ferramentas ultilizadas: HTML, CSS, JAVASCRIPT, BOOTSTRAP E PARCEL!
                        <Botao type="Button"
                            href="https://github.com/GuiMafaldo/ebac_tech_talks">
                            Repositorio
                        </Botao>
                        <Botao type="Button"
                            href="https://ebac-tech-talks-zeta-ecru.vercel.app/">
                            Deploy
                        </Botao>
                    </Text>
                    
                </DivInterna>
                <DivInterna>
                    <Imagem src="/img/organo.png" alt="Organo" />
                    <Description>Organo</Description>
                    <Text>Projeto feito junto ao Curso de React.js da Alura
                        com o intuito de criar uma ferramenta capaz de cadastrar usuarios
                        e colaboradores, com a opção de escolher a turma desejada.
                        Para conferir o resultado do projeto o link do repositorio e deploy
                        estão nos botões abaixo.
                        <Botao type="Button"
                            href="https://github.com/GuiMafaldo/organo">
                            Repositorio
                        </Botao>
                        <Botao type="Button"
                            href="https://organo-eight-liart.vercel.app/">
                            Deploy
                        </Botao>
                    </Text>
                    
                </DivInterna>
                <DivInterna>
                    <Imagem src="/img/restaurante.png" alt="restaurante" />
                    <Description>Restaurante</Description>
                    <Text>Projeto desenvolvido junto a Ebac com o intuito de mostrar
                        para os clientes do restaurante as funcionalidades e serviços
                        que estão disponiveis, Seja casamento, confraternização de empresas
                        ou familiares, aniversarios. Ferramentas ultilizadas: HTML, CSS, JAVASCRIPT.
                        <Botao type="Button"
                            href="https://github.com/GuiMafaldo/restaurante-site">
                            Repositorio
                        </Botao>
                        <Botao type="Button"
                            href="https://restaurante-site-tau.vercel.app/">
                            Deploy
                        </Botao>
                    </Text>
                </DivInterna>
            </Cards>
        </Geral>
    )
}
export default Projects;

