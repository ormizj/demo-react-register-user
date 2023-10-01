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
    age = +age; // cast age to number

    if (!validateRegisterUser(username, age)) return false;

    setRegisteredUsers((oldRegisterUserList) => [
      { username, age },
      ...oldRegisterUserList,
    ]);
    return true;
  };

  const validateRegisterUser = (username, age) => {
    if (username.trim().length === 0) {
      setErrMsg("Username can not be empty!");
      return false;
    }

    if (age < 18) {
      setErrMsg("You must be at least 18 year old to register!");
      return false;
    }

    const doesUsernameExist = !!registeredUsers.find(
      (user) => user.username === username
    );
    if (doesUsernameExist) {
      setErrMsg("Username is already registered");
      return false;
    }

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
      />
      {showRegisterUserList && (
        <RegisterUserList registeredUsers={registeredUsers} />
      )}
    </div>
  );
}

export default App;
