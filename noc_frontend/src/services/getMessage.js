import axios from "axios";

export const getMessage = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/message`);
}
