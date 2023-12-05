import { useHistory } from "react-router-dom";
import axios from 'axios';

function Email() {
  const history = useHistory();

  const handleEmailForm = (e: React.SyntheticEvent) =>{
    e.preventDefault();
    const target = e.target as typeof e.target&{
      email: {value: string};
    }
    const Data = {
      "email" : target.email.value,
    }
    axios.post("http://localhost:8000/password-reset/",Data)
      .then((response)=>{
         history.push("/message")
      })
      .catch((error)=>{
        console.log(error);
      })
    
  }
  return (
    <div className="w-50 mx-auto mt-5">
        <form onSubmit={handleEmailForm} className="formBasic">
          <h1>Vertify Password</h1>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" className="form-control" placeholder="Email"/>
          </div>
          <button type="submit" className="btn btn-primary mt-2" >Submit</button>
        </form>
    </div>
  )
}

export default Email