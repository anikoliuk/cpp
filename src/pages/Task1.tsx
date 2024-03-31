import { IonContent, IonHeader, IonPage, IonCardHeader, IonCardTitle, IonButton, IonInput, IonCardSubtitle, IonTitle, IonCardContent, IonFooter, IonToolbar, IonCard, IonMenu, IonItem, IonMenuButton, IonButtons } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

const Task1: React.FC = () => {
  const [number1, setNumber1] = useState<number | undefined>();
  const [number2, setNumber2] = useState<number | undefined>();
  const [number3, setNumber3] = useState<number | undefined>();
  const [result, setResult] = useState<number | undefined>();

  const calculateResult = () => {
    const nums = [number1, number2, number3].map(num => num ? Number(num) : 0); 
    if (nums.some(num => num > 5)) {
      const sum = nums.reduce((acc, num) => acc + num, 0);
      setResult(sum ** 3);
    } else {
      const sumOfSquares = nums.reduce((acc, num) => acc + num ** 2, 0);
      setResult(sumOfSquares);
    }
  };

  return (
    <IonPage id='main-content'>
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
          <IonCardTitle>Завдання №1</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <p>
          Задано три числа. 
          Якщо хоч одне з них більше за 5, то знайти куб суми. 
          Віншому випадку – суму квадратів.
          </p>
          <IonInput type="number" placeholder="Введіть перше число" onIonChange={e => setNumber1(e.detail.value ? Number(e.detail.value) : undefined)}></IonInput>
          <IonInput type="number" placeholder="Введіть друге число" onIonChange={e => setNumber2(e.detail.value ? Number(e.detail.value) : undefined)}></IonInput>
          <IonInput type="number" placeholder="Введіть третє число" onIonChange={e => setNumber3(e.detail.value ? Number(e.detail.value) : undefined)}></IonInput>
          <IonButton onClick={calculateResult}>Обчислити</IonButton>
          {result && <p>{result}</p>}
        </IonCardContent>
      </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Task1;
