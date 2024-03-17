import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonTabs, IonTabBar, IonIcon, IonTabButton, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { playCircle, radio, library, search } from 'ionicons/icons';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      
      <IonTabs>
      <IonRouterOutlet onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Redirect exact path="/" to="/task1" />

          <Route path="/task1" render={() => <Task1 />} exact={true} /> 
          <Route path="/task2" render={() => <Task2 />} exact={true} />  
          <Route path="/task3" render={() => <Task3 />} exact={true} /> 
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/task1">
            <IonIcon icon={playCircle} />
            <IonLabel>Task 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="radio" href="/task2">
            <IonIcon icon={radio} />
            <IonLabel>Task 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="library" href="/task3">
            <IonIcon icon={library} />
            <IonLabel>Task 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
        </IonTabs>  
    </IonReactRouter>
  </IonApp>
);

export default App;
