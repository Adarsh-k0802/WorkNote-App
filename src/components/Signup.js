import React,{useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Signup = () => {

    const [credentials, setCredentials] = useState({email:"", password:""})
    const handleSubmit=async (e)=>{

        e.preventDefault();
        
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
           
            headers: {
              'Content-Type': 'application/json',
              
             
            },
              
            body: JSON.stringify({email:credentials.email, password:credentials.password})
          });
          const json = await response.json();
          console.log(json)
        
        if(json.success){
            //save the auth token & redirect
            localStorage.setItem('token',json.authtoken);
            history.push("/");
        }
        else{
            alert("invalid credentials")
        }
        }
        
        const onChange= (e)=>{
            setCredentials({...credentials, [e.target.name]:e.target.value})
            }

    return (
        <div>
           <form className='container'>
           <div  className="mb-3">
    <label htmlFor="name"  className="form-label">Full Name</label>
    <input type="text"  className="form-control" id="name" name="name" onChange={onChange} />
    
  </div>
  <div  className="mb-3">
    <label htmlFor="email"  className="form-label">Email address</label>
    <input type="email"  className="form-control" id="email" name="email" onChange={onChange}  aria-describedby="emailHelp"/>
    
  </div>
  <div  className="mb-3">
    <label htmlFor="password"  className="form-label">Password</label>
    <input type="password"  className="form-control" name="password" id="Password" onChange={onChange} />
  </div>
  <div  className="mb-3">
    <label htmlFor="cpassword"  className="form-label">Confirm Password</label>
    <input type="password"  className="form-control" name="cpassword" id="cPassword" onChange={onChange} />
  </div>
  
  <button type="submit"  className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default Signup
