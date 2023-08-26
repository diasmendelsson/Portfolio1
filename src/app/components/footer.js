import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer>
            <div className='box-footer'>

                <div className='nome1'>
                    <span><p>Política de Cookies</p></span>
                </div>

                <div className='nome1'>
                    <span><p>Política de Privacidade</p></span>
                </div>

                <div className='nome1'>
                    <span>
                        <p>© 2035 por Mendelsson Dias.
                        <br />
                        Todos os direitos reservados.</p>
                    </span>
                </div>

            </div>
            
            <div className='box-footer2'>

            <div className='nome2'>
                <span><p className='negrito'>Telefone</p></span>
                <span><p>67 99251-4029</p></span>
            </div>
                
            <div className='nome2'>
            <span><p className='negrito'>Email</p></span>  
                <span><p>mendersson@hotmail.com</p></span>
            </div>

            <div className='nome2'>
                    <span><p  className='negrito'>Redes Sociais</p></span>
                    <div className='redes-footer'>
                        
                            <Link href="#"><FaFacebook className='my-i' /></Link>
                            <Link href="#"><FaTwitter className='my-i' /></Link>
                            <Link href="#"><FaLinkedin className='my-i' /></Link>
                            <Link href="#"><FaInstagram className='my-i' /></Link>
                    
                    </div>
            </div>   

                

            </div>

        </footer>
    )
}