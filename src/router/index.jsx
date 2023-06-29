import React from "react";
import AdminLayout from "../layout/admin/AdminLayout";
import {Navigate, Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import AdminPanelPage from "../pages/AdminPanelPage";
import LoginPage from "../pages/LoginPage";
import IsAuth from "../services/auth/IsAuth";
import IsGuest from "../services/auth/IsGuest";
import LoginLayout from "../layout/login/LoginLayout";
import LogoutPage from "../pages/LogoutPage";
import ExamplePage from "../pages/ExamplePage";

const Router = () => {
    return <BrowserRouter>
        <IsAuth>
            <Routes>
                <Route element={<AdminLayout/>}>
                    <Route path="/admin" element={<AdminPanelPage/>}/>
                    <Route path="/example" element={<ExamplePage/>}/>
                    <Route path="/logout" element={<LogoutPage/>}/>
                </Route>
                <Route path={"*"} element={<Navigate to={'/admin'} replace/>}/>
            </Routes>
        </IsAuth>
        <IsGuest>
            <Routes>
                <Route element={<LoginLayout/>}>

                <Route path="/login" element={<LoginPage/>}>
                </Route>
                </Route>
                <Route path={"*"} element={<Navigate to={'/login'} replace/>}/>
            </Routes>
        </IsGuest>
    </BrowserRouter>;
}

export default Router;