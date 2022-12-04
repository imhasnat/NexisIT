import React from 'react';

const Name = ({ register, errors }) => {
    return (
        <div className='w-96'>
            <div className="form-control w-full max-w-xs mb-14">
                <input
                    {...register("first_name", { required: "First Name is required" })}
                    type="text"
                    placeholder="Write First Name"
                    className="input outline-none border-style w-full max-w-xs pl-5" />
                {errors.first_name && <p className='text-red-600'>{errors.first_name?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs mb-14">
                <input
                    {...register("last_name", { required: "Last Name is required" })}
                    type="text"
                    placeholder="Write Last Name"
                    className="input outline-none border-style w-full max-w-xs pl-5" />
                {errors.last_name && <p className='text-red-600'>{errors.last_name?.message}</p>}
            </div>
        </div>
    );
};

export default Name;