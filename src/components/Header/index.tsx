import { Cabecalho, Imagem, List, ListItem, Menu } from "./Header";


const Header = () => {
    return (
        <Cabecalho>
            <div>
                <Imagem src="/img/dev.png" alt="Logo dev" />
            </div>
            <Menu>
                <List>
                    <ListItem><a href="#home">Home</a></ListItem>
                    <ListItem><a href="#projects">Projetos</a></ListItem>
                    <ListItem><a href="#skills">Skills</a></ListItem>
                    <ListItem><a href="#contato">Contato</a></ListItem>
                </List>
            </Menu>
        </Cabecalho>
    )
}

export default Header;
