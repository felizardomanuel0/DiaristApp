// src/pages/Registro.tsx
import React from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonSegment, IonSegmentButton, IonLabel, IonImg } from '@ionic/react';
import './Registro.css';

const Registro: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="cadastro-container">
          <IonImg src="../src/assets/images/Logo.png" alt="Logo" className="logo" />
          
          <div className="form-container">
            <IonInput placeholder="Nome" className="input-field" />
            <IonInput placeholder="Celular" className="input-field" />
            <IonInput placeholder="Cidade" className="input-field" />
            <IonInput placeholder="Bairro" className="input-field" />
            
            <IonSegment value="diarista" className="segment">
              <IonSegmentButton value="diarista">
                <IonLabel>Diarista</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="empregador">
                <IonLabel>Empregador</IonLabel>
              </IonSegmentButton>
            </IonSegment>

            <IonButton expand="block" color="success" className="cadastro-button" routerLink="/login">
              Cadastrar
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Registro;
