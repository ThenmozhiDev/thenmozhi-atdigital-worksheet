import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Headers from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {

  const isAuth = useSelector( state => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Headers />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
    <Counter />
    </Fragment>
  );
}

export default App;
