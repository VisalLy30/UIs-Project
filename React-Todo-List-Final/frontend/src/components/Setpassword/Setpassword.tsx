import axios from 'axios';
import { useParams,useHistory } from "react-router-dom";
type keys = {
  uid:string;
  token:string;
}

function Setpassword() {
  const history = useHistory();
  let { uid, token} = useParams<keys>();
    //=====get values and setpassword=======
  const handleSetPasswordForm = (e: React.SyntheticEvent) =>{
    e.preventDefault();
    const target = e.target as typeof e.target&{
      password1: {value: string};
      password2: {value: string};
    }
    const Data = {
      "new_password1": target.password1.value,  
      "new_password2": target.password2.value,
      "uid" : uid,
      "token": token
    }
    axios.post("http://localhost:8000/password-reset-confirm/" +uid+"/"+token+"/", Data)
      .then((response)=>{
         history.push("/login")
      })
      .catch((error)=>{
        console.log(error);
      })
  }
  return (
    <div className="w-50 mx-auto mt-5">
        <form className="formBasic" onSubmit={handleSetPasswordForm}>
          <h1>Setpassword</h1>
          <div className="form-group">
            <label>New password</label>
            <input name="password1" type="password" className="form-control" placeholder="new password"/>
          </div>
          <div className="form-group">
            <label>Comfrime Password</label>
            <input name="password2" type="Password" className="form-control" placeholder="Comfrim Password"/>
          </div>
          <button type="submit" className="btn btn-success" >Register</button>
        </form>
    </div>
  )
}

export default Setpassword