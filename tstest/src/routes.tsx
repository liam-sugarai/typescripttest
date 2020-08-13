import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Normal from './pages/Normal';
import Redux from './pages/Redux';

const Routes: React.FunctionComponent = () => {
 return (
   <Switch>
     <Redirect exact={true} from="/" to="/normal" />
     <Route exact={true} path="/normal" component={Normal} />
     <Route exact={true} path="/redux" component={Redux} />
     <Redirect to='*' />
   </Switch>
 );
};

export default Routes;