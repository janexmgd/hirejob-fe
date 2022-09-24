import Head from "next/head";
import React, { Fragment } from "react";
import Decoration from "../../components/Decoration";

const RegisterRecruiter = () => {
  return (
    <Fragment>
      <style jsx>
        {`
          .body {
            width: 100vw;
            height: 100vh;
            background-color: red;
          }
          .content {
            width: 50vw;
            min-height: 100vh;
            margin-top: 10vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <Head>
        <title>Register as Recruiter</title>
      </Head>
      <div className="body">
        <Decoration />
        <div className="content"></div>
      </div>
    </Fragment>
  );
};

export default RegisterRecruiter;
