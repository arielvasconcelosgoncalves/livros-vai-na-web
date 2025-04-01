import s from '../Header/header.module.scss';
import logo from '../../../assets/logo.png';
import busca from '../../../assets/busca.png';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Inicio from '../../../Pages/Inicio/Inicio';
import LivrosDoados from '../../../Pages/LivrosDoados/LivrosDoados';
import QueroDoar from '../../../Pages/QueroDoar/QueroDoar';


export default function header(){

    return(
        <BrowserRouter>
        <header className={s.header}>
            <section className={s.logoHeader}>
                <img src={logo} alt="imagem de um livro" />
                <h1>Livros vai na web</h1>
            </section>
        <nav className={s.navHeader}>
            <ul>
                <li><Link to='/' className={s.link}>Inicio</Link></li>
                <li><Link to='/LivrosDoados' className={s.link}>Livros Doados</Link></li>
                <li><Link to='/QueroDoar' className={s.link}>Quero Doar</Link></li>
            </ul>
        </nav>
        <section className={s.barraDeBusca}>
            <input type="search" name='' id='' placeholder='O que você procura?'/>
            <button>
            <img src={busca} alt="ícone de lupa" />
            </button>
        </section>
        </header>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/LivrosDoados' element={<LivrosDoados/>}/>
            <Route path='/QueroDoar' element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
    );


}