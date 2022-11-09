import './App.css';
import { BottomPage } from './BottomPage';
import { Footer } from './Footer';
import { FourthPage } from './FourthPage';
import { MidPage } from './MidPage';
import { TopPage } from './TopPage';

function App() {
  return (
    <div className="App">
     <TopPage/>
     <MidPage/>
     <BottomPage/>
     <FourthPage/>
     <Footer/>
    </div>
  );
}

export default App;
