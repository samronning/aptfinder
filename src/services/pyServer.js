import axios from "axios";
const { REACT_APP_PYSERVER_URL } = process.env;
const pyClient = axios.create({ baseURL: REACT_APP_PYSERVER_URL });

export { pyClient };
