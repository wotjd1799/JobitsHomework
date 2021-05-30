import axios from "axios";

const DOMAIN = process.env.REACT_APP_DOMAIN;

export const request = ( Method, Url ) => {

  return axios({
    Method,
    url: DOMAIN + Url
  })
  .then((res) => {return res.data})
  .catch((error) => {return error});

};