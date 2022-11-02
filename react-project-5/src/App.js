import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './Pages/AllMeetupsPage';
import NewMeetupPage from './Pages/NewMeetupPage';
import FavoritesPage from './Pages/FavoritesPage';
import Layout from "./Components/layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;