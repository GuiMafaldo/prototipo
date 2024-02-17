import { Geral } from "../Projects/Projects";
import { Titulo, Pes, Links, ImagensPerfil, Divsion } from "./Contact";

const Contact = () =>{
    const requests = {
        linkedin:"https://www.linkedin.com/in/guimafaldo/",
        github: "https://github.com/GuiMafaldo",
        celular: "(11) 94923-4824"
    }
    return(
        <Geral>
            <Titulo>Contatos</Titulo>
            <Divsion>
            <Pes>
                <ImagensPerfil 
                src="/img/icons/linkedin.png" 
                alt=""/>
                <Links href="linkedin" target="_blank">{requests.linkedin}</Links>
            </Pes>
            <Pes>
                <ImagensPerfil 
                src="/img/icons/github.svg" 
                alt="" /> 
                <Links href="github" target="_blank">{requests.github}</Links>
            </Pes>

            <Pes>
                <ImagensPerfil 
                src="/img/icons/gmail.png" 
                alt="" /> 
                03.09gui.mafaldo@gmail.com
            </Pes>
            <Pes>
                <ImagensPerfil
                src="/img/icons/zap.png" 
                alt="" /> 
                Cel: (11) 94923-4824
            </Pes>
            
            
            </Divsion>
        </Geral>
    )
}

export default Contact;


