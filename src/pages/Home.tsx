// src/pages/Home.tsx
import React from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonImg, IonTitle, IonHeader, IonToolbar, IonItem, IonIcon, IonCard, IonCardContent } from '@ionic/react';
import './Home.css';
import { searchOutline } from 'ionicons/icons';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { arrowBackOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
    const history = useHistory();
=======

const Home: React.FC = () => {
>>>>>>> 214343e (construcao das paginas)
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
<<<<<<< HEAD
          <IonTitle>Encontre o seu Diarista</IonTitle>
            <IonButton slot="start" fill="clear" onClick={() => history.goBack()}>
            <IonIcon icon={arrowBackOutline} />
          </IonButton>
=======
            <IonTitle>Encontre o seu Diarista</IonTitle>
>>>>>>> 214343e (construcao das paginas)
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem className="search-bar">
            <IonIcon icon={searchOutline} slot="start" />
            <IonInput placeholder="Pesquisar por diarista" />
          </IonItem>
  
<<<<<<< HEAD
        
          <div className="card-container">
         <Link to="/diarista/1">
=======
          <div className="card-container">
>>>>>>> 214343e (construcao das paginas)
            <IonCard className="diarista-card" style={{ backgroundColor: '#FFF8E1' }}>
              <IonCardContent className="card-content">
                <IonImg
                  src="../src/assets/images/Perfil.png"
                  alt="Diarista"
                  className="diarista-image"
                />
<<<<<<< HEAD
                <h3 className="diarista-name">João Simango</h3>
              </IonCardContent>
            </IonCard>
          </Link>  
            <IonCard className="diarista-card" style={{ backgroundColor: '#E1F5FE' }} routerLink="/login">
=======
                <h3 className="diarista-name">Nome do diarista</h3>
              </IonCardContent>
            </IonCard>
            <IonCard className="diarista-card" style={{ backgroundColor: '#E1F5FE' }}>
>>>>>>> 214343e (construcao das paginas)
              <IonCardContent className="card-content">
                <IonImg
                  src="../src/assets/images/Perfil.png"
                  alt="Diarista"
                  className="diarista-image"
                />
<<<<<<< HEAD
                <h3 className="diarista-name">Odete Valeria</h3>
=======
                <h3 className="diarista-name">Nome do diarista</h3>
>>>>>>> 214343e (construcao das paginas)
              </IonCardContent>
            </IonCard>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;