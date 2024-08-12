import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Hindustan Market"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Our website "Hindustan Market" was founded in 2024 with a vision to provide all shopping facilities to customer. 

We are committed to provide best facilities and strive to Customer time and value for money.

We believe in customer satisfaction, 

Customer satisfaction is at the heart of everything we do. Our team works tirelessly to ensure a seamless shopping experience and prompt customer support.
<br></br>
Thank you for supporting Hindustan Market. For any inquiries or assistance, please don't hesitate to reach out to us at 012-3456789.

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;