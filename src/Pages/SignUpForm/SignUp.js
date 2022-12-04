import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import EmailMobile from './EmailMobile';
import Name from './Name';
import Password from './Password';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import photo from '../../assets/istockphoto-1321277096-612x612 1.png';
import logo from '../../assets/ultimate hrm logo-05-02 2.png';
import { BsArrowRight } from "react-icons/bs";

const SignUp = () => {
    const [page, setPage] = useState(0);
    const [signupError, setSignupError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleSignUp = data => {
        console.log(data);
        setSignupError('');
        try {
            fetch('https://test.nexisltd.com/signup', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.sucess) {
                        toast.success('Registration Successfull. Please Login to continue', {
                            position: "top-center",
                            autoClose: 750,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        navigate('/login');
                    }
                    else {
                        setSignupError(data.error)
                    }
                })
                .catch(err => {
                    console.log(err.message);
                    setSignupError(err.message);
                })
        }
        catch (err) {
            console.log(err.message);
            setSignupError(err.message);
        }
    }

    const displaySection = () => {
        if (page === 0) {
            return <Name register={register} errors={errors}></Name>
        }
        else if (page === 1) {
            return <EmailMobile register={register} errors={errors}></EmailMobile>
        }
        else if (page === 2) {
            return <Password register={register} errors={errors}></Password>
        }
    }

    return (
        <div>
            <div className='my-16 flex justify-center items-center'>
                <div className='grid grid-rows-4'>
                    <img className='w-fit hidden md:block' src={logo} alt="logo" />
                    <img className='row-span-2 max-w-xs hidden md:block mr-20' src={photo} alt='login'></img>
                </div>
                <div className='w-96 md:w-100 p-10 shadow-xl overflow-hidden'>
                    <h2 className='text-xl text-center font-bold mb-24'>SignUp Form</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div>{displaySection()}</div>
                        {
                            page === 0 &&
                            <>
                                <div className='flex justify-center'>
                                    <button className='text-white bg-primary hover:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none' onClick={() => setPage(page + 1)}>
                                        <span className='flex items-center'>
                                            Next Step
                                            <BsArrowRight className='ml-2 text-lg'></BsArrowRight>
                                        </span>
                                    </button>
                                </div>
                            </>
                        }
                        {
                            page > 0 && page < 2 &&
                            <>
                                <div className='flex items-start'>
                                    <button className='btn ml-6 mr-20 mt-3' onClick={() => setPage(page - 1)}>
                                        <span className='text-accent text-xs font-bold'>Back</span>
                                    </button>
                                    <button className='text-white bg-primary hover:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none' onClick={() => setPage(page + 1)}>
                                        <span className='flex items-center'>
                                            Next Step
                                            <BsArrowRight className='ml-2 text-lg'></BsArrowRight>
                                        </span>
                                    </button>
                                </div>
                            </>
                        }
                        {
                            page > 0 && page === 2 &&
                            <>
                                <div className='flex items-start'>
                                    <button className='btn ml-6 mr-20 mt-3' onClick={() => setPage(page - 1)}>
                                        <span className='text-accent text-xs font-bold'>Back</span>
                                    </button>
                                    <button className='text-white bg-primary hover:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none'>SignUp</button>
                                </div>
                            </>
                        }
                        <div className='mt-5'>
                            {signupError && <p className='text-red-600 '>{signupError}</p>}
                        </div>
                    </form>

                    {
                        page === 0 &&
                        <div className='grid grid-cols-3 mt-24'>
                            <div></div>
                            <p className='col-span-2'> <small className='mr-2 text-accent'> Already have an account?</small> <Link className='text-primary font-semibold text-sm underline' to="/login">LOGIN HERE!</Link></p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SignUp;