import React from 'react';
import {client} from "../../services/client";
import {useQuery} from "react-query";

const fetchQuery = ({url, params}) => client.get(url, {params}).then((response)=>response.data)
const useGetQuery = ({
                         url,
                         key,
                         params
                     }) => {
    const {data, isLoading, isError} = useQuery([key, params], () => fetchQuery({url, params}))
    return {
        data,
        isLoading,
        isError
    };
};

export default useGetQuery;