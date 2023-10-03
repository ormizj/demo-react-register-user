import RegisterUser from "components/RegisterUser/RegisterUser";
import "./App.css";
import ErrorModal from "components/Modal/ErrorModal";
import { useState } from "react";
import RegisterUserList from "components/RegisterUserList/RegisterUserList";

const errMsgInitial = "";

function App() {
  // states
  const [errMsg, setErrMsg] = useState(errMsgInitial);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  // computed variables
  const showErrorModal = errMsg.length > 0;
  const showRegisterUserList = registeredUsers.length > 0;

  // handlers
  const errMsgHandler = (newErrMsg) => {
    setErrMsg(newErrMsg);
  };

  const resetErrMsgHandler = () => {
    setErrMsg(errMsgInitial);
  };

  const registerUserHandler = ({ username, age }) => {
    setRegisteredUsers((oldRegisterUserList) => [
      { username, age },
      ...oldRegisterUserList,
    ]);
    return true;
  };

  return (
    <div className="App">
      {showErrorModal && (
        <ErrorModal onResetErrMsg={resetErrMsgHandler} errMsg={errMsg} />
      )}
      <RegisterUser
        onRegisterUser={registerUserHandler}
        onErrMsg={errMsgHandler}
        registeredUsers={registeredUsers}
      />
      {showRegisterUserList && (
        <RegisterUserList registeredUsers={registeredUsers} />
      )}
    </div>
  );
}

export default App;
