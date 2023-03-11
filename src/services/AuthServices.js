import httpCommon from "../http-common";

const signUp = (data) => {
    return httpCommon.post(`/accounts/register/`, data);
}
const login = (data) => {
    return httpCommon.post(`/accounts/login/`, data)
}



export default { signUp, login }