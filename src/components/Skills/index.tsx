import { ContainerImg, Imagens, SectionSkill, TitleSkill } from "./Skills";

const Habilidades = () => {
    return (
        <>
            <SectionSkill id="skills">
                <TitleSkill>Conhecimentos & Skills</TitleSkill>
                <ContainerImg>
                    <div>
                        <Imagens
                            src="/img/icons/html.svg"
                            alt="Logo Html" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/css.svg"
                            alt="Logo css" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/js.svg"
                            alt="Logo javascript" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/react.svg"
                            alt="Logo react.js" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/type.svg"
                            alt="Logo typescript" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/vue.svg"
                            alt="Logo vue.js" />
                    </div>
                </ContainerImg>
                <br />
                <ContainerImg>
                    <div>
                        <Imagens
                            src="/img/icons/boot.svg"
                            alt="Logo bootstrap" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/sass.svg"
                            alt="Logo sass" />
                    </div>
                    <div>
                        <Imagens
                            src="/img/icons/styled.png"
                            alt="" />
                    </div>
                </ContainerImg>
                
            </SectionSkill>
        </>

    )
}

export default Habilidades;
