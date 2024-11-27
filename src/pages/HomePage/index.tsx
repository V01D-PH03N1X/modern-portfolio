import React, { ReactElement } from 'react';
import BackgroundComponent from "../../compontents/BackgroundComponent"; // Kommentiere die Zeile nicht aus
import styles from "./HomePage.module.sass";

export default function HomePage(): ReactElement {
  return (
      <>
        <BackgroundComponent />
        <div className={styles.container}>
          <h1>Sebastian Schindler</h1>
          <h3>Schön, dass du mich gefunden hast!</h3>
          <div className={styles.content}>
            <p>
              Hallo! Mein Name ist Sebastian, besser bekannt als{' '}
              <a href="https://github.com/V01D-PH03N1X/" target="_blank" rel="noreferrer">
                V01D-PH03N1X
              </a>. Ich bin 21 Jahre alt und freue mich, dir meine Projekte vorzustellen. Besonders gerne entwickle ich
              Websites mit dem React-Framework und lerne derzeit, auch mit Angular zu arbeiten, um meine Fähigkeiten zu
              erweitern.
            </p>
            <p>
              Neben meiner Leidenschaft für die Webentwicklung betreibe ich zwei eigene Server und einen weiteren gemeinsam
              mit meinem Kollegen{' '}
              <a href="https://github.com/keksgauner/" target="_blank" rel="noreferrer">
                Keksgauner
              </a>. Beide Server befinden sich bei Hetzner und basieren auf der{' '}
              <a href="https://www.hetzner.com/de/cloud/" target="_blank" rel="noreferrer">
                Hetzner Cloud
              </a>, speziell der Serverklasse CX22.
            </p>
            <p>
              Meine beiden eigenen Server werden hauptsächlich für Deployments genutzt. Um verschiedene Ansätze zu testen,
              betreibe ich auf den Servern zwei unterschiedliche Deployment-Systeme: Coolify und CapRover.
            </p>
          </div>
        </div>
      </>
  );
}
