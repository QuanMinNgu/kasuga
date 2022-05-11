import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import {privateRoutes,publicRoutes} from '~/routes';
import Header from './headers/Header';
import NavBar from '~/navbar/index';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
function App() {
 

  return (
    <Router>
      <div className="app">
      <HelmetProvider>
        <Helmet>
          <title>KASUGA MOVIE</title>
          <meta name='description' content="Movie website" />
        </Helmet>
      </HelmetProvider>
        <Header />
        <NavBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
              {publicRoutes.map((item,index) => {
                const Page = item.component;
                return <Route key={index + "as"} path={item.path} element={<Page />} />
              })}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
