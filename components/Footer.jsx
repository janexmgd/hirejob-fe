import Image from 'next/image';
import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <style jsx>
        {`
          .containerMain {
            margin-top: 25px;
            height: 40vh;
            background-color: #5e50a1;
            color: white;
            width: 100%;
          }

          .content {
            width: 87%;
            height: 200px;
            position: absolute;
            margin-top: 2vh;
          }

          .topContent {
            margin-left: 5vh;
            margin-top: 2vh;
          }

          .photo {
            position: relative;
            width: 120px;
            height: 40px;
          }

          .text {
            padding-top: 20px;
            display: flex;
            width: 25vw;
          }

          .line {
            margin-left: 5vh;
            width: 90%;
            height: 20px;
            border-bottom: 2px solid white;
          }

          .bottomContent {
            display: flex;
            width: 90%;
            margin-top: 20px;
            margin-left: 5vh;
          }

          .text1 {
            width: 80%;
          }

          .text2 {
            width: 3%;
          }

          .blank {
            width: 14%;
          }
        `}
      </style>
      <div className='containerMain'>
        <div className='container'>
          <div className='content'>
            <div className='topContent'>
              <div className='photo'>
                <Image src='/footer.png' layout='fill' />
              </div>
              <span className='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </span>
            </div>
            <div className='line'></div>
            <div className='bottomContent'>
              <div className='text1'>2020 Pewworld. All right reserved</div>
              <div className='text2'>Telepon</div>
              <div className='blank'></div>
              <div className='text3'>Email</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
