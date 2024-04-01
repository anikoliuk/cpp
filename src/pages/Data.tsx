import { IonContent, IonHeader, IonPage, IonCardHeader, IonCardTitle, IonButton, IonInput, IonCardSubtitle, IonTitle, IonCardContent, IonFooter, IonToolbar, IonCard, IonMenu, IonItem, IonMenuButton, IonButtons, IonRefresherContent, IonRefresher, useIonAlert, useIonToast, IonIcon, IonList, IonLabel, IonLoading, IonSkeletonText, IonItemSliding, IonItemOptions, IonItemOption, IonSelect, IonSelectOption } from '@ionic/react';
import './Home.css';
import { useEffect, useState } from 'react';
import { trashBinOutline } from 'ionicons/icons';

const Data: React.FC = () => {
    const [showAlert] = useIonAlert();
    const [showToast] = useIonToast();
    const [magazines, setMagazines] = useState<any>([]);
    const [hasLoadedMagazines, setHasLoadedMagazines] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('');

    const clearList = () => {
        showAlert({
            header: 'Confirm!',
            message: 'Are you sure you want to delete all magazines?',
            buttons: [
                { text: 'Cancel', role: 'cancel' },
                {
                    text: 'Delete',
                    handler: () => {
                        setMagazines([]);
                        showToast({
                            message: 'All magazines deleted',
                            duration: 2000,
                            color: 'danger',
                        });
                    },
                },
                
            ],
        });
    };

    const fetchMagazines = async( event:any ) => {
        setShowLoading(true);
        setTimeout(async () => {
            const response = await fetch('https://api.jsonbin.io/v3/b/660a067ce41b4d34e4dd17d0');
            const data = await response.json();
            setMagazines(data.record);
            setHasLoadedMagazines(true);
            setShowLoading(false);
            event.detail.complete();
        }, 2000);
    }

    const skeletonLoader = (count: number) => (
        Array.from({ length: count }, (_, index) => (
            <IonCard key={`skeleton-${index}`}>
                <IonCardContent className='ion-padding'>
                    <IonLabel>
                        <h2><IonSkeletonText animated style={{ width: '80%' }} /></h2>
                        <p><IonSkeletonText animated style={{ width: '60%' }} /></p>
                        <p><IonSkeletonText animated style={{ width: '50%' }} /></p>
                        <p><IonSkeletonText animated style={{ width: '70%' }} /></p>
                        <p><IonSkeletonText animated style={{ width: '30%' }} /></p>
                    </IonLabel>
                </IonCardContent>
            </IonCard>
        ))
    );

    const removeMagazine = (index: number) => {
        const updatedMagazines = [...magazines];
        updatedMagazines.splice(index, 1);
        setMagazines(updatedMagazines);
    };

    const isPublicationMonth = (date: string) => {
        const [year, month] = date.split('-');
        return selectedMonth === month;
    };

  return (
    <IonPage id='main-content'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
              <IonMenuButton/>
          </IonButtons>
          <IonTitle>Лабораторна робота №3</IonTitle>
          <IonButtons slot='end'>
            <IonButton onClick={clearList}>
                <IonIcon slot="icon-only" icon={trashBinOutline} color={'primary'} />
                </IonButton>
            </IonButtons>
        </IonToolbar>

        <IonToolbar>
          <IonTitle>Виконав студент групи КН-32. Ніколюк А.Ю. Варіант №18(2)</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="ion-padding-horizontal ion-padding-top">
            <IonItem lines="none">
                <IonSelect placeholder="Select Month" value={selectedMonth} onIonChange={e => setSelectedMonth(e.detail.value)}>
                    <IonSelectOption value="01">January</IonSelectOption>
                    <IonSelectOption value="02">February</IonSelectOption>
                    <IonSelectOption value="03">March</IonSelectOption>
                    <IonSelectOption value="04">April</IonSelectOption>
                    <IonSelectOption value="05">May</IonSelectOption>
                    <IonSelectOption value="06">June</IonSelectOption>
                    <IonSelectOption value="07">July</IonSelectOption>
                    <IonSelectOption value="08">August</IonSelectOption>
                    <IonSelectOption value="09">September</IonSelectOption>
                    <IonSelectOption value="10">October</IonSelectOption>
                    <IonSelectOption value="11">November</IonSelectOption>
                    <IonSelectOption value="12">December</IonSelectOption>
                </IonSelect>
            </IonItem>
            <IonTitle>Завдання №1</IonTitle>
        </div>
            {!hasLoadedMagazines && !showLoading ? (
                <IonButton color="primary" expand='block' className='ion-padding' onClick={fetchMagazines}>Завантажити</IonButton>
            ) : showLoading ? (
                skeletonLoader(5) 
            ) : (
            <IonList>
            {magazines.map((magazine: any, index: number) => (
                <IonItemSliding key={index}>
                    <IonCard style={{ background: isPublicationMonth(magazine.date) ? 'lightgreen' : '' }}>
                        <IonCardContent className='ion-padding'>
                            <IonLabel>
                                <h2>{magazine.name}</h2>
                                <p>Номер: {magazine.number}</p>
                                <p>Дата виходу: {magazine.date}</p>
                                <p>Кількість сторінок: {magazine.pages}</p>
                                <p>{magazine.published ? 'Опубліковано' : 'Не опубліковано'}</p>
                            </IonLabel>
                        </IonCardContent>
                    </IonCard>
                    <IonItemOptions side="end">
                        <IonItemOption color="danger" onClick={() => removeMagazine(index)}>
                            <IonIcon slot="icon-only" icon={trashBinOutline} />
                        </IonItemOption>
                    </IonItemOptions>
                </IonItemSliding>
            ))}
            </IonList>
              
            )}
            <IonLoading
              isOpen={showLoading}
              message={'Please wait...'}
              duration={5000} 
            />
        </IonContent>
    </IonPage>
  );
};

export default Data;


