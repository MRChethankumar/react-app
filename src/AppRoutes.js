import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Signin from './pages/Signin';
import App from './App';
import NotFound404 from './pages/NotFound404';
import Forbidden403 from './pages/Forbidden403';

import { isAuthenticated } from './helpers/authHelper';
import Home from './pages/Home';

function AppRoutes(props) {
    return (
        <Router>
            <Routes>
                    <Route path="/" element={<PrivateRoute><App/></PrivateRoute>} push exact/>
                    <Route path="/signin" element={<ProtectedRoute><Signin/></ProtectedRoute>} push exact/>
                    <Route path="/forbidden" element={<Forbidden403/>} exact/>
                    <Route path="*" element={<NotFound404/>} exact/>
            </Routes>
        </Router>
    );
}

function PrivateRoute({ children, ...rest }){
    return isAuthenticated() ? children : <Navigate to="/signin" push/>;
}

function ProtectedRoute({ children, ...rest }){
    return !isAuthenticated() ? children : <Navigate to="/" push/>;
}

export default AppRoutes;