import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import {privateRoutes,publicRoutes} from '~/routes';
import Header from './headers/Header';
import NavBar from '~/navbar/index';
import {Helmet} from "react-helmet";
function App() {


 

  return (
    <Router>
      <div className="app">
        <Header />
        <Helmet>
          <title>KASUGA MOVIE</title>
          <meta name='description' content="Movie website" />
        </Helmet>
        <NavBar />
          <Routes>
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
