import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import UserName from '../pages/UserName';

function RoutesManager() {

    return(
        <Router>
            <Routes>
                <Route path='/' element={<UserName />} />
            </Routes>
        </Router>
    );
};

export default RoutesManager;