import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import photo from '../../assets/istockphoto-1321277096-612x612 1.png';
import logo from '../../assets/ultimate hrm logo-05-02 2.png';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = data => {
        setLoginError('')
        try {
            fetch('https://test.nexisltd.com/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.access_token) {
                        console.log(data);
                        localStorage.setItem('token', data.access_token);
                        toast.success('Login Successfull', {
                            position: "top-center",
                            autoClose: 750,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        navigate('/table');
                    }
                    else {
                        setLoginError(data.error);
                    }
                })
                .catch(err => {
                    console.error(err.message)
                    setLoginError(err.message);
                })
        }
        catch (err) {
            console.log(err.message);
            setLoginError(err.message);
        }
    }

    return (
        <div>
            <div className='my-10 flex justify-center items-center'>
                <div className='grid grid-rows-4'>
                    <img className='w-fit hidden md:block' src={logo} alt="logo" />
                    <img className='row-span-2 max-w-xs hidden md:block mr-20' src={photo} alt='login'></img>
                </div>
                <div className='w-100 p-10 shadow-xl'>
                    <h2 className='text-xl text-center font-bold mb-24'>Login in Form</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-xs mb-14">
                            <input
                                {...register("email", { required: "Email is required" })}
                                placeholder='Write Email Address'
                                type="text"
                                className="input outline-none border-style w-full max-w-xs pl-5" />

                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                        </div>
                        <div className="form-control w-full max-w-xs mb-14">
                            <input type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                })}
                                placeholder='Write Password'
                                className="input border-style w-full max-w-xs pl-5" />
                            <label className="label"> <span className="label-text text-accent text-xs ml-5">Your password must be 8 character</span></label>
                            <div>
                                {loginError && <p className='text-red-600'>{loginError}</p>}
                            </div>
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <div className='flex justify-center'>
                            <button type="submit" className="text-white bg-primary hover:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none mb-24">Log In</button>
                        </div>
                    </form>
                    <div className='grid grid-cols-3 '>
                        <div></div>
                        <p className='col-span-2'> <small className='mr-2 text-accent'> Don’t have an account?</small> <Link className='text-primary font-semibold text-sm underline' to="/signup">SIGNUP HERE!</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;