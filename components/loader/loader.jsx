import styles from './loader.module.css'
import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';

import Router from 'next/router'

export default function Loader() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 1000);

        if(seconds === 10){
            Router.push('/accueil')
        }
    });

    return (
        <div className={styles.loader}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>
              <Typewriter
                className={styles.typewriter}
                onInit={(typewriter) => {
                  typewriter
                  .typeString('Welcome')
                  .pauseFor(500)
                  .deleteAll()
                  .pauseFor(300)
                  .pasteString('Enjoy !')
                  .start();
                }}
                options={{
                  cursor: ' ',
                  autoStart: true,
                }}
              />
            </h2>
            <div className={styles.showbox}>
              <div className={styles.loader}>
                <svg className={styles.circular} width="304" height="304">
                  <circle className={styles.path} cx="150" cy="150" r="146" fill="#191923" strokeWidth="4" strokeMiterlimit="10"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
    )
  }