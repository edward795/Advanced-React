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
import { FilePickerAndSave } from "./components/FilePicker&Save";
import "react-toastify/dist/ReactToastify.css";
import { ParentForm } from "./components/MultiStepForm/ParentForm";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemComponent cake />
        <UserComponent />
        <FilePickerAndSave /> */}
        <ParentForm />

        {/* <CakeComponent/>
        <HooksCakeComponent/>
        <IceCreamComponent/>
        <NewCakeComponent/> */}
      </div>
    </Provider>
  );
}

export default App;
