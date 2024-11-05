import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import './Contacto.css';

const Contacto: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'descricao' | 'habilidade' | 'contactos'>('descricao');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonButton slot="start" fill="clear">
            <IonIcon icon={arrowBackOutline} />
          </IonButton>
          <IonTitle>O diarista</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="header-container">
          <img
            src="../src/assets/images/Perfil.png"
            alt="Diarista"
            className="diarista-image"
          />
          <h1>O diarista</h1>
          <p>Trabalho integral</p>
        </div>

        <IonSegment value={selectedTab} onIonChange={e => setSelectedTab(e.detail.value as any)}>
          <IonSegmentButton value="descricao">
            <IonLabel>Descrição</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="habilidade">
            <IonLabel>Habilidade</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="contactos">
            <IonLabel>Contactos</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {selectedTab === 'descricao' && (
          <div className="tab-content">
            <p>Plan, think and design how user interact with our product (Start from wireframing into high fidelity mockup design)</p>
            <p>Design elements & assets based on thorough understanding of the users</p>
          </div>
        )}
        {selectedTab === 'habilidade' && (
          <div className="tab-content">
            <p>Create design accross multiple devices standard (Desktop, Android, iOS)</p>
            <p>Familiar using Sketch (Mac), Adobe Creative Suite (Ai, Ps, Xd), Zeplin, prototyping tools (Marvel/Invision)</p>
          </div>
        )}
        {selectedTab === 'contactos' && (
          <div className="tab-content">
            <p>Contact information here, such as phone number and email.</p>
            <p>More contact details can be added here.</p>
          </div>
        )}

        <IonButton expand="block" color="success" className="call-button">
          Ligar Agora!
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Contacto;
