import React, {useEffect, useState, useMemo} from "react";
import Layout from "../components/Layout";
import axios from "axios";
import {Table} from '../components/Table';

const Starships = () => {
    const [starships, setStarships]= useState([])
    useEffect(()=> {
        getStarships()
            .then(res=> setStarships(res))
    },[]);

    const getStarships = async () => {
        const res =  await axios.get('https://swapi.dev/api/starships')
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
                Header: 'Model',
                accessor: 'model',
              },
              {
                Header: 'Class',
                accessor: 'starship_class',
              },
              {
                Header: 'Cost(in GC)',
                accessor: 'cost_in_credits',
              },
              {
                Header: 'Passengers',
                accessor: 'passengers',
              },
              {
                Header: 'Length',
                accessor: 'length',
              },
              {
                Header: 'Crew',
                accessor: 'crew',
              },
            ],
          },
        ],
        []
      )    

    return (
        <Layout title = {"Starships"}>
            <Table columns={columns} data={starships}/>
        </Layout>
    );
};

export default Starships;