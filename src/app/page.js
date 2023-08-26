
import Header from './components/header.js'
import Footer from './components/footer.js'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    < div className='page-content'>

      <Header />

      <main className='container'>

        <div className='boxi'>
          
          <div className='cartao'>
            <img
              className='imagem'
              src="perfil.jpg"
              alt='mulher de perfil'
              width={205} />
            <h1>Mendelsson<br />Dias</h1>

            <div className='traco'></div>

            <p>Desenvolvedor</p>
          </div>

          <div className='rodape-icones'>
            <ul>
              <li><Link href="#"><FaFacebook className='my-icon' /></Link></li>
              <li><Link href="#"><FaTwitter className='my-icon' /></Link></li>
              <li><Link href="#"><FaLinkedin className='my-icon' /></Link></li>
              <li><Link href="#"><FaInstagram className='my-icon' /></Link></li>
            </ul>
          </div>

        </div>


        <div className='titulo'>
          <h1>Olá</h1>
          <h2>Meu perfil e meus projetos</h2>

          <div className='buttons'>
            <button className='btn1'>Currículo</button>
            <button className='btn2'>Projetos</button>
          </div>

          <p>Sou um desenvolvedor iniciante em busca de explorar o mundo da programação e expandir meus conhecimentos.
          Tenho paixão por criar soluções tecnológicas e estou constantemente aprendendo novas linguagens e ferramentas.</p>

        </div>

      </main>

      <Footer />
    </div>
  )
}
