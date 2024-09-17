import { useState, useEffect } from "react";
import Nav from "../components/nav";
import axios from "axios";
import "./users.css";
import Notfound from "../components/notfound";


const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="search by user name"
      className="input"
      value={value}
      onChange={onChange}
    />
  );
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [val, setVal] = useState("");
  const [filtred, setFiltred] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setVal(searchValue);

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().startsWith(searchValue.toLowerCase())
    );
    setFiltred(filteredUsers);
  };

  const renderUsers = () => {
    const usersToDisplay = val === "" ? users : filtred;

    return usersToDisplay.map((user) => (
      <div key={user.id} className="user-card">
        <img
          className="userimg"
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          alt=""
        />
        <div>
          <h3>{user.name}</h3>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Phone:</b> {user.phone}
          </p>
          <p>
            <b>Website:</b> {user.website}
          </p>
          <p>
            <b>Co name:</b> {user.company.name}
          </p>
          <button onClick={() => deleteuser(user.id)}>Delete</button>
        </div>
      </div>
    ));
  };

  const deleteuser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <Nav />
      <SearchInput value={val} onChange={handleChange} />
      <div className="card">
        {users.length > 0 ? renderUsers() : <Notfound found={"Users"} />}
      </div>
    </div>
  );
};

export default Users;