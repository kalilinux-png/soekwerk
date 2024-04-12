import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRouters from './routes/AppRouters';

function App() {
  return (
    <Provider store={store}>
      <AppRouters />
    </Provider>
  );
}

export default App;
