import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthorsList from './components/AuthorsList';
import AddAuthor from './views/AddAuthor'
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <h1>Authors</h1>
      <BrowserRouter>
        <Route exact path="/">
          <AuthorsList />
        </Route>
        <Route exact path="/add">
          <AddAuthor />
        </Route>
        <Route exact path="/api/authors/edit/:_id">
          <Edit />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
