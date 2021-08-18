import React, {useEffect, useState, useMemo} from "react";
import Layout from "../components/Layout";
import axios from "axios";
import {Table} from '../components/Table';

const Vehicles = () => {
    const [vehicles, setVehicles]= useState([])
    useEffect(()=> {
        getVehicles()
            .then(res=> setVehicles(res))
    },[]);

    const getVehicles = async () => {
        const res =  await axios.get('https://swapi.dev/api/vehicles')
        return res.data.results
    };

    const columns = useMemo(
        () => [
          {
            Header: ' ',
            columns: [
              {
                Header: 'Vehicle Name',
                accessor: 'name',
              },
              {
                Header: 'Vehicle Model',
                accessor: 'model',
              },
              {
                Header: 'Vehicle Class',
                accessor: 'vehicle_class',
              },
              {
                Header: 'Vehicle Manufacturer',
                accessor: 'manufacturer',
              },
              {
                Header: 'Crew',
                accessor: 'crew',
              },
              {
                Header: 'Passengers',
                accessor: 'passengers',
              },
              {
                Header: 'Cargo Capacity',
                accessor: 'cargo_capacity',
              },
              
            ],
          },
        ],
        []
      )    

    return (
        <Layout title = {"Vehicles"}>
            <Table columns={columns} data={vehicles}/>
        </Layout>
    );
};

export default Vehicles;