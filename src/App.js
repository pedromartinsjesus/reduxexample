import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeUserName, changeUserAge } from "./redux/actions/changeUser";


const App = () => {

  //redux na pratica

  const user = useSelector((state) => state);
  console.log(user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);


  return (
    <div className="App">
      <p>User name: {user.name}</p>
      <p>User age: {user.age}</p>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(changeUserName(name))
          dispatch(changeUserAge(age))
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Change Name"
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          placeholder="Change Age"
        />
        <input
          type="submit" value="Change User Details"
        />

      </form>
    </div>
  );
}

export default App;
