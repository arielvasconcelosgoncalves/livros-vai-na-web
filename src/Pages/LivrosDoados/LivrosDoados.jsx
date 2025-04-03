import livro from '../../assets/livro.png'
import s from './livrosdoados.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'


export default function LivrosDoados(){

    const [livros, setLivros] = useState([])
    const getLivros = async () => {
        try {
            const response = await axios.get("https://api-livros-10u1.onrender.com/livros")
            setLivros(response.data)
        } catch (error) {
            console.error("Erro ao buscar livros:", error)
        }
    }
    useEffect(() => {
        getLivros()
    }, [])


    return(
        <section className={s.section1}>
        <h2>Livros Doados</h2>
        <section className={s.section2}>
            {livros.map((item) => (
                <article key={item.id}>
                    <img src={item.imagem_url} alt={item.titulo} />
                    <h3>{item.titulo}</h3>
                    <p>{item.autor}</p>
                    <p>{item.categoria}</p>
                </article>
            ))}
        </section>
    </section>

    )

}