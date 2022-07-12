import React, { useRef, useState } from 'react';
import fetcher from './Axios.config';

const Form = () => {
    const [data, setData] = useState({});
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [disable, setDisable] = useState(false);
    // const emailRef = useRef();
    // console.log(emailRef.current?.value);


    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);


    }
    const handleNumberChange = (e) => {
        e.preventDefault();
        setNumber(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const emailCode = e.target.emailCode.value;
        const number = e.target.number.value;
        const mobileCode = e.target.mobileCode.value;
        const subject = e.target.subject.value;
        const messages = e.target.messages.value;


        const data = {
            name,
            email,
            emailCode,
            number,
            mobileCode,
            subject,
            messages,
        }
        setData(data);

        // const res = fetcher.post('/form', data);

    }

    const handleOTP = async () => {
        const res = await fetcher.post('/form', data);
        console.log(res, email);
    }



    return (
        <div className="mt-4">
            <h2 className="text-center text-[#cf1810] underline text-4xl font-bold mb-10">Contact Form</h2>

            <form className="px-32" onSubmit={handleSubmit}>
                <div className="">
                    <input type="text" name="name" placeholder="Name" class="input input-bordered  w-full h-11 mb-3" />
                    <input type="text" name="email" placeholder="Email" class="input input-bordered  w-full h-11 mb-3" onChange={handleEmailChange} />

                    <div class="input-group mb-3">
                        <input type="text" name="emailCode" placeholder="Email Verification Code" class="input input-bordered w-full h-11" />
                        <button type="button" class="text-white font-semibold w-24 bg-[#dc3545] border-none h-11" disabled={email === "" && !disable} onClick={handleOTP}>
                            Send OTP
                        </button>
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
                        <input type="text" name="number" placeholder="Mobile Number" class="input input-bordered w-full h-11" onChange={handleNumberChange} />
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" name="mobileCode" placeholder="Mobile Verification Code" class="input input-bordered w-full h-11" />
                        <button type="button" class="text-white font-semibold w-24 bg-[#dc3545] border-none h-11" disabled={number === "" && !disable}>
                            Send OTP
                        </button>
                    </div>
                    <input type="text" name="subject" placeholder="Subject" class="input input-bordered  w-full h-11 mb-3" />
                    <input type="text" name="messages" placeholder="Message" class="input input-bordered  w-full pb-24 pt-6 mb-3" />

                </div>
                <input type="submit" class="text-white font-semibold w-24 rounded bg-[#dc3545] border-none h-10"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default Form;