import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";
import Link from "next/link"
import Image from 'next/image'
import gift from '../images/gift.png';
import styles from '../styles/Home.module.css';
import stylePortas from '../styles/portas.module.css';

export default function Portas() {

    //variaveis
    const [lastDoorId, setLastDoorId] = useState(null);

    const router = useRouter();
    const {
        query: { portas },
        query: { presenteLoc }
    } = router;
    
    function openDoor(param){
        let porta = document.getElementById(param);
        let portaIcons = document.getElementById(param+1);
		
        porta.style.backgroundColor = "transparent"
        portaIcons.style.display = "none"
    }

    function selectDoor(param){
        let porta = document.getElementById(param);
        let portaIcons = document.getElementById(param+1).getElementsByTagName('*');

        if(lastDoorId!==null){
            let portaAnterior = document.getElementById(lastDoorId);
            let portaAnteriorIcons = document.getElementById(lastDoorId+1).getElementsByTagName('*');
            portaAnterior.style.borderColor = "rgb(169,12,44)";
            portaAnteriorIcons[0].style.color = "#fff";
            portaAnteriorIcons[1].style.backgroundColor = "rgb(169,12,44)";
        }
        
        porta.style.borderColor = "rgb(250,250,42)";
        portaIcons[0].style.color = "rgb(250,250,42)";
        portaIcons[1].style.backgroundColor = "rgb(250,250,42)";
        setLastDoorId(param);
    }

    function renderDoors() {
        let doors = [];
        let doorNum = 1;
        for(let i=0; i<portas*2; i+=2){
            doors.push( <div key={i} className={stylePortas.portaBox}>
                            <div onClick={()=>selectDoor(i)} id={i} className={stylePortas.porta}></div>
                            
                            <div id={i+1} className={stylePortas.portaIcones}>
                                <span >{doorNum}</span>
                                <div onClick={()=>openDoor(i)} ></div>
                            </div>
                            
                            {doorNum == presenteLoc?
                                <div className={stylePortas.imageDiv}>
                                    <Image src={gift} alt="Presente" width={60} height={60} className={stylePortas.image} />
                                </div>
                                :
                                <></>
                            }
                            <div className={stylePortas.portaSuporte}></div>
                        </div>
                    )
            doorNum++;
        }

        return doors;
    }

    return(
        <div className={styles.container}>
            <Head>
                <title>Monty Hall</title>
            </Head>

            <main className={styles.main}>
                <div className={stylePortas.portasTela} style={{justifyContent: portas > 5 ? "space-between" : "center"}}>
                    {portas>0 && presenteLoc <= portas?
                        renderDoors()
                        :
                        <h2>Valores inválidos</h2>
                    }
                </div>

                <Link href="/">
                    <button className={stylePortas.bortaoReinicia}>
                        Reiniciar Jogo
                    </button>
                </Link>

            </main>
        </div>
    )

}