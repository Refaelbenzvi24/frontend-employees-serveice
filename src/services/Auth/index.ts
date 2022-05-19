import ApiUrlService from '../../modules/ApiUrlService'
import { ApiResult } from "../types"
import { LoginResult } from "./types"


export default class Auth extends ApiUrlService {
	endpoint = `${this.apiFullRootUrl}/auth`

	async login(email: string, password: string): Promise<ApiResult<LoginResult>> {
		const params = this.buildUrlParams({ email, password })
		return http.get(`${this.endpoint}/login${params}`)
	}
}
