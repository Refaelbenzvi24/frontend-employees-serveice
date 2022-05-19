import { LoginResult } from "../services/Auth/types"


export default class TokenStorage {
	static LOCAL_EMPLOYEE_EMAIL      = 'employee_email'

	static LOCAL_EMPLOYEE_FIRST_NAME = 'employee_first_name'

	static LOCAL_EMPLOYEE_LAST_NAME  = 'employee_last_name'

	static LOCAL_EMPLOYEE_ROLE       = 'employee_role'

	static storeEmployeeData(data: LoginResult) {
		TokenStorage.storeEmployeeEmail(data.email)
		TokenStorage.storeEmployeeFirstName(data.firstName)
		TokenStorage.storeEmployeeLastName(data.lastName)
		TokenStorage.storeEmployeeRole(data.role)
	}

	static clearEmployeeData() {
		localStorage.removeItem(TokenStorage.LOCAL_EMPLOYEE_EMAIL)
		localStorage.removeItem(TokenStorage.LOCAL_EMPLOYEE_FIRST_NAME)
		localStorage.removeItem(TokenStorage.LOCAL_EMPLOYEE_LAST_NAME)
		localStorage.removeItem(TokenStorage.LOCAL_EMPLOYEE_ROLE)
	}

	static storeEmployeeEmail(employeeEmail: string) {
		localStorage.setItem(TokenStorage.LOCAL_EMPLOYEE_EMAIL, employeeEmail)
	}

	static storeEmployeeFirstName(employeeFirstName: string) {
		localStorage.setItem(TokenStorage.LOCAL_EMPLOYEE_FIRST_NAME, employeeFirstName)
	}

	static storeEmployeeLastName(employeeLastName: string) {
		localStorage.setItem(TokenStorage.LOCAL_EMPLOYEE_LAST_NAME, employeeLastName)
	}

	static storeEmployeeRole(employeeRole: string) {
		localStorage.setItem(TokenStorage.LOCAL_EMPLOYEE_ROLE, employeeRole)
	}

	static getEmployeeEmail(): string {
		return localStorage.getItem(TokenStorage.LOCAL_EMPLOYEE_EMAIL) ?? ""
	}


	static getEmployeeFirstName(): string {
		return localStorage.getItem(TokenStorage.LOCAL_EMPLOYEE_FIRST_NAME) ?? ""
	}

	static getEmployeeLastName(): string {
		return localStorage.getItem(TokenStorage.LOCAL_EMPLOYEE_LAST_NAME) ?? ""
	}
}
