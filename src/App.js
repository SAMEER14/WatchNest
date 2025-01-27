import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';

import Demo from "./Demo/Demo";
import Demo2 from './Demo/Demo2'

const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body/>,
  children : [
    {
      path : "/",
      element : <MainContainer />
    },
    {
      path : "watch",
      element : <WatchPage />
    },
    {
      path : "demo",
      element : <><Demo /><Demo2 /></>
    }
  ]
}])

function App() {
  return (
    //using Provider component to put store in App 
    <Provider store={store}>
    <div>
    <Head />
    {/* <Body /> */}
    <RouterProvider router={appRouter} />
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