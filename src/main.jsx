import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./router";
import Query from "./services/query";
import Auth from "./services/auth/Auth";
import {ToastContainer} from "react-toastify";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Query>
            <Auth>
                <Router/>
            </Auth>
        </Query>
        <ToastContainer/>
    </React.StrictMode>,
)
