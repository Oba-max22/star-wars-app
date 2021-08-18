import React, {useEffect, useState, useMemo} from "react";
import Layout from "../components/Layout";
import axios from 'axios';
import {Table} from '../components/Table';

const People = () => {

    const [people, setPeople]= useState([])
    useEffect(()=> {
        getPeople()
            .then(res=> setPeople(res))
    },[]);

    const getPeople = async () => {
        console.log('loading...')
        const res =  await axios.get('https://swapi.dev/api/people')
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
                Header: 'Birth year',
                accessor: 'birth_year',
              },
              {
                Header: 'Gender',
                accessor: 'gender',
              },
              {
                Header: 'Eye Color',
                accessor: 'eye_color',
              },
              {
                Header: 'Hair Color',
                accessor: 'hair_color',
              },
              {
                Header: 'Height',
                accessor: 'height',
              },
              {
                Header: 'Mass',
                accessor: 'mass',
              },
              {
                Header: 'Skin color',
                accessor: 'skin_color',
              },
              {
                Header: 'Created',
                accessor: 'created',
              },
            ],
          },
        ],
        []
      )    

    return (
        <Layout title = {"People"}>
            <Table columns={columns} data={people}/>
        </Layout>
    );
};

export default People;