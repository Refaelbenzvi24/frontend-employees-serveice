import { Col, Row } from "../UI/Grid"
import Subtitle from "../UI/Typograpy/Subtitle"
import { EmployeeProps } from "../../modules/Entities/Employee"


interface EmployeeDetailsProps {
	employee: EmployeeProps
	managerName: string
}

export default (EmployeeDetailsProps: EmployeeDetailsProps) => {
	const { employee, managerName } = EmployeeDetailsProps

	return (
		<Row>
			<Col className="py-4 px-6 text-left">
				<Row>
					<Col className="px-1">
						<Subtitle>
							Id:
							{employee.id}
						</Subtitle>
						<Subtitle>
							First name:
							{employee.firstName}
						</Subtitle>
						<Subtitle>
							Last name:
							{employee.lastName}
						</Subtitle>
						<Subtitle>
							Email:
							{employee.email}
						</Subtitle>
						<Subtitle>
							Password:
							{employee.password}
						</Subtitle>
						<Subtitle>
							Start Date:
							{new Date(employee.startDate).toDateString()}
						</Subtitle>
						<Subtitle>
							Direct Manager:
							{managerName || "This employee don't have a manager"}
						</Subtitle>
						<Subtitle>
							Role:
							{employee.role}
						</Subtitle>
					</Col>
				</Row>
			</Col>
		</Row>
	)
}
