import { useGetAllQuery } from "../api";
import { useSettingsStore } from "../store";
import { get, isNil } from "lodash";
import { OverlayLoader } from "../../layout/components/loader";
import {URLS} from "../../constants/urls";
import {KEYS} from "../../constants/keys";


const Auth = ({ children, ...rest }) => {



  const token = useSettingsStore(
    (state) =>  get(state, "token")
  );

  console.log("TOKEN",token);

  const setUser = useSettingsStore((state) => get(state, "setUser", () => {}));

  const setAuth = useSettingsStore((state) => get(state, "setAuth", () => {}));
 
  const {
    data = null,
    isLoading,
    isFetching,
    error
  } = useGetAllQuery({
    key: KEYS.getMe,
    url: URLS.getMe,
    hideErrorMsg: false,
    enabled: !isNil(token),
    cb: {
      success: (data) => {
        console.log("DATA AUTH",data);

        setUser(data);
        setAuth(true);
      
      },
      fail: () => {},
    },
  });

  

  if (isLoading) {
    return <OverlayLoader />;
  }

  return children;
};

export default Auth;
