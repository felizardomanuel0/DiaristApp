import React from 'react';
import { IonPage, IonContent, IonButton, IonText } from '@ionic/react';
import './Desc.css';
import welcomeImage from '../assets/images/welcome.png';

const Desc: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="welcome-content" fullscreen>
        <div className="image-container">
          <img src={welcomeImage} alt="Bem-vindo" />
        </div>
        <div className="text-container">
          <IonText color="dark">
            <h2>Diarista</h2>
          </IonText>
          <IonText color="medium">
            <p>Um app que lhe ajuda a encontrar o melhor(a) Diarista</p>
          </IonText>
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <IonButton expand="block" color="dark" className="welcome-button" routerLink="/registro">
            Vamos!
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Desc;