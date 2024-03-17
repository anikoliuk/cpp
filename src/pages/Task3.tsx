import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonTitle, IonToolbar, IonFooter, IonInput, IonButton } from '@ionic/react';
import './Home.css';

const Task3: React.FC = () => {
  const [size, setSize] = useState<number>(0);
  const [matrix, setMatrix] = useState<number[][]>([]);

  const generateMatrix = () => {
    const newMatrix = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => Math.floor(Math.random() * 100))
    );
    setMatrix(newMatrix);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Лабораторна робота №1</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle>Виконав студент групи КН-32. Ніколюк А.Ю. Варіант №18</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Завдання №3</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
                <p>
                Згенерувати матрицю
                розміром NxN.
                Виокремити за
                допомогою кольору
                усі парні додатні
                елементи, що кратні 4
                та більше за 16.
                </p>
            <IonInput type="number" placeholder="Введіть розмір N" onIonChange={e => setSize(parseInt(e.detail.value!, 10))}></IonInput>
            <IonButton expand="block" onClick={generateMatrix}>Генерувати матрицю</IonButton>
            <div className="matrix">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((value, colIndex) => (
                    <span key={colIndex} className={`matrix-cell ${value % 4 === 0 && value > 16 ? 'highlight' : ''}`}>{value}</span>
                  ))}
                </div>
              ))}
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonTitle>Лабораторна робота №1, Завдання №3</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Task3;
