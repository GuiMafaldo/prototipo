import { FirstDireitos, FirstDiv, FooterSpace } from "./Footer"

const FooterPage = () => {
    return(
        <>
            <FooterSpace id="footer">
                <FirstDiv>
                    <h3>Formas de contato</h3>
                    <p>Email: 03.09gui.mafaldo@gmail.com</p>
                    <p>Cel: (11)9 4923-4824</p>
                </FirstDiv>
                <FirstDireitos>
                    <p>&copy; Todos os direitos reservados,  março-2024</p>
                    <a href="https://github.com/GuiMafaldo">
                    <img 
                    src="/img/icons/github.svg" 
                    alt="Logo Github"
                    />
                    </a>
                    <a href="https://www.linkedin.com/in/guimafaldo/">
                    <img 
                    src="/img/icons/linkedin.png" 
                    alt="Logo linkdin" 
                    />
                    </a>
                    <a href="https://www.instagram.com/mafaldo.gui/">
                    <img 
                    src="/img/icons/instagram.png " 
                    alt="Logo instagram" />
                    <span>Siga minhas redes</span></a>
                </FirstDireitos>
            </FooterSpace>
        </>
    )
}

export default FooterPage