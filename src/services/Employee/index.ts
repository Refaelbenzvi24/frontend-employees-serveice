import ApiUrlService  from "../../modules/ApiUrlService"
import { useQuery } from "react-query"
import { EmployeeEndpoint } from "./types"


export default class Employee extends ApiUrlService {
	employee(): EmployeeEndpoint {
		return {
			endpoint: `${this.apiFullRootUrl}/employee`,

			list: () => useQuery('employee', async () => http.get(this.employee().endpoint)),
		}
	}
}
