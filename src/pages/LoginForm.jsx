import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input, Space, Spin} from 'antd';
import usePostQuery from "../hooks/api/usePostQuery";
import {get} from "lodash";
import {KEYS} from "../constants/keys";
import {URLS} from "../constants/urls";
import {useSettingsStore, useStore} from "../services/store";

const App = () => {
    const {mutate: login, isLoading} = usePostQuery({hideSuccessToast: true, listKeyId: KEYS.login})
    const setToken = useSettingsStore(state => get(state, 'setToken', () => {
    }))
    const setTokenData = useSettingsStore(state => get(state, 'setTokenData', () => {
    }))
    const setLoginPrepare = useStore(state => get(state, 'setLoginPrepare', () => {
    }))
    const loginPrepare = useStore(state => get(state, 'loginPrepare', false));



    console.log("LOADING", isLoading)
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        login({
            url: URLS.login, attributes: {
                login: get(values, "username"),
                password: get(values, "password")
            }
        }, {
            onSuccess: ({data}) => {
                setLoginPrepare(true);
                setTimeout(() => {
                    setTokenData(data);
                    setToken((get(data, "access_token", null)));
                }, 1000)
            },
            onError: (e) => {


                setTokenData(null);
                setToken(null);
                console.log("error", e);
            }
        })
    };
    return isLoading || loginPrepare ?
        <Space style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%"}} size="middle">
            <Spin size="large"/>
        </Space> : <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                       placeholder="Username"
                       size="large"
                       disabled={isLoading}
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                    size={"large"}
                    disabled={isLoading}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary"
                        htmlType="submit"
                        block
                        size="large"
                        disabled={isLoading}
                >
                    Log in
                </Button>
            </Form.Item>

            <Form.Item>
            </Form.Item>
        </Form>;
};
export default App;