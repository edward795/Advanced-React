import logo from "./logo.svg";
import "./App.css";
import CakeComponent from "./components/cakeComponent";
import HooksCakeComponent from "./components/HooksCakeComponent";
import IceCreamComponent from "./components/IceCreamComponent";
import NewCakeComponent from "./components/NewCakeComponent";
import ItemComponent from "./components/ItemComponent";
import UserComponent from "./components/UserComponent";
import { Provider } from "react-redux";
import store from "./redux/store";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemComponent cake />
        <UserComponent />

        {/* <CakeComponent/>
        <HooksCakeComponent/>
        <IceCreamComponent/>
        <NewCakeComponent/> */}
      </div>
    </Provider>
  );
}

export default App;
