import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, InputGroup } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const responsive = window.innerWidth <= 900 ? true : false;
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
                <Navbar.Brand className="brand" href="#home">Nome da Loja</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="colapse" id="basic-navbar-nav">
                    <Nav className="mr-auto nav">
                        <Nav.Link className="txtNav" href=""><span>Categoria</span></Nav.Link>
                        <Nav.Link className="txtNav" href=""><span>Categoria</span></Nav.Link>
                        <Nav.Link className="txtNav" href=""><span>Categoria</span></Nav.Link>
                        <Nav.Link className="txtNav" href=""><span>Categoria</span></Nav.Link>
                        <Nav.Link className="txtNav" href=""><span>Categoria</span></Nav.Link>
                        <Nav.Link className="txtNav" href=""><span>Categoria</span></Nav.Link>
                        <Nav.Link className="txtNav" href=""><span>Categoria</span></Nav.Link>
                        <Nav.Link className="txtNav" href=""><span>Categoria</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="searchBarContainer">
                <Form className="formSearchBar" inline>
                    <InputGroup>
                        <FormControl type="text" placeholder="Nome do Produto" className="search" />
                        <div class="input-group-append">
                            <span class="input-group-text groupSearch" id="basic-text1">
                                <FaSearch color='#e33093' size={15} />
                            </span>
                        </div>
                    </InputGroup>
                </Form>
                <div className="profileLoja">
                    <NavDropdown bsPrefix="drop" title={
                        [<FaUser size={20} color='#e33093' />,
                        <span hidden={responsive}>Minha Conta</span>]
                    } id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Lista de desejos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Sair</NavDropdown.Item>
                    </NavDropdown>
                    <div className="compras">
                        <FaShoppingCart color='#e33093' size={25} />
                        <span hidden={responsive}>Meu Carrinho</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
