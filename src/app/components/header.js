'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {

    const [isActive, setIsActive] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
        setMenuOpen(!isMenuOpen);
        
    };    

    
    

    return (
        <header>

            <div className='box'>

                <div className='quadrado'></div>

                <div className='nome'>
                    <span><p>Mendelsson Dias</p></span>
                </div>

                
                <svg className='barra' preserveAspectRatio="xMidYMid meet" data-bbox="63.5 20 73 160" viewBox="63.5 20 73 160" height="14" width="6" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--djx4ka2ng93d"><title id="svgcid--djx4ka2ng93d"></title>
                    <g>
                        <path d="M125.8 20l10.7 3.7L74.4 180l-10.9-3.7L125.8 20z" fill="#000001" data-color="1"></path>
                    </g>
                </svg>
                

                <div className='profissao'>
                    <span><p>Desenvolvedor</p></span>
                </div>
            </div>

            <nav className='box2'>
                <ul className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
                    <li ><a className='lista active' href='#'>Sobre Mim</a></li>
                    <li><a className='lista' href='#'>Currículo</a></li>
                    <li><a className='lista' href='#'>Projetos</a></li>
                    <li><a className='lista' href='#'>Contato</a></li>
                </ul>

                <div className={`hamburguer ${isActive? 'active' : ''}`}  onClick={toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
                </div>
                
            </nav>

            


        </header>
    )
}