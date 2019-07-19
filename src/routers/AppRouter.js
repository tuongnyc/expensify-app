//https://reacttraining.com/react-router/

// import react and react-dom

import React from 'react';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import AddExpensePage from '../components/AddExpensePage';

import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

// import normalize.css.  This will make the css work across
// all different browser!!
import 'normalize.css/normalize.css';

// import all the styles

import '../styles/styles.scss';

// BrowserRouter can only have 1 child.  If you needing
// multiple routes, it must be under <div> tag.

// Route is the child of BrowserRouter.  Require path, 
// the component is what will be shown on the page!
// if path is not listed, it will be an 404 page!
// switch will find the route in order until a match then stop!
// if none found when it reach the bottom, NotFoundPage will be shown!

// /edit/:id is dynamic pass in id, the path will be /edit/99
const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
export default AppRouter;