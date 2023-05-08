import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ModalWindow from './components/Modal/Modal';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from './store/slices/authSlice';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({user: user.email, auth: true}))
      }
    });
  }, [dispatch])

  return (
      <>
        <Header />
        <Main />
        <ModalWindow />
      </>
  );
}

export default App;
