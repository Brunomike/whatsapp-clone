import './App.css';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    //BEM naming convention
    <div className="app">        
        <div className='app__body'>
          <Sidebar/>
          <Chat/>          
        </div>
    </div>
  );
}

export default App;
