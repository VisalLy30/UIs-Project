import { useHistory } from "react-router-dom";
import axios from 'axios';


function Register() {
  const history = useHistory();
  //=====get values and register=======
  const handleRegisterForm = (e: React.SyntheticEvent) =>{
    e.preventDefault();
    const target = e.target as typeof e.target&{
      username:{value: string};
      email: {value: string};
      password1: {value: string};
      password2: {value: string};
    }
    const RegisterData = {
      "username": target.username.value,
      "email" : target.email.value,
      "password1": target.password1.value,
      "password2": target.password2.value,
    }
    axios.post("http://localhost:8000/users/register/", RegisterData)
      .then((response)=>{
         history.push("/message")
      })
      .catch((error)=>{
        console.log(error);
      })
}

  return (
    <div className="w-50 mx-auto mt-5">
          <form className="formBasic" onSubmit={(e)=>handleRegisterForm(e)}>
            <h1>Register Form</h1>
            <div className="form-group">
              <label>Username</label>
              <input name="username" type="text" className="form-control" placeholder="Username"/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password1" type="Password" className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
              <label>Comfirm Password</label>
              <input name="password2" type="Password" className="form-control" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-success" >Register</button>
          </form>
    </div>
  )
}

export default Register