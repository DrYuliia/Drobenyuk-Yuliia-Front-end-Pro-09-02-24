
import './App.css';
import './components/header/header.css';
import './components/sideBar/sideBar.css'
import './components/mainContent/mainContent.css';
import HeadPage from './components/header/header';
import SideBar from './components/sideBar/sideBar';
import MainContant from './components/mainContent/mainContent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadPage></HeadPage>
      </header>
      <div className='main'>
      <article className="sideBar">
        <SideBar></SideBar>
        </article>
        <article>
          <MainContant></MainContant>
        </article>
      </div>
    </div>
  );
}

export default App;
