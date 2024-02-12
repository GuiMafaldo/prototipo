import { ContainerImg, Imagens, SectionSkill, TitleSkill } from "./Skills";

const Habilidades = () => {
    return (
        <>
            <SectionSkill>
                <TitleSkill>Conhecimentos & Skills</TitleSkill>
                <ContainerImg>
                    <div>
                        <Imagens
                            src="/img/icons/icons8-html.svg"
                            alt="Logo Html" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/icons8-css.svg"
                            alt="Logo css" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/icons8-javascript.svg"
                            alt="Logo javascript" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/icons8-nativo-de-reagir.svg"
                            alt="Logo react.js" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/icons8-typescript-48.png"
                            alt="Logo typescript" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/icons8-vuejs.svg"
                            alt="Logo vue.js" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/icons8-bootstrap-48.png"
                            alt="Logo bootstrap" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/icons8-atrevimento-48.png"
                            alt="Logo sass" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/icons8-componentes-estilizados-48.png"
                            alt="" />
                    </div>
                </ContainerImg>
            </SectionSkill>

        </>

    )
}

export default Habilidades;
