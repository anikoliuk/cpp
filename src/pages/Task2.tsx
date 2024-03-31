import React, { useState } from 'react';
import { IonContent, IonHeader, IonCard, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonPage, IonTitle, IonToolbar, IonFooter, IonButtons, IonMenuButton } from '@ionic/react';

const Task2: React.FC = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [countMod11, setCountMod11] = useState<number | undefined>();
  const [countMod5, setCountMod5] = useState<number | undefined>();
  const [sum, setSum] = useState<number | undefined>();

  const calculate = () => {
    let mod11Count = 0;
    let mod5Count = 0;
    for (let i = a; i <= b; i++) {
      if (i % 11 === 3) mod11Count++;
      if (i % 5 === 1) mod5Count++;
    }
    setCountMod11(mod11Count);
    setCountMod5(mod5Count);
    setSum(mod11Count + mod5Count);

  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
              <IonMenuButton/>
          </IonButtons>
          <IonTitle>Лабораторна робота №1</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle>Виконав студент групи КН-32. Ніколюк А.Ю. Варіант №18</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
            <IonCardHeader>
            <IonCardTitle>Завдання №2</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <p>
                На заданому
                проміжку чисел [a,b]
                знайдіть кількість
                чисел , які при діленні
                на 11 дають в остачі
                3, а при діленні на 5
                дають в остачі 1.
                </p>
              <IonInput type="number" placeholder="Введіть значення a" onIonChange={e => setA(parseInt(e.detail.value!, 10))}></IonInput>
              <IonInput type="number" placeholder="Введіть значення b" onIonChange={e => setB(parseInt(e.detail.value!, 10))}></IonInput>
              <IonButton expand="block" onClick={calculate}>Розрахувати</IonButton>
              {countMod11 !== undefined && <p>Чисел, що при діленні на 11 дають в остачі 3: {countMod11}</p>}
              {countMod5 !== undefined && <p>Чисел, що при діленні на 5 дають в остачі 1: {countMod5}</p>}
              {sum !== undefined && <p>Сума: {sum}</p>}
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Task2;
