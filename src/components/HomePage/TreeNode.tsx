import { OrgTreeEmployee } from "../../modules/Entities/Employee"
import { Col, Row } from "../UI/Grid"
import Title from "../UI/Typograpy/Title"
import Card from "../UI/Cards/Card"
import EmployeeDetails from "./EmployeeDetails"
import TokenStorage from "../../modules/TokenStorage"
import ClickTooltip from "../UI/Tooltip/ClickTooltip"
import { useEffect } from "react"
import { connect } from "../../modules/HtmlUtil"
import clsx from "clsx"


interface TreeNodeProps {
	employees: OrgTreeEmployee[]
	managerName: string
}

const isConnectedEmployee = (email: string) => email === TokenStorage.getEmployeeEmail()

const TreeNode = (treeNodeParams: TreeNodeProps) => {
	const { employees, managerName } = treeNodeParams

	/**
	 * Draws lines from the current level tree nodes to theirs manager node.
	 */
	const drawCurrentTreeLevelLines = () => {
		employees.forEach((employee) => {
			if (employee.managerId !== null) {
				const div1     = document.querySelector(`#employee-${employee.managerId}`) as HTMLDivElement
				const div2     = document.querySelector(`#employee-${employee.id}`) as HTMLDivElement
				const appendTo = document.querySelector('#tree-lines-container') as HTMLDivElement

				connect(div1, div2, '#4d4d4d', 2, appendTo)
			}
		})
	}

	useEffect(() => {
		drawCurrentTreeLevelLines()
	}, [])

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
								</Col>
							</Row>

							<Row>
								{
									employee.employees.length > 0 && (
										<TreeNode managerName={`${employee.firstName} ${employee.lastName}`}
										          employees={employee.employees}/>
									)
								}
							</Row>
						</Col>
					)
				})
			}
			<div id="tree-lines-container"/>
		</Row>
	)
}

export default TreeNode
