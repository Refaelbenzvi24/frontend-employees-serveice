import { AxiosRequestConfig } from "axios"


export interface ApiResult<Data> {
	config: AxiosRequestConfig
	data: Data
	headers: Record<string, string | number | boolean>
	request: XMLHttpRequest
	status: number
	statusText: string
}
