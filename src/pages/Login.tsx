// src/pages/Login.tsx
import React from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonImg } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="login-container">
          <IonImg src="../src/assets/images/Logo.png" alt="Logo" className="logo" />

          <div className="form-container">
            <IonInput placeholder="Nome" className="input-field" />
            <IonInput placeholder="Celular" className="input-field" />

            <IonButton expand="block" color="success" className="login-button" routerLink="/home">
              Entrar
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
