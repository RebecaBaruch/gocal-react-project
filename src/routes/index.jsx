import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import UserName from '../pages/UserName';
import EnterData from '../pages/EnterData';
import ShowResult from '../pages/ShowResult';

function RoutesManager() {

    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<UserName />} />
                <Route path='/EnterData' element={<EnterData />} />
                <Route path='/ShowResult' element={<ShowResult />} />
            </Routes>
        </Router>
    );
};

export default RoutesManager;