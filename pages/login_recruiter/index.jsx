import Head from 'next/head';
import React, { Fragment, useState } from 'react';
import Decoration from '../../components/Decoration';
import Link from 'next/link';

const LoginRecruiter = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Fragment>
      <style jsx>
        {`
          .body {
            margin:0;
            padding0;
            width: 100%;
            height: 100vh;
            display: flex;
          }
          .content {
            width 50vw;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom:10vh
          }
          .form {
            width: 45vw;
          }

          .greeting {
            color: black;
            font-size: 25px;
          }

          .subGreeting {
            color: rgba(70, 80, 92, 1);
            font-size: 18px;
          }
        `}
      </style>
      <Head>
        <title>Login as Recruiter</title>
      </Head>
      <div className='body'>
        <Decoration />
        <div className='content'>
          <div className='form'>
            <div className='greeting'>Halo, Pewpeople</div>
            <div className='subGreeting'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </div>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className='mt-5'>
                <div className='row d-flex'>
                  <div className='col-md-12 mb-4'>
                    <div className='form-group text-muted'>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='text'
                        className='form-control'
                        id='email'
                        placeholder='Masukkan alamat email'
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className='col-md-12 mb-4'>
                    <div className='form-group text-muted'>
                      <label htmlFor='password'>Kata Sandi</label>
                      <input
                        type='password'
                        className='form-control'
                        id='password'
                        placeholder='Masukkan kata sandi'
                        onChange={(e) =>
                          setForm({ ...form, password: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className='col-md-12 flex-column justify-content-center align-content-center mb-4'>
                    {loading ? (
                      <button
                        type='submit'
                        className='btn btn-warning col-12 text-white'
                        disabled
                      >
                        <span
                          className='spinner-border spinner-border-sm'
                          role='status'
                          aria-hidden='true'
                        />
                      </button>
                    ) : (
                      <button
                        type='submit'
                        className='btn btn-warning col-12 text-white'
                      >
                        Masuk
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
            <div className='row mt-5'>
              <div className='col-12 d-flex justify-content-center align-items-center'>
                <span className='text-black'>
                  Anda Belom Punya Akun Recruiter?
                </span>
                <Link
                  href='/register_recruiter'
                  className='text-decoration-none ps-5'
                >
                  Daftar Disini
                </Link>
              </div>
            </div>
            <div className='row mt-5'>
              <div className='col-12 d-flex justify-content-center align-items-center'>
                <span className='text-black'>Daftar sebagai worker? </span>
                <Link href='/register_worker' className='text-decoration-none'>
                  Daftar sebagai worker
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginRecruiter;
