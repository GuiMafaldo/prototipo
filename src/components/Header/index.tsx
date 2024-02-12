import { Cabecalho, Imagem, List, ListItem, Menu } from "./Header";


const Header = () => {
    return (
        <Cabecalho>
            <div>
                <Imagem src="/img/dev.png" alt="Logo dev" />
            </div>
            <Menu>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Projetos</ListItem>
                    <ListItem>Skills</ListItem>
                    <ListItem>Contato</ListItem>
                </List>
            </Menu>
        </Cabecalho>
    )
}

export default Header;