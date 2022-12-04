import React from 'react';

const Password = ({ register, errors }) => {
    return (
        <div className='w-96'>
            <div className="form-control w-full max-w-xs mb-14">
                <input type="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 8, message: 'Password must be 8 characters or longer' }
                    })}
                    placeholder="Write Password"
                    className="input outline-none border-style w-full max-w-xs pl-5" />
                <label className="label"> <span className="label-text text-accent text-xs ml-5">Your password must be 8 character</span></label>
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            </div >
        </div>
    );
};

export default Password;