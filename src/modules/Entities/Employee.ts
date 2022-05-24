import Entity from './Entity'
import { LoginResult } from "../../services/Auth/types"


export interface EmployeeProps extends LoginResult {
	password: string
}

export class Employee extends Entity {
	id: number

	email: string

	password: string

	firstName: string

	lastName: string

	startDate: string

	managerId: number | null

	role: string

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
}
