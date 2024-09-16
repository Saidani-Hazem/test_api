import React from "react";
import { useState, useEffect } from "react";
import Nav from "../components/nav";
import axios from "axios";
import "./posts.css";
import Notfound from "../components/notfound";

const Posts = () => {
  const [posts, Setposts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        Setposts(response.data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const getUser = (id) => {
    return users.find((users) => users.id === id);
  };

  const postrender = () => {
    return posts.map((posts) => {
      const user = getUser(posts.userId);
      return (
        <div className="post">
          <div className="posthead">
            <div className="postprofile">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                  alt=""
                />
              </div>

              <div>
                <h3>{user.name}</h3>
                <h6>{user.email}</h6>
              </div>
            </div>

            <hr />
          </div>

          <div className="posttail">
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      
      <div className="postcontainer">
      
        {posts.length > 0 ? postrender() : <Notfound found={"Posts"} />}
        <Nav />
      </div>
    </>
  );
};

export default Posts;
