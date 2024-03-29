import React from 'react';
import {useQuery} from 'react-query'
import {client} from "../client";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";

const fetchRequest = (url, params) => client.get(url, params);

const useGetOneQuery = (
    {
        id = null,
        key = "get-one",
        url = "test",
        enabled = true,
        params = {},
        showSuccessMsg = false,
        showErrorMsg = true,
        refetchOnMount = true
    }
) => {
    const {t} = useTranslation()

    const {isLoading, isError, data, error,isFetching} = useQuery([key, id,params], () => fetchRequest(`${url}/${id}`, params), {
        onSuccess: () => {
        },
        onError: (data) => {
            if (showErrorMsg) {
                toast.error(t(data?.response?.data?.message) || `ERROR!!! api not working`)
            }
        },
        enabled,
        refetchOnMount
    });

    return {
        isLoading,
        isError,
        data,
        error,
        isFetching,
    }
};

export default useGetOneQuery;