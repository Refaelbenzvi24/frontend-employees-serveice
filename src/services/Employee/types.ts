import { UseQueryResult } from "react-query"
import { ApiResult } from "../types"
import { EmployeeProps } from "../../modules/Entities/Employee"


export interface EmployeeEndpoint {
	endpoint: string
	list: () => UseQueryResult<ApiResult<EmployeeProps[]>>
}

