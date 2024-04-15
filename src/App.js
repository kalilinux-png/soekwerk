import './App.css';
import { Provider } from "react-redux";
import Store from "./store"
import AppRouters from './routes/AppRouters';
import './styles/theme.css'; // Import theme styles
import './styles/global.css'; // Import global styles

function App() {
  return (
    <Provider store={Store}>
      <AppRouters />
    </Provider>
  );
}

export default App;
