import { Row } from "../UI/Grid"
import { Employee, EmployeeProps } from "../../modules/Entities/Employee"
import TreeNode from "./TreeNode"


interface HierarchyTreeProps {
	employees: EmployeeProps[]
}

export default (props: HierarchyTreeProps) => {
	const { employees }        = props
	const transformedEmployees = employees.map((employee) => new Employee(employee))
	const treeData             = Employee.buildOrgTree(transformedEmployees)

	return (
		<Row className="w-full justify-center" id="employees-tree-container">
			<TreeNode employees={treeData} managerName=""/>
		</Row>
	)
}
