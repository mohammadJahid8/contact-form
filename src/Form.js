import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import fetcher from './Axios.config';

const Form = () => {
    const [data, setData] = useState({});
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [disable, setDisable] = useState(false);
    const [code, setCode] = useState('');
    const [errorMsg, setErrorMsg] = useState('');


    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);


    }
    const handleNumberChange = (e) => {
        e.preventDefault();
        setNumber(e.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const emailCode = e.target.emailCode.value;
        setCode(emailCode);
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

        //sending data to backend
        try {
            let res = await fetcher.post('/form', data)
            let datas = res.data;
            if (datas) {
                Swal.fire({
                    title: 'Success',
                    text: 'Your message has been sent',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                setErrorMsg("");
            }
        } catch (error) {
            console.log(error.response);
            if (error.response) {
                Swal.fire({
                    title: 'Invalid OTP!!',
                    text: 'Please enter a valid OTP',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
                setErrorMsg(error.response.data.message);

            }
            return error.response;
        }
    }

    const handleOTP = async () => {
        const res = await fetcher.post('/form/emailOtp', { email });
        Swal.fire(
            'OTP SENT!',
            'Please Check your email!',
            'success'
        )
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
                        <br />

                        <button type="button" class="text-white font-semibold w-24 bg-[#dc3545] border-none h-11" disabled={email === "" && !disable} onClick={handleOTP}>
                            Send OTP
                        </button>
                    </div>
                    {
                        errorMsg ? <p class="text-red-500 text-sm mb-2 ml-1">{errorMsg}</p> : ""
                    }

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