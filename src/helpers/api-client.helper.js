import { authHeader } from "./auth-header";
import { handleResponse } from "./handle-response";


export class ApiClientHelper {
    
    static getForPromise = (url) => {
        const requestOptions = {headers: authHeader(), mode: 'cors' }
        return fetch(url, requestOptions)
            .then(handleResponse).catch(handleResponse)
    }

    static postForPromise = (url, params) => {
        const requestOptions = {
            method: 'POST',
            headers: { ...authHeader(), "Content-Type": "application/json" },
            body: JSON.stringify(params)
        };

        return fetch(url, requestOptions)
            .then(handleResponse).catch(handleResponse)
    }

    static putForPromise = (url, params) => {
        const requestOptions = {
            method: 'PUT',
            headers: { ...authHeader(), "Content-Type": "application/json" },
            body: JSON.stringify(params)
        };

        return fetch(url, requestOptions)
            .then(handleResponse).catch(handleResponse)
    }

    static deleteForPromise = (url, params) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { ...authHeader(), "Content-Type": "application/json" },
            body: JSON.stringify(params)
        };

        return fetch(url, requestOptions)
            .then(handleResponse).catch(handleResponse)
    }

}

