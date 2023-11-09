import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import EntryPoint from '../screens/EntryPoint';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import MainScreen from '../screens/MainScreen/MainScreen';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryPoint/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/signup' element={<SignupScreen/>}/>
        <Route path='main' element={<MainScreen/>} />
      </Routes>
    </Router>
  );
}
