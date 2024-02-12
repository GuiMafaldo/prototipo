import About from "../About";
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
        </Setting>
    )
}

export default Global;