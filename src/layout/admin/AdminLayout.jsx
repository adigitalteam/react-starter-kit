import {PoweroffOutlined,AccountBookOutlined,SketchOutlined} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {Outlet} from 'react-router';
import React, {useEffect, useState} from 'react';
import Theme from "./theme";
import {useSettingsStore, useStore} from "../../services/store";
import {get, has,isNil} from "lodash";
import {OverlayLoader} from "../components/loader";
import {Link} from "react-router-dom";
import "./AdminLayout.css";
import config from "../../../config";

const {Header, Content, Footer, Sider} = Layout;

const AdminLayout = () => {
    const breadcrumb = useSettingsStore(state => get(state, 'breadcrumb', []))
    const user = useSettingsStore(state => get(state, 'user', null))
    const token = useSettingsStore(state => get(state, 'token', null));
    const sidebarOpen = useStore(state => get(state, 'sidebarOpen', false));
    const contentOpen = useStore(state => get(state, 'sidebarOpen', false));
    console.log("sidebarOpen", sidebarOpen)
    var sidebarClasses = "";
    var contentClasses = "";
    const setSidebarOpen = useStore(state => get(state, 'setSidebarOpen', () => {

    }));
    const setContentOpen = useStore(state => get(state, 'setContentOpen', () => {

    }));
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    if (!token) {
        return <OverlayLoader/>;
    }
    useEffect(() => {
        setTimeout(() => {
            setSidebarOpen(true);
            setContentOpen(true);
        }, 100);
    }, []);

    if (sidebarOpen) {
        sidebarClasses = "animate-block open-block";
    } else {
        sidebarClasses = "animate-block hidden-block-left";
    }
    if (contentOpen) {
        contentClasses = "animate-block open-block";
    } else {
        contentClasses = "animate-block hidden-block-right";
    }

    const loginPrepare = useStore(state => get(state, 'loginPrepare', false));

    var loginBackgroundImageClasses = "login-background-image ";

    if (loginPrepare) {
        loginBackgroundImageClasses = "login-background-image login-in-animate";
    } else {
        loginBackgroundImageClasses = "login-background-image login-out-animate";
    }



    return (
        <Theme><Layout
            style={{
                minHeight: '100vh',
            }}
        >

            <div className={loginBackgroundImageClasses}>
            </div>
            <Sider className={sidebarClasses} collapsible collapsed={collapsed}
                   onCollapse={(value) => setCollapsed(value)}>
                <div className="admin-panel-logo-vertical">
                    <Link to={"/admin"}><img src={"./public/logotype.png"} className={"logo-login"}/></Link>
                </div>
                <Menu selectedKeys={[location.pathname]} mode="inline" theme={"dark"}>
                    <Menu.Item key="/admin" icon={<SketchOutlined/>}>
                        <Link to="/admin">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="/example" icon={<AccountBookOutlined/>}>
                        <Link to="/example">Example</Link>
                    </Menu.Item>
                    <Menu.Item key="/logout" icon={<PoweroffOutlined/>}>
                        <Link to="/logout">Logout</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className={contentClasses}>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        {!isNil(breadcrumb) && breadcrumb.map((item) => {
                            if(has(item,"link")){
                                return <Breadcrumb.Item>
                                    <Link to={get(item, "link", null)}>{get(item, "label", null)}</Link>
                                </Breadcrumb.Item>

                            }
                            return <Breadcrumb.Item>{get(item, "label", null)}</Breadcrumb.Item>
                        })}
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet/>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    {get(config,"PROJECT_TITLE","")} ©2023 Created by {get(config,"PROJECT_COPYRIGHT","")} / {get(config,"PROJECT_FOOTER","")}
                </Footer>
            </Layout>
        </Layout></Theme>
    );
};
export default AdminLayout;