import s from './footer.module.scss'
import facebook from '../../../assets/facebook.png'
import twitter from '../../../assets/twitter.png'
import youtube from '../../../assets/youtube.png'
import linkedin from '../../../assets/linkedin.png'
import instagram from '../../../assets/instagram.png'




export default function Footer() {
    return (
      <footer className={s.foot}>
        <section className={s.footer}>
          <section className={s.sectiondiv}>
            <div className={s.divtxt}>
            <p>4002-8922</p>
            </div>
            <div className={s.divimg}>
            <img src={facebook} alt="icone facebook" className={s.icone1} />
            <img src={twitter} alt="icone twitter" className={s.icone2} />
            <img src={youtube} alt="icone youtube" className={s.icone3} />
            <img src={linkedin} alt="icone linkedin" className={s.icone4} />
            <img src={instagram} alt="icone instagram" className={s.icone5} />
            </div>
          </section>
        </section>
        <section className={s.footer2}>
          <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
        </section>
      </footer>
    );
}
  