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
 </footer> 
 )

}
export default Rodape;
