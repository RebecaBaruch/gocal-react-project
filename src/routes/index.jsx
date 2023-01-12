import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import UserName from '../pages/UserName';
import EnterData from '../pages/EnterData';

function RoutesManager() {

    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<UserName />} />
                <Route path='/EnterData' element={<EnterData />} />
            </Routes>
        </Router>
    );
};

export default RoutesManager;