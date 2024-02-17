import About from "../About";
import Contact from "../Contact";
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
            <Contact/>
        </Setting>
    )
}

export default Global;
