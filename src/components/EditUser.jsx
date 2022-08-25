import React,{useEffect, useState} from 'react'
import { useNavigate,useParams  } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/actions";


function EditUser() {
    const initialUser = {username: '', city:' '}
    const [state, setState] = useState(initialUser);
    const navigate =useNavigate();
    const { id } = useParams();
    let dispatch = useDispatch();
    const { user } = useSelector((state) => state.data);
    async function submitHandle(e)
    {
      e.preventDefault();
      console.log(user);
      dispatch(updateUser(state, id));
      navigate('/all');
    }

    useEffect(() => {
      dispatch(getSingleUser(id));
    }, []);
  
    useEffect(() => {
      if (user) {
        setState({ ...user });
      }
    }, [user]);
 
    
  return (
    <div>
    <form onSubmit={submitHandle}>
     <div>Enter Username</div>
     <input type='text' value={state.username||''} onChange={(e)=>{setState({...state, username : e.target.value})}}></input>
     <div>Enter current city</div>
     <input type='text' value={state.city ||''} onChange={(e)=>{setState({...state, city : e.target.value})}}></input>
     <br></br>
     <button type='submit'>Submit</button>
    </form>
   </div>
  )
}

export default EditUser