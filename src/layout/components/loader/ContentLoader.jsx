import React from 'react';
import styled from "styled-components";
import {BounceLoader, PuffLoader} from "react-spinners";

const Styled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 888;
`;
const ContentLoader = ({...rest}) => {
    return (
        <Styled {...rest}>
            <PuffLoader size={125} color="#52C41A"/>
        </Styled>
    );
};

export default ContentLoader;