import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Starships from "../pages/Starships";
import People from "../pages/People";
import Vehicles from "../pages/Vehicles";
import Species from "../pages/Species";

const Routes = () => (
    <Switch>
      <Route exact path="/"  component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/starships" component={Starships} />
      <Route path="/people" component={People} />
      <Route path="/vehicles" component={Vehicles} />
      <Route path="/species" component={Species} />
    
    </Switch>
  );
  
export default Routes;