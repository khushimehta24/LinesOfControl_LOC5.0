import httpComet from "../http-comet";

const signUp = (data) => {
    return httpComet.post(`/users`, data);
}



export default { signUp }