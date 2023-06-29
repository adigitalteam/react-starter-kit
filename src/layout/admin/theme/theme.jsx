import React from 'react';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    color: #707070;
    font-size: 16px;
    line-height: 1.45;
    font-weight: 400;
    font-family: 'Gilroy-Regular', sans-serif;
  }

  .align-items-center {
    align-items: center !important;
  }

  .title-color {
    color: #fff !important;
    font-size: 30px !important;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  #nprogress .bar {
    background: #52C41A !important;
    height: 3px !important;
    z-index: 99999 !important;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .horizontal-scroll {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  .mt-15 {
    margin-top: 15px;
  }
  .ml-15 {
    margin-left: 15px;
  }

  .mb-30 {
    margin-bottom: 30px;
  }


  ///* width */
  //::-webkit-scrollbar {
  //  width: 4px;
  //  height: 4px;
  //}
  ///* Track */
  //::-webkit-scrollbar-track {
  //  background: #F5F5F5;
  //}
  ///* Handle */
  //::-webkit-scrollbar-thumb {
  //  background: #1ab394;
  //  border-radius: 6px;
  //}
  //*{
  //  scrollbar-color:#1ab394 #F5F5F5;
  //  scrollbar-width:thin;
  //}
  .top-marqueue {
    background: red;
    color: #fff;
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .5px;
    font-family: times new roman;
  }

  .mb-20 {
    margin-bottom: 20px !important;
  }

  .mb-10 {
    margin-bottom: 10px !important;
  }

  .mb-15 {
    margin-bottom: 15px !important;
  }

  .mr-15 {
    margin-right: 15px;
  }

  .mr-5 {
    margin-right: 5px;
  }

  .ml-60 {
    margin-left: 60px;
  }

  h3.ant-typography > span {
    font-weight: 700;
    font-size: 30px;
  }

  .ant-switch-checked {
    background-color: #52C41A;
  }

  .ant-card-head-title {
    overflow: unset !important;
    white-space: unset !important;
    text-overflow: unset !important;
  }

  .ant-radio-group.ant-radio-group-solid {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 300px;
  }

  .ant-radio-group .ant-radio-button-wrapper {
    height: 42px;
  }

  .control-bg-danger {
    background: #fff2f0 !important
  }

  .control-bg-warning {
    background: #fffbe6 !important;
  }

  .ant-input:placeholder-shown {
    font-weight: 300;
  }
  .svg_mr_0 {
    .ant-btn svg{
      margin-right: 0px !important;
     flex:none !important;
    }
  }
  
`;
const Theme = ({children}) => {

    return (
        <ThemeProvider theme={{}}>
            <GlobalStyles/>
            <ToastContainer/>
            {children}
        </ThemeProvider>
    );
};

export default Theme;