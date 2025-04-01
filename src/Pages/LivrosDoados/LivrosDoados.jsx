import s from './livrosdoados.module.scss'


export default function LivrosDoados(){

    return(
        <main className={s.main}>
        <h1>Livros Doados</h1>
        <div className={s.div}>
            <ul>
                <li>O protagonista</li>
                <li>Susanne Andrade</li>
                <li>Ficção</li>
            </ul>
        </div>
        </main>
    )

}