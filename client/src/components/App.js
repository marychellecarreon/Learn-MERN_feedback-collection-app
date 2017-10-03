import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// BrowserRouter - brain of react router, it says how to behave
// Route - react component that sets a rule for the route that should be
//      visible on the screen

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
     <div>
        <BrowserRouter>
          <div>
             <Header />
             <Route exact path="/" component={Landing} />
             <Route exact path="/surveys" component={Dashboard} />
             <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
    </div>
  );
};

export default App;
