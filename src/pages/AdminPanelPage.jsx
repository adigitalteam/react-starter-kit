import React from 'react';
import {Outlet} from "react-router";
import {useSettingsStore} from "../services/store";
import {get} from "lodash";
import {Descriptions, Space, Tag} from 'antd';

const {CheckableTag} = Tag;

const AdminPanelPage = () => {
    const user = useSettingsStore(state => get(state, 'user', null))

    const setBreadcrumb = useSettingsStore(state => get(state, 'setBreadcrumb', () => {

    }))
    setBreadcrumb([{
        label: "Home",
        link:"/"
    }]);
    return (
        <div>
            <Descriptions title="User Info">
                <Descriptions.Item label="id">{get(user, "id", null)}</Descriptions.Item>
                <Descriptions.Item label="UserName">{get(user, "username", null)}</Descriptions.Item>
                <Descriptions.Item label="status">{get(user, "status", null)}</Descriptions.Item>
                <Descriptions.Item label="phone">{get(user, "phone", null)}</Descriptions.Item>
                <Descriptions.Item label="email">{get(user, "email", null)}</Descriptions.Item>
            </Descriptions>
            <span
                style={{
                    marginRight: 8,
                }}
            >
        Authorities:
      </span>
            <Space size={[0, 8]} wrap>
                {get(user, "authorities", []).map((tag) => (
                    <CheckableTag
                        key={tag}
                    >
                        {tag}
                    </CheckableTag>
                ))}
            </Space>
            <Outlet/>
        </div>
    );
}

export default AdminPanelPage;