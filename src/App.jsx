import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Detail from './views/Characters/Detail';
import CharacterList from './views/Characters/List';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/characters/:id">
          <Detail />
        </Route>
        <Route path="/characters">
          <CharacterList />
        </Route>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </>
  );
}
