const host = "http://localhost:8000";
const api = "/api";

export const baseurl = `${host}${api}`;
export const API_URL_login = `${baseurl}/token/`;
export const API_URL_refresh = `${baseurl}/token/refresh/`;