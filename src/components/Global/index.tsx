import About from "../About";
import FooterPage from "../Footer";
import Header from "../Header";
import Projects from "../Projects";
import Habilidades from "../Skills";
import { Setting } from "./Global";


const Global = () => {
    return(
        <Setting>
            <Header />
            <About />
            <Projects />
            <Habilidades />
            <FooterPage />
        </Setting>
    )
}

export default Global;
