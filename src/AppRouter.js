import React from 'react';
import {Route, Routes} from "react-router-dom";

import { HOME_ROUTE, ERROR_ROUTE } from "./utils/CONSTANTS";

import Home from "./pages/Home/Home";
import Error from "./pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={ERROR_ROUTE} element={<Error />} />
        </Routes>
    );
};

export default AppRouter;