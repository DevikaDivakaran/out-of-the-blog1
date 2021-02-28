
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import {Route} from 'react-router-dom';
import ArticlePage from './pages/article/article.component'
//import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
     <Header/>
        <Route exact path="/" component={HomePage}/>
    
        <Route exact path="/article" component={ArticlePage}/>
    </div>
  );
}

export default App;
