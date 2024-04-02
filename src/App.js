import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import ProfileSetting from './components/ProfileSetting';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LoginPage/>
      <ProfileSetting />
    </div>
  );
}

export default App;
