// src/pages/Home.tsx
import React from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonImg, IonTitle, IonHeader, IonToolbar, IonItem, IonIcon, IonCard, IonCardContent } from '@ionic/react';
import './Home.css';
import { searchOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

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
         <Link to="/diarista/1">
            <IonCard className="diarista-card" style={{ backgroundColor: '#FFF8E1' }}>
              <IonCardContent className="card-content">
                <IonImg
                  src="../src/assets/images/Perfil.png"
                  alt="Diarista"
                  className="diarista-image"
                />
                <h3 className="diarista-name">João Simango</h3>
              </IonCardContent>
            </IonCard>
          </Link>  
            <IonCard className="diarista-card" style={{ backgroundColor: '#E1F5FE' }} routerLink="/login">
              <IonCardContent className="card-content">
                <IonImg
                  src="../src/assets/images/Perfil.png"
                  alt="Diarista"
                  className="diarista-image"
                />
                <h3 className="diarista-name">Odete Valeria</h3>
              </IonCardContent>
            </IonCard>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;