// src/pages/Home.tsx
import React from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonImg, IonTitle, IonHeader, IonToolbar, IonItem, IonIcon, IonCard, IonCardContent } from '@ionic/react';
import './Home.css';
import { searchOutline } from 'ionicons/icons';

const Home: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Encontre o seu Diarista</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem className="search-bar">
            <IonIcon icon={searchOutline} slot="start" />
            <IonInput placeholder="Pesquisar por diarista" />
          </IonItem>
  
          <div className="card-container">
            <IonCard className="diarista-card" style={{ backgroundColor: '#FFF8E1' }}>
              <IonCardContent className="card-content">
                <IonImg
                  src="../src/assets/images/Perfil.png"
                  alt="Diarista"
                  className="diarista-image"
                />
                <h3 className="diarista-name">Nome do diarista</h3>
              </IonCardContent>
            </IonCard>
            <IonCard className="diarista-card" style={{ backgroundColor: '#E1F5FE' }}>
              <IonCardContent className="card-content">
                <IonImg
                  src="../src/assets/images/Perfil.png"
                  alt="Diarista"
                  className="diarista-image"
                />
                <h3 className="diarista-name">Nome do diarista</h3>
              </IonCardContent>
            </IonCard>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;