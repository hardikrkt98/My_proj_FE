
import axios from 'axios';

export const makeHttpRequest = config => {
    if (!config.hideLoader) {
        // showLoader();
    }
    // IdentifyUserForMXP();
    config.params = config.params || {};
    return axios
        .request({
            method: config.method || 'GET',
            baseURL: 'http://codeitnow.me/',
            url: '/api'+config.url,
            data: config.data,
            headers: config.headers ? config.headers : {},
            params: config.params,
            timeout: config.timeout ,
            responseType: config.responseType ? config.responseType : 'json',
        })
        .then(res => {
            if (!config.hideLoader) {
                // hideLoader();
            }
            return res;
        })
        .catch(err => {
            // hideLoader();
            return errorHandler(err);
        });
};

export const errorHandler = err => {
    throw err;
};

export const extractData = (res = {}) => {
    res = { ...res };
    res.data = res.data || [];
    return res;
};

export default {
    makeHttpRequest,
    errorHandler,
    extractData,
};
