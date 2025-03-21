import { FaFacebook } from "react-icons/fa";

import { RiGoogleFill } from "react-icons/ri";


import styles from './Rodape.module.css'

function Rodape() {
  return ( <footer className={styles.footer}>
    <ul className={styles.social_list}> 
            <li>
                <FaFacebook  size={30}/>
            </li>
        <li>

        </li>
<RiGoogleFill size={35}/>
    </ul>
    <h1 className={styles.h11}><br></br>Empresa</h1>
    <h2>Sobre nós</h2>
    <h2>Contato</h2>
    <h2>Todos os contatos</h2>
 </footer> 
 )

}
export default Rodape;
