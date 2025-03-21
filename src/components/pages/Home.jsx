import React from 'react'
import styles from './Home.module.css';
import { SiYoutubemusic } from "react-icons/si";


const Home = ()=>{
    return(

        <section className={styles.home_container}>

           
            <p>Comente e compartilhe suas músicas do momento</p>


            <div className={styles.icon1}>
           <SiYoutubemusic size={290} color="#ea5455" />
           </div>

            <div className={styles.div1}>
            <h1> </h1>
            </div>
        </section>

    );
}

export default Home;