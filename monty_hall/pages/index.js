import React, { useState } from 'react';
import Head from 'next/head';
import Link from "next/link"
import styles from '../styles/Home.module.css';

export default function Home(props) {

  //variaveis
  const [portas, setPortas] = useState(1);
  const [presenteLoc, setPresenteLoc] = useState(1)

  //funcoes
  const changeDoorsAmount = (param) => {
    if(param==="+"){
      setPortas(portas+1);
    }
    else if(portas>0){
      setPortas(portas-1);
    }
  }

  const changeGiftLocation = (param) => {
    if(param==="+"){
      setPresenteLoc(presenteLoc+1);
    }
    else if(presenteLoc>1){
      setPresenteLoc(presenteLoc-1);
    }
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Monty Hall</title>
      </Head>

      <main className={styles.main}>
        <div style={{display: "flex", margin: "0 0 5px 0"}}>
          <div className={styles.square} style={{backgroundColor: "rgb(194,34,49)"}}>
            <h2 style={{color: "#fff", fontSize: "40px", margin: "20% 0 0 10px" }}>Monty Hall</h2>
          </div>

          <div className={styles.square} style={{backgroundColor: "rgb(255,255,255)", margin: "0 0 0 5px"}}>
            
            <span className={styles.titleWhiteSquare}>Qtde Portas?</span>
            
            <span className={styles.num}>{portas}</span>
            
            <div className={styles.buttonPlusAndMinus}>
              <button onClick={()=>changeDoorsAmount("-")}>-</button>
              <button onClick={()=>changeDoorsAmount("+")}>+</button>
            </div>
          </div>
        </div>
        <div style={{display: "flex"}}>
          <div className={styles.square} style={{backgroundColor: "rgb(255,255,255)"}}>
            
            <span className={styles.titleWhiteSquare}>Portas com Presente?</span>
            
            <span className={styles.num}>{presenteLoc}</span>
            
            <div className={styles.buttonPlusAndMinus}>
              <button onClick={()=>changeGiftLocation("-")}>-</button>
              <button onClick={()=>changeGiftLocation("+")}>+</button>
            </div>
          </div>
          <Link href={{pathname: "/portas", query: {portas: `${portas}`, presenteLoc: `${presenteLoc}`} }}>
            <button className={`${styles.square} ${styles.greenSquare}`}>
              <h2 style={{color: "#fff", fontSize: "30px" }}>Iniciar</h2>
            </button>
          </Link>
        </div>
      </main>

      
    </div>
  )
}
