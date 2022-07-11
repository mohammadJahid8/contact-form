import React from 'react';

const Form = () => {
    return (
        <div className="mt-4">
            <h2 className="text-center text-[#cf1810] underline text-4xl font-bold mb-10">Contact Form</h2>

            <form className="px-32">
                <div className="">
                    <input type="text" placeholder="Name" class="input input-bordered  w-full h-11 mb-3" />
                    <input type="text" placeholder="Email" class="input input-bordered  w-full h-11 mb-3" />

                    <div class="input-group mb-3">
                        <input type="text" placeholder="Email Verification Code" class="input input-bordered w-full h-11" />
                        <input type="submit" class="text-white font-semibold w-24 bg-[#dc3545] border-none h-11"
                            value="Send OTP"
                        />
                    </div>

                    <div class="input-group mb-3 h-11">
                        <select class="border-2">
                            <option disabled selected>BD(+880)</option>
                            <option>BD(+880)</option>
                            <option>BD(+880)</option>
                            <option>BD(+880)</option>
                            <option>BD(+880)</option>
                            <option>BD(+880)</option>
                            <option>BD(+880)</option>
                        </select>
                        <input type="text" placeholder="Mobile Number" class="input input-bordered w-full h-11" />
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" placeholder="Mobile Verification Code" class="input input-bordered w-full h-11" />
                        <input type="submit" class="text-white font-semibold w-24 bg-[#dc3545] border-none h-11"
                            value="Send OTP"
                        />
                    </div>
                    <input type="text" placeholder="Subject" class="input input-bordered  w-full h-11 mb-3" />
                    <input type="text" placeholder="Message" class="input input-bordered  w-full pb-24 pt-6 mb-3" />

                </div>
                <input type="submit" class="text-white font-semibold w-24 rounded bg-[#dc3545] border-none h-10"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default Form;