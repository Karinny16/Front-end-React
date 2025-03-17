import React from 'react'
import styles from './Home.module.css';
import { SiYoutubemusic } from "react-icons/si";


const Home = ()=>{
    return(

        <section className={styles.home_container}>

           
            <p>Ache a playlist perfeita para vocë aqui!</p>


            <div className={styles.icon1}>
           <SiYoutubemusic size={290} color="gray" />
           </div>

            <div className={styles.div1}></div>
        </section>

    );
}

export default Home;