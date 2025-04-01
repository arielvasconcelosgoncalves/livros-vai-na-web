import s from './inicio.module.scss'
import topico1 from '../../assets/topico1.png'
import topico2 from '../../assets/topico2.png'
import topico3 from '../../assets/topico3.png'
import topico4 from '../../assets/topico4.png'


export default function Inicio(){

    return(
        <main>
        <section className={s.post}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        <h1 className={s.doar}>Por que devo doar?</h1>
        <section className={s.post2}>
        <div className={s.topico1}>
            <img src={topico1} alt="simbolo de igualdade social" />
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
        </div>
        <div className={s.topico2}>
            <img src={topico2} alt="pessoa lendo" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo</p>
        </div>
        <div className={s.topico3}>
            <img src={topico3} alt="simbolo demonstrando inspiração" />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
        </div>
        <div className={s.topico4}>
            <img src={topico4} alt="uma balança" />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
        </div>
        </section>
        </main>
    
    )

}