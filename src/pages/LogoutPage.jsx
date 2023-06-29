import React, {useEffect} from 'react';
import storage from "./../services/storage";
import {useNavigate, Navigate} from "react-router-dom";
import {useSettingsStore, useStore} from "../services/store";
import {get} from "lodash";
import {useTranslation} from "react-i18next";
import {Outlet} from "react-router";

const LogOutPage = ({
                        ...rest
                    }) => {

    const {t} = useTranslation()
    const setSidebarOpen = useStore(state => get(state, 'setSidebarOpen', () => {

    }));
    const setContentOpen = useStore(state => get(state, 'setContentOpen', () => {

    }));
    const clearToken = useSettingsStore(state => get(state, 'setToken', () => {
    }))
    const token = useSettingsStore(state => get(state, 'token', null));
    const clearTokenData = useSettingsStore(state => get(state, 'setTokenData', () => {
    }))
    const logout = () => {
        clearToken(null);
        clearTokenData(null);
        storage.remove('settings');
        window.location.reload();
    }
    useEffect(() => {

        setSidebarOpen(false);
        setContentOpen(true);

        setTimeout(() => {
            logout();
        },1000)

    })

    return <>
        <Outlet/>
    </>
};

export default LogOutPage;