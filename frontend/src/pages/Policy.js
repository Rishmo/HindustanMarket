import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>1. Terms of Service</p>
          <p>2. Privacy policy</p>
          <p>3. Returns and exchanges policy</p>
          <p>4. Shipping policy</p>
          <p>5. Taxes</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;