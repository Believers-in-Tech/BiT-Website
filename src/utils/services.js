import { ApiClientHelper } from "../helpers/api-client.helper"

export class AppService {

     static subscribe(params) {
        const url = process.env.GATSBY_REVUE_BASE_URL + `/v2/subscribers`
        return ApiClientHelper.postForPromise(url, params)
    }

    static getIssues() {
        const url = process.env.GATSBY_REVUE_BASE_URL + `/v2/issues`
        return ApiClientHelper.getForPromise(url)
    }

 

}