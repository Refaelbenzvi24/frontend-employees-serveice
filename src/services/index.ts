import { Vars } from '../modules/vars'
import Auth from './Auth'
import Employee from "./Employee"


const apiData = {
	apiRootUrl:        Vars.api.url,
	apiCurrentVersion: Vars.api.version,
}

export const authEndpoint = new Auth(apiData)

export const employeeEndpoint = new Employee(apiData)
