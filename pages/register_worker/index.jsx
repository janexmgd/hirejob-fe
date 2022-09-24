import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Decoration from '../../components/Decoration';

const RegisterWorker = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const onSubmit = (e) => {
    console.log(e);
  };
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
            margin-top:15vh;
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
          .register{
            text-decoration:none!important
          }
        `}
      </style>
      <Head>
        <title>Register as Worker</title>
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
                  <div className='col-md-12 mb-3'>
                    <div className='form-group text-muted'>
                      <label htmlFor='nama'>Nama</label>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='Masukkan Nama Panjang'
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className='col-md-12 mb-3'>
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
                  <div className='col-md-12 mb-3'>
                    <div className='form-group text-muted'>
                      <label htmlFor='phone'>No Handphone</label>
                      <input
                        type='text'
                        className='form-control'
                        id='phone'
                        placeholder='Masukkan No Handphone'
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className='col-md-12 mb-3'>
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
                  <div className='col-md-12 mb-3'>
                    <div className='form-group text-muted'>
                      <label htmlFor='confirmPassword'>
                        Konfirmasi kata sandi
                      </label>
                      <input
                        type='password'
                        className='form-control'
                        id='confirmPassword'
                        placeholder='Masukan konfirmasi kata sandi'
                        onChange={(e) =>
                          setForm({ ...form, confirmPassword: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className='col-md-12 flex-column justify-content-center align-content-center'>
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
                        Daftar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
            <div className='row'>
              <div className='col-12 d-flex justify-content-center align-items-center mt-5'>
                <span className='text-black'>
                  Anda sudah punya akun pekerja?{' '}
                </span>
                <Link href='/login_worker' className='text-decoration-none'>
                  Masuk Disini
                </Link>
              </div>
            </div>
            <div className='row mt-5 mb-5'>
              <div className='col-12 d-flex justify-content-center align-items-center'>
                <span className='text-black'>Daftar sebagai perekrut? </span>
                <Link
                  href='/register_recruiter'
                  className='text-decoration-none'
                >
                  Daftar Disini
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterWorker;
