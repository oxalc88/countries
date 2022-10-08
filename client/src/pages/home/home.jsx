import { NavLink } from 'react-router-dom'
import style from './home.module.css'


function Home({ name }) {

    return (
        <section className={style.hero}>
            {/* <header id="header">
                <a id="logo" href="#">logo</a>
            </header> */}
            <div className={style.heroTit}>
                <h1 className={style.hero_title}>Bienvenidos {name}</h1>
                <p className={style.p_title}>Proyecto Individual Final Soy Henry</p>
            </div>
            <div className={style.hero_footer}>
                <NavLink to={'/countries'} className={`${style.button} ${style.button_primary}`} >
                    <div >Buscar Paises</div>
                </NavLink>
                <NavLink to={'/activities'} className={style.button}>
                    <div >Crear Actividad</div>
                </NavLink>
            </div>
        </section>
    )
}

export default Home

