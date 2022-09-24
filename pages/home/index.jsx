import Head from 'next/head';
import React, { Fragment, useState } from 'react';
import Footer from '../../components/Footer';
import { Search } from 'react-bootstrap-icons';
import Card from '../../components/Card';

const Home = () => {
  const [field, setField] = useState();
  const [name, setName] = useState();
  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <Fragment>
      <style jsx>{`
        .hero {
          width: 100%;
        }
        .content {
          width: 100%;
          min-height: 100vh;
        }
        .main {
          padding-top: 3vh;
        }
        .searchDiv {
          width: 100%;
          height: 20vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .searchContainer {
          width: 80vw;
          height: 10vh;
          display: grid;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .searchDiv form input {
          padding-left: 25px;
          width: 40vw;
          height: 5vh;
          border: 1px solid #999999;
        }
        .searchDiv form input:focus {
          outline: #5e50a1;
        }
        .inputSelect:focus {
          height: 60px;
          width: auto;
          border: 1px solid #5e50a1;
        }

        .inputSelect option {
          border: none;
        }

        .kategori {
          height: 8vh;
          border: 1px solid black;
        }
        .searchDiv form button {
          margin-left: 3vw;
          width: 10vw;
          color: white;
          height: 5vh;
          border: none;
          background-color: #5e50a1;
        }
      `}</style>
      <Head>
        <title>Home</title>
      </Head>
      <div className='hero'>
        <div className='content'>
          <div className='main'>
            <div className='searchDiv'>
              <div className='searchContainer'>
                <form
                  onSubmit={(e) => {
                    onSubmit;
                  }}
                >
                  <input
                    type='text'
                    placeholder='Search for any skill'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <select
                    className='inputSelect'
                    style={{
                      height: '5vh',
                      width: 'auto',
                      border: 'none',
                      marginRight: '30px',
                    }}
                    onChange={(e) => {
                      setField(e.target.value);
                    }}
                    value={field}
                  >
                    <option value=''>Sort</option>
                    <option value='name'>Sortir berdasarkan nama</option>

                    {/* <option value="location">Sortir berdasarkan Lokasi</option> */}
                    <option value='created_at'>
                      Sortir berdasarkan tanggal bergabung
                    </option>
                  </select>
                  <Search />
                  <button type='submit'>Search</button>
                </form>
              </div>
            </div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
