import React from 'react';
import {Route, Routes} from "react-router-dom";

import { HOME_ROUTE, ERROR_ROUTE, ADMIN_ROUTE } from "./utils/CONSTANTS";

import Home from "./pages/Home/Home";
import Error from "./pages/Error";
import AdminPage from './pages/Admin/AdminPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={ADMIN_ROUTE} element={<AdminPage />} />
            <Route path={ERROR_ROUTE} element={<Error />} />
        </Routes>
    );
};

export default AppRouter;