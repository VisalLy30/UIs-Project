import {useEffect} from 'react';
import axios from 'axios';
import { useParams,useHistory } from "react-router-dom";
type keys = {
  key:string
}
function Verifyemail() {
  let {key} = useParams<keys>();
  const history = useHistory()
    useEffect(() =>{
        axios.post('http://localhost:8000/users/verify-email/', {
          key:key
        }).then(response =>{
          history.push("/login")
        })
    })
  return (
    <div className="w-50 mx-auto mt-5">Verifying........</div>
  )
}

export default Verifyemail