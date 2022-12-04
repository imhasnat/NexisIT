import React from 'react';

const EmailMobile = ({ register, errors }) => {
    return (
        <div className='w-96'>
            < div className="form-control w-full max-w-xs mb-14" >
                <div className='flex'>
                    <input
                        type="text"
                        placeholder='+880'
                        className="w-16 mr-3 input outline-none border-style max-w-xs pl-3" />
                    <input
                        {...register("phone_number", { required: "Mobile is required" })}
                        type="text"
                        placeholder='1xxxxxxxxx'
                        className="input outline-none border-style w-full max-w-xs pl-2" />
                </div>

            </div >
            <div className="form-control w-full max-w-xs mb-14">
                <input
                    {...register("email", { required: "Email is required" })}
                    placeholder="Write Email Address"
                    type="text"
                    className="input outline-none border-style w-full max-w-xs pl-5" />
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
        </div >
    );
};

export default EmailMobile;