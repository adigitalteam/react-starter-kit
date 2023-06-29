import React from 'react';
import {PuffLoader} from "react-spinners";
import styled from "styled-components";
import {useStore} from "../../../services/store";
import {get} from "lodash";

const Styled = styled.div`
position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("./public/uzb-map-min1.png");
  background-position: 41% 56%;
`;
const OverlayLoader = ({...rest}) => {
    const loginPrepare = useStore(state => get(state, 'loginPrepare', false));

    var loginBackgroundImageClasses = "login-background-image ";

    if(loginPrepare){
        loginBackgroundImageClasses = "login-background-image login-in-animate";
    }else{
        loginBackgroundImageClasses = "login-background-image login-out-animate";
    }

    return (
        <Styled {...rest}>
            <PuffLoader size={125} color="#52C41A"  />
        </Styled>
    );
};

export default OverlayLoader;