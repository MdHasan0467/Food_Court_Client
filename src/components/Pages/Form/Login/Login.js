
import React, { useContext, useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import image from "../../../../Assets/Images/loginFood.png"

const Login = () => {

  const { signIn } = useContext(AuthContext)
  
  const navigate = useNavigate()


  //! password show or hidden
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;
  




  const handleLogin = e => {

    e.preventDefault()

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

   

    //! login By User Email
		signIn(email, password)
      .then(() => {
      
      navigate('/')

      toast.success('Login Successful');
      })
      
    .catch((error) => {
      toast.error('Something is wrong! Please Check and Try again');
    });




  }


    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
          <div className="text-center">
            <img className='h-96 shadow-2xl rounded-2xl' src={image} alt="" />
          </div>
            
            <div className="card border-b-4 border-b-rose-400 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h3 className='font-serif text-2xl'>login Now</h3>
                
            <form onSubmit={handleLogin}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex">
                <input type={changePassword ? "password" : "text"}
                 name='password' placeholder="password" className="input w-full input-bordered" />
                <span className=" flex items-center mx-2"
                onClick={() => {
                   setChangePassword(changeIcon);
                }}
             >
                {changeIcon ? <BsEyeSlashFill /> : <BsEyeFill />}
             </span>
                </div>
                <label className="label">
                  <Link to='/authentication/forget-password' className="label-text-alt link link-hover hover:underline text-start">Forgot password?</Link>
                </label>
              </div>
              
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-l hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0">Login</button>
               </div>
               
            </form>
               
              <label className="label">
               <p  className="label-text-alt link link-hover hover:underline text-start">
                   <Link to='/authentication/register'>create a new account</Link>
               </p>
              </label>
             </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;