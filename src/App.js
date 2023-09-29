import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';
import Home from './pages/Home';
import AddMeeting from './pages/AddMeeting';
import PreviousMeetings from './pages/PreviousMeetings';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navigation/>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AddMeeting' element={<AddMeeting/>} />
        <Route path='/PreviousMeetings' element={<PreviousMeetings/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}
export default App;
