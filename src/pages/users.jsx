import { useState, useEffect } from "react";
import Nav from "../components/nav";
import axios from "axios";
import "./users.css";
import Notfound from "../components/notfound";

const Users = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setusers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <div key={user.id} className="user-card">
        <img className="userimg" src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
          <div>
            <h3>{user.name}</h3>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Website:</b> {user.website}</p>
            <p><b>Co name:</b> {user.company.name}</p>
            <button onClick={() =>deleteuser(user.id)}>Delete</button>
          </div>
        </div>
      );
    });
  };


  const deleteuser = (id) => {

    const updatedUsers = users.filter((user) => user.id !== id);
    setusers(updatedUsers);

  }


  return (
    <div>
      <div className="card">
      <Nav />
      {users.length > 0 ? renderUsers() : <Notfound found={"Users"}/>}
      
      </div>
    </div>
        


     

  );
};

export default Users;
