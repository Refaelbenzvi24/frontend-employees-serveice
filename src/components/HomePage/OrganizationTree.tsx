import { Row } from "../UI/Grid"
import { Employee, EmployeeProps } from "../../modules/Entities/Employee"
import TreeNode from "./TreeNode"
import Tree, { TreeNode as TreeNodeType } from "../../modules/Tree"


interface OrganizationTreeProps {
	employees: EmployeeProps[]
}

export default (props: OrganizationTreeProps) => {
	const { employees } = props
	const transformedEmployees = employees.map((employee) => new Employee(employee))
	const employeesTree = Tree.buildTree(transformedEmployees, "managerId") as (TreeNodeType & EmployeeProps)[]

	return (
		<Row className="w-full justify-center" id="employees-tree-container">
			<TreeNode employees={employeesTree} managerName=""/>
		</Row>
	)
}
