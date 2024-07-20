import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AuthRoutes from './routes/AuthRoutes';
import AppRoutes from './routes/AppRoutes'
import "bootstrap/js/src/collapse";
import ScrollToTop from './utils/ScrollToTop';
import "./index.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <BrowserRouter >
          <ScrollToTop>
            <Switch>
              <Redirect exact from="/" to="/auth/signup" />
              {/* Auth */}
              <Route path="/auth" render={(props) => <AuthRoutes {...props} />} />
              {/* Layouts */}
              <Route path="/" render={(props) => <AppRoutes {...props} />} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </BrowserRouter>
    </>
  );
}

export default App;
