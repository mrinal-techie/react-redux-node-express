import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

function AddUser() {
  const initialUser = {username: '', city:' '}
  const [user, setUser] = useState(initialUser);
  const navigate =useNavigate();
  let dispatch = useDispatch();

  async function submitHandle(e)
  {
    e.preventDefault();
    dispatch(addUser(user));
    navigate('/all');
  }

  return (
    <div>
     <form onSubmit={submitHandle}>
      <div>Enter Username</div>
      <input type='text' value={user.username || ''} onChange={(e)=>{setUser({...user, username : e.target.value})}}></input>
      <div>Enter current city</div>
      <input type='text' value={user.city || ''} onChange={(e)=>{setUser({...user, city : e.target.value})}}></input>
      <br></br>
      <button type='submit' style={{marginTop:'10px',color:'blue'}}>Submit</button>
     </form>
    </div>
  )
}

export default AddUser