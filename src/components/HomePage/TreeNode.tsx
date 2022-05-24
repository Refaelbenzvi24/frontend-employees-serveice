import { EmployeeProps } from "../../modules/Entities/Employee"
import { Col, Row } from "../UI/Grid"
import Title from "../UI/Typograpy/Title"
import Card from "../UI/Cards/Card"
import EmployeeDetails from "./EmployeeDetails"
import TokenStorage from "../../modules/TokenStorage"
import ClickTooltip from "../UI/Tooltip/ClickTooltip"
import clsx from "clsx"
import { TreeNode as TreeNodeType } from "../../modules/Tree"
import DrawLine from "../UI/Line/DrawLine"
import ConditionalRender from "../UI/General/ConditionalRender"


interface TreeNodeProps {
	employees: (EmployeeProps & TreeNodeType)[]
	managerName: string
}

const isConnectedEmployee = (email: string) => email === TokenStorage.getEmployeeEmail()

const TreeNode = (TreeNodeParams: TreeNodeProps) => {
	const { employees, managerName } = TreeNodeParams

	return (
		<Row className="px-2" id="tree-node-container">
			{
				employees.map((employee) => {
					return (
						<Col className="px-1" key={employee.id}>
							<Row className="justify-center">
								<Col className="p-1 py-5">
									<ClickTooltip className={`bottom-[-120%] right-[105%] ${clsx(managerName ? "w-80" : "w-120")}`}
									              tooltip={<EmployeeDetails employee={employee} managerName={managerName}/>}>
										<Card className={`${isConnectedEmployee(employee.email) && "!text-green-500"} cursor-pointer`}
										      id={`employee-${employee.id}`}>
											<Title className="px-2 py-1 text-sm">{`${employee.firstName} ${employee.lastName}`}</Title>
										</Card>
									</ClickTooltip>

									<ConditionalRender condition={!!employee.parentId}>
										<DrawLine from={`#employee-${employee.parentId}`}
										          to={`#employee-${employee.id}`}
										          thickness={2}
										          color="#4d4d4d"/>
									</ConditionalRender>
								</Col>
							</Row>

							<Row>
								<ConditionalRender condition={employee.children.length > 0}>
									<TreeNode managerName={`${employee.firstName} ${employee.lastName}`}
									          employees={employee.children as (EmployeeProps & TreeNodeType)[]}/>
								</ConditionalRender>
							</Row>
						</Col>
					)
				})
			}
		</Row>
	)
}

export default TreeNode
