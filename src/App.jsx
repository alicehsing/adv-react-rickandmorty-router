import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Detail from './views/Characters/Detail';
import CharacterList from './views/Characters/List';
import './App.css';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/characters/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Header />
          <CharacterList />
        </Route>
      </Switch>
    </>
  );
}
