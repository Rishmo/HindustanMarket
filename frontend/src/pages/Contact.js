import React from "react";
import Layout from "./../components/Layout/Layout";
import  { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3dv9oq7",
        "template_s6lpp1u",
        form.current,
        "wUPtKXqa5L317VDjT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong");
        }
      );
  };
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-3">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call anytime we 24X7
            available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
        <div className="col-md-2"style={{
          backgroundColor:"#0B2447",
          backgroundOpacity:"90px",
          border:"orange 2px"
        }}>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-lg opacity-2"
          >
            <div className="flex flex-wrap -mx-2 mb-6">
              <div className="w-full px-8">
                <label className="block uppercase tracking-wide text-[#FE6244] text-xs font-bold mb-2" style={{color:"#FE6244"}} >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control bg-gray-200 text-gray-700 border border-danger rounded py-3 px-4 mb-3 focus"
                  //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-8">
                  <label className="block uppercase tracking-wide text-[#FE6244] text-xs font-bold mb-2" style={{color:"#FE6244"}}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control  bg-gray-200 text-gray-700 border border-danger rounded py-3 px-4 mb-3 focus"
                   // className="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-6">
                  <label className="block uppercase tracking-wide text-[#FE6244] text-xs font-bold mb-2"style={{color:"#FE6244"}}>
                    Message
                  </label>
                  <textarea
                  className="form-control bg-gray-200 text-gray-700 border border-warning rounded py-3 px-4 mb-3 focus" 
                    //className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-40 w-96 resize-none"
                    name="message"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button
                    type="submit"
                    
                    className="m-3 btn btn-outline-warning btn-sm shadow bg-info text-white font-weight-bold rounded"
                    // className="m-3 border-2
                    //  border-orange-400 
                    //  shadow bg-teal-400
                    //   hover:bg-teal-400 
                    //   focus:shadow-outline 
                    //   focus:outline-none text-white
                    //    font-bold py-2 px-4 rounded"
                   >Send</button>
                   <input type="reset"  value='Reset'                     className="m-3 btn btn-outline-warning btn-sm shadow bg-info text-white font-weight-bold rounded"
/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;