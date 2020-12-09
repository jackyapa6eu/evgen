import React from 'react';
import firebase from 'firebase/app';
import LoaderContext from '../contexts/LoaderContext';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Loader from './Loader';

const firebaseConfig = {
  apiKey: "AIzaSyAwRdOsofcA26IuEPV_dRMVv78cceMzkH0",
  authDomain: "jackyapa6eu.firebaseapp.com",
  databaseURL: "https://jackyapa6eu.firebaseio.com",
  projectId: "jackyapa6eu",
  storageBucket: "jackyapa6eu.appspot.com",
  messagingSenderId: "487808843024",
  appId: "1:487808843024:web:1f7ec5914f3b4495e33995"
};
firebase.initializeApp(firebaseConfig);

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    console.log('app mounted')
  }, []);
  function showLoader() {
    setIsLoading(true);
  }
  function hideLoader() {
    setIsLoading(false);
  }
  return (
    <div className="App">
      <div className="page">
        <LoaderContext.Provider value={isLoading}>
          <Loader/>
          <Header/>
          <Main showLoader={showLoader} hideLoader={hideLoader}/>
          <Footer/>
        </LoaderContext.Provider>
      </div>
    </div>
  );
}

export default App; 