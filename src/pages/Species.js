import React, {useEffect, useState, useMemo} from "react";
import Layout from "../components/Layout";
import axios from "axios";
import {Table} from '../components/Table';

const Species = () => {
    const [species, setSpecies]= useState([])
    useEffect(()=> {
        getSpecies()
            .then(res=> setSpecies(res))
    },[]);

    const getSpecies = async () => {
        const res =  await axios.get('https://swapi.dev/api/species')
        return res.data.results
    };

    const columns = useMemo(
        () => [
          {
            Header: ' ',
            columns: [
              {
                Header: 'Name',
                accessor: 'name',
              },
              {
                Header: 'Classification',
                accessor: 'classification',
              },
              {
                Header: 'Designation',
                accessor: 'designation',
              },
              {
                Header: 'Average Height',
                accessor: 'average_height',
              },
              {
                Header: 'Average Lifespan',
                accessor: 'average_lifespan',
              },
              {
                Header: 'Eye colors',
                accessor: 'eye_colors',
              },
              {
                Header: 'Hair colors',
                accessor: 'hair_colors',
              },
              {
                Header: 'Language',
                accessor: 'language',
              },
            ],
          },
        ],
        []
      )    

    return (
        <Layout title = {"Species"}>
            <Table columns={columns} data={species}/>
        </Layout>
    );
};
export default Species;