import { useState } from "react"
import { Cabecalho, Imagem, List, ListItem, Menu, MenuMobile } from "./Header";
import { TiThMenu } from "react-icons/ti"
import { IoCloseSharp } from "react-icons/io5"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <Cabecalho>
            <div>
                <Imagem src="/img/dev.png" alt="Logo dev" />
            </div>
            <Menu isOpen={menuOpen}>
                <List>
                    <ListItem><a href="#home">Home</a></ListItem>
                    <ListItem><a href="#projects">Projetos</a></ListItem>
                    <ListItem><a href="#skills">Skills</a></ListItem>
                    <ListItem><a href="#footer">Contato</a></ListItem>
                </List>
            </Menu>
            <MenuMobile onClick={toggleMenu}>
                {menuOpen ?  <IoCloseSharp color="white" /> : <TiThMenu color="white" /> }
            </MenuMobile>
        </Cabecalho>
    )
}

export default Header;
