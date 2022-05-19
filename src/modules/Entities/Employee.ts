import Entity from './Entity'
import { LoginResult } from "../../services/Auth/types"


export interface EmployeeProps extends LoginResult {
	password: string
}

export interface OrgTreeEmployee extends LoginResult {
	password: string
	employees: OrgTreeEmployee[]
}

export class Employee extends Entity {
	constructor(employee: EmployeeProps) {
		super()
		this.id        = employee.id
		this.email     = employee.email
		this.password  = employee.password
		this.firstName = employee.firstName
		this.lastName  = employee.lastName
		this.startDate = employee.startDate
		this.managerId = employee.managerId
		this.role      = employee.role
	}

	id: number

	email: string

	password: string

	firstName: string

	lastName: string

	startDate: string

	managerId: number | null

	role: string

	/**
	 * @param employees {array} array of employees
	 * @returns {OrgTreeEmployee} returns an array of arrays in which each array represents a level in the org tree
	 */
	static buildOrgTree(employees: EmployeeProps[]): OrgTreeEmployee[] {
		const treeData = employees.map((employee) => ({ ...employee, employees: [] } as OrgTreeEmployee))

		treeData.forEach((employee) => {
			if (employee.managerId) {
				treeData[employee.managerId - 1].employees.push(employee)
			}
		})

		return treeData.filter((employee) => employee.managerId === null)
	}
}
