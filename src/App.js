import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import ProfileSetting from './components/ProfileSetting';
import AppRouters from './routes/AppRouters';
import './styles/theme.css'; // Import theme styles
import './styles/global.css'; // Import global styles

function App() {
  return (
      <AppRouters/>
  );
}

export default App;
