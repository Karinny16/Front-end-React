import { Outlet, Link } from 'react-router-dom'

import style from './NavBar.module.css'

const NavBar = ()=>{
    return(
        <>

            <nav className={style.navbar}>

                <ul className={style.list}>

                    <Link to='/'>
                        <li className={style.item}><img className={style.logo} src={"./logoxk.PNG"} alt="Logotipo" /></li>
                    </Link>
                    
<div className={style.con}>
                    <Link to='/'>
                        <li className={style.item}>HOME</li>
                    </Link>
                    
                    <Link to='/playlist'>
                        <li className={style.item}>PLAYLIST</li>
                    </Link>
                    

                    <Link to='/perfil'>
                        <li className={style.item}>PERFIL</li>
                    </Link>
</div>
                </ul>

            </nav>

            <Outlet />

        </>

    )
}

export default NavBar