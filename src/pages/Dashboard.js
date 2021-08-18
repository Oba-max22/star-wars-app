import React, {useEffect, useState, useMemo} from "react";
import Layout from "../components/Layout";
import axios from "axios";
import {Table} from "../components/Table";
import "../styles/Dashboard.css";

const Dashboard = () => {
    const [films, setFilms]= useState([])
    useEffect(()=> {
        getFilms()
            .then(res=> setFilms(res))
    },[]);

    const getFilms = async () => {
        const res =  await axios.get('https://swapi.dev/api/films')
        return res.data.results
    };

    const columns = useMemo(
        () => [
          {
            Header: 'Films',
            columns: [
              {
                Header: 'Film Title',
                accessor: 'title',
              },
              {
                Header: 'Director',
                accessor: 'director',
              },
              {
                Header: 'Producer',
                accessor: 'producer',
              },
              {
                Header: 'Release Date',
                accessor: 'release_date',
              },
              {
                Header: 'Episode ID',
                accessor: 'episode_id',
              },
              {
                Header: 'Characters',
                accessor: 'characters[0]',
              },
            ],
          },
        ],
        []
      )    

    return (
        <Layout title = {"Dashboard"}>
            <section className="boxes-section">
              <div className="box">
                <div className="box-section-one">
                  <h2>Films</h2>
                  <h2>
                    <img src="./images/camera.svg" alt="video camera outline" className='vc-img'/>
                  </h2>
                </div>
                <div className="box-section-two">
                  <h2>200</h2>
                  <h6>More than yesterday</h6>
                </div>
              </div>
              <div className="box">
                <div className="box-section-one">
                  <h2>Starships</h2>
                  <h2>
                    <img src="./images/ufo.svg" alt="ufo outline" className='vc-img'/>
                  </h2>
                </div>
                <div className="box-section-two">
                  <h2>200</h2>
                  <h6>More than yesterday</h6>
                </div>
              </div>
              <div className="box">
                <div className="box-section-one">
                  <h2>People</h2>
                  <h2>
                    <img src="./images/students.svg" alt="students outline" className='vc-img'/>
                  </h2>
                </div>
                <div className="box-section-two">
                  <h2>200</h2>
                  <h6>More than yesterday</h6>
                </div>
              </div>
              <div className="box">
                <div className="box-section-one">
                  <h2>Vehicles</h2>
                  <h2>
                    <img src="./images/taxi.svg" alt="taxi outline" className='vc-img'/>
                  </h2>
                </div>
                <div className="box-section-two">
                  <h2>200</h2>
                  <h6>More than yesterday</h6>
                </div>
              </div>
              <div className="box">
                <div className="box-section-one">
                  <h2>Species</h2>
                  <h2>
                    <img src="./images/phylogenetics.svg" alt="phylogenetics outline" className='vc-img'/>
                  </h2>
                </div>
                <div className="box-section-two">
                  <h2>200</h2>
                  <h6>More than yesterday</h6>
                </div>
              </div>
             
            </section>
            <Table columns={columns} data={films}/>
        </Layout>
    );
};

export default Dashboard;