import { useContext } from "react";
import "animate.css";
import "./assets/App.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { ToastContainer } from "react-toastify";
import { MyContext } from "./context";
import Initial from "./components/initial";
import Confirm from "./components/confirm";
import Result from "./components/result";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const context = useContext(MyContext);
  const handleComponent = () => {
    const screen = context.state.screen;
    if (screen === 0) return <Initial />;
    if (screen === 1) return <Confirm />;
    if (screen === 2) return <Result />;
  };

  return (
    <div>
      <div className="container">
        <SwitchTransition mode="out-in">
          <CSSTransition
            timeout={500}
            key={context.state.screen}
            classNames="fade"
          >
            {handleComponent()}
          </CSSTransition>
        </SwitchTransition>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
