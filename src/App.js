import React from 'react';
// eslint-disable-next-line no-unused-vars
import 'antd/dist/antd.css'
import {Switch,Route} from 'react-router-dom'
import {adminRoutes} from './routes';
import LayoutBasic from './component/LayoutBasic'
import './App.css'
const App= () => {
  return (
      <LayoutBasic >
          <Switch>
        {adminRoutes.map(route => {
          return (
            <Route 
            key={route.path} 
            path={route.path}
            exact={route.exact}
            render={
              routeProps=>{
                return <route.component {...routeProps} />
              }
            }
            />
          );
        }
        )}
    </Switch>
    </LayoutBasic>
  
  
  );
}

export default App;
