import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    const responsive = window.innerWidth <= 900 ? true : false;
    return (
        <>
            <footer className="footer">
                <div className="containernot">
                    <div className="row">
                        <div className="col-lg-3">
                            <ul> Institucional
                            <li>Quem somos?</li>
                                <li>Termos e condições de venda</li>
                                <li>Missão, Visão e Valores</li>
                                <li>Política de Troca e Devoluções</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul> Dúvidas
                            <li>Como comprar?</li>
                                <li>Prazos e entregas</li>
                                <li>Formas de pagamento</li>
                                <li>Segurança na compra</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul> Cliente
                            <li>Meus pedidos</li>
                                <li>Minha conta</li>
                                <li>Meus tickets</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="redesSociais"> Siga-nos nas Redes Sociais</h5>
                                <div className="row">
                                    <a><FaFacebook color="#fff" size={20} /></a>
                                    <a><FaTwitter color="#fff" size={20} /></a>
                                    <a><FaInstagram color="#fff" size={20} /></a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="creditos">
                    <a href="https://www.linkedin.com/in/allan-da-silva-pereira-228203161/">Copyright © AllanDev </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
