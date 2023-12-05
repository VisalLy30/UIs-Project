import './login.css';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory()
  //=====get values and login=======
  const handleLoginForm = (e: React.SyntheticEvent) =>{
      e.preventDefault();
      const target = e.target as typeof e.target&{
        username:{value: string};
        email: {value: string};
        password: {value: string};
      }
      const LoginData = {
        "username": target.username.value,
        "email" : target.email.value,
        "password": target.password.value,
      }
      axios.post("http://localhost:8000/users/login/", LoginData)
      .then((response)=>{
         history.push("/apptodo")
      })
      .catch((error)=>{
        console.log(error);
      })
      
  }
  return (
    <div className="w-50 mx-auto mt-5">
          <form onSubmit={(e)=>handleLoginForm(e)} className="formBasic">
            <h1>Form Login</h1>
            <div className="form-group">
              <label>Username</label>
              <input name="username" type="text" className="form-control" placeholder="Username"/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" name = "password" className="form-control" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <div className="text">
              <label className="form-check-label"><Link to="/Register">Register</Link> or <Link to="/email">Forget your Password</Link></label>
            </div>
          </form>
    </div>
  );
 }
export default Login 