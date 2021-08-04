import Home from './pages/home';
import Products from './pages/products';
import RegisterProducts from './pages/registerProducts';
import './styles/reset.css';
import './styles/global.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/registerProduct" component={RegisterProducts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
