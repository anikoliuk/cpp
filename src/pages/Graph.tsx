import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Home.css';

ChartJS.register(
  CategoryScale, 
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartDataProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    fill: boolean;
  }[];
}

const Graph: React.FC = () => {
  const [xn, setXn] = useState<number>(2.17);
  const [xk, setXk] = useState<number>(19);
  const [xh, setH] = useState<number>(0.8);
  const [chartData, setChartData] = useState<ChartDataProps>({
    labels: [],
    datasets: [],
  });

  const calculateAndPlot = () => {
    let xValues = [];
    let y1Values = [];
    let y2Values = [];
    let y3Values = [];

    for (let x = xn; x <= xk; x += xh) {
      xValues.push(x.toFixed(2).toString());
      y1Values.push(Math.pow(Math.sin(Math.pow(x, 3)), 2));
      y2Values.push(Math.pow(6 * x - Math.pow(x, 2) + 1, 1/5));
      y3Values.push(2 * Math.sin(x - Math.exp(-x)));
    }

    setChartData({
      labels: xValues,
      datasets: [
        {
          label: 'y1 = sin^2(x^3)',
          data: y1Values,
          borderColor: 'blue',
          fill: false,
        },
        {
          label: 'y2 = 5^sqrt(6x - x^2 + 1)',
          data: y2Values,
          borderColor: 'purple',
          fill: false,
        },
        {
          label: 'y3 = 2sin(x - e^-x)',
          data: y3Values,
          borderColor: 'lightGreen',
          fill: false,
        },
      ],
    });
    console.log(chartData);
  };

  return (
    <IonPage id='main-content'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
              <IonMenuButton/>
          </IonButtons>
          <IonTitle>Лабораторна робота №2</IonTitle>
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
          Створити додаток для табулювання і виведення на екран значення функції,
          після чого побудувати графіки функцій
          </p>
        <IonItem>
          <IonLabel position='floating'>Xn (Початок)</IonLabel>
          <IonInput type="number" value={xn.toString()} onIonChange={e => setXn(parseFloat(e.detail.value!))}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>Xk (Кінець)</IonLabel>
          <IonInput type="number" value={xk.toString()} onIonChange={e => setXk(parseFloat(e.detail.value!))}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>h (Крок)</IonLabel>
          <IonInput type="number" value={xh.toString()} onIonChange={e => setH(parseFloat(e.detail.value!))}></IonInput>
        </IonItem>
        <IonButton expand='block' onClick={calculateAndPlot}>Розрахунок</IonButton>

        {chartData.labels.length > 0 && <Line data={chartData} />}
        </IonCardContent>
      </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Graph;

