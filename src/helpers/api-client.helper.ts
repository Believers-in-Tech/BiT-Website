import { authHeader } from "../helpers/auth-header";
import { handleResponse } from "../helpers/handle-response";


export class ApiClientHelper {
    
    public static getForPromise = (url: string) => {
        const requestOptions = { method: 'GET', headers: authHeader() }
        return fetch(url, requestOptions as any)
            .then(handleResponse).catch(handleResponse)
    }

    public static postForPromise = (url: string, params: any) => {
        const requestOptions = {
            method: 'POST',
            headers: { ...authHeader(), "Content-Type": "application/json" },
            body: JSON.stringify(params)
        };

        return fetch(url, requestOptions as any)
            .then(handleResponse).catch(handleResponse)
    }

    public static putForPromise = (url: string, params: any) => {
        const requestOptions = {
            method: 'PUT',
            headers: { ...authHeader(), "Content-Type": "application/json" },
            body: JSON.stringify(params)
        };

        return fetch(url, requestOptions as any)
            .then(handleResponse).catch(handleResponse)
    }

    public static deleteForPromise = (url: string, params?: any) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { ...authHeader(), "Content-Type": "application/json" },
            body: JSON.stringify(params)
        };

        return fetch(url, requestOptions as any)
            .then(handleResponse).catch(handleResponse)
    }

}

