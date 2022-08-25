import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";

function ShowUsers() {
  useEffect(() => {
    console.log('inside useffect');
    dispatch(loadUsers());
  }, []);
  const data = useSelector((state) => state.data);
  console.log('data fetched from store is ',data);
  const users=data.users;
  let dispatch = useDispatch();
  

  const handleDelete = (id) => {
    console.log("id", id);
    if (window.confirm("Are you sure wanted to delete the user ?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <table className="tabledesign">
      <tr>
        <th>ID</th>
        <th>username</th>
        <th>City</th>
        <th></th>
      </tr>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.city}</td>
          <td>
            <Link to={`/edit/${user.id}`}>
              <button type="button">Edit</button>
            </Link>
            <button onClick={() => handleDelete(user.id)} style={{margin:'2px'}}>Delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default ShowUsers;
