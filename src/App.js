import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    //using Provider component to put store in App 
    <Provider store={store}>
    <div>
    <Head />
    <Body />
    </div>
    </Provider>
  );
}

export default App;

/*
 * Head
 * Body
 * Sidebar
    *MenuItems
     * MainContainer
      * ButtonList
      * VideoContainer
      * VideoCard
*/