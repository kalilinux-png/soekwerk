import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRouters from './routes/AppRouters';
import './styles/theme.css'; // Import theme styles
import './styles/global.css'; // Import global styles

function App() {
  return (
    <Provider store={store}>
      <AppRouters />
    </Provider>
  );
}

export default App;
