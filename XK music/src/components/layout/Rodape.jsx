import { FaFacebook } from "react-icons/fa";

import { RiGoogleFill } from "react-icons/ri";


import styles from './Rodape.module.css'

function Rodape() {
  return ( <footer className={styles.footer}>
    <ul className={styles.social_list}> 

    </ul>
    <div  className={styles.h11}>
    <h1>Empresa</h1>
    <h2>Sobre Nós</h2>
    <h2>Contato</h2>
    <h2>Todos os Contatos</h2>
    
    </div>
    <div className={styles.h12} >
      <h1>XK music</h1>
    <h2>Sua Privacidade</h2>
    <h2>Políticas de Ética</h2>
    <h2>Termos de Privacidade</h2>
    </div>

  

    <div className={styles.h14} >
      <h1>Serviços</h1>
    <h2>Regras de Avaliações</h2>
    <h2>Fale Conosco</h2>
    <h2>Marktplace</h2>
    </div>
    
 </footer> 
 )

}
export default Rodape;
