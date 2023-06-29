import React from 'react';
import {get} from "lodash";
import {useSettingsStore} from "../../store";

const useAuth = ({...rest}) => {
    const isAuthenticated = useSettingsStore(state => get(state, 'isAuthenticated', false))
    const user = useSettingsStore(state => get(state, 'user', null))
    const token = useSettingsStore(state => get(state, 'token', null))
    return {
        user,
        isAuthenticated,
        token
    }
};

export default useAuth;