import { Link } from 'react-router-dom'
import style from './Botao.module.css'

const Botao = ({ label, router,index }) => {
    return (
        <div className={style.buttonContainer}>
            <Link to={`${router}${index}`}> 
            <button>{label}</button>
            </Link>

        </div>
    )
}

export default Botao