import {Outlet} from 'react-router';
import Theme from "./theme";

const AdminLayout = () => {
    return (
        <Theme>
            <Outlet/>
        </Theme>
    );
};
export default AdminLayout;