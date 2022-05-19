import { Row, Col } from '../../components/UI/Grid'
import HierarchyTree from "../../components/HomePage/HierarchyTree"
import { employeeEndpoint } from "../../services"
import QueryHandler from "../../components/ReactQuery/QueryHandler"
import { EmployeeProps } from "../../modules/Entities/Employee"
import UserInfo from "../../components/HomePage/UserInfo"


export default () => {
	const { data, status } = employeeEndpoint.employee().list()

	return (
		<Row className="w-full">
			<Col className="w-full">
				<Row className="w-full justify-center pt-15">
					<UserInfo/>
				</Row>

				<Row className="pt-10 w-full justify-center">
					<QueryHandler status={status}>
						<HierarchyTree employees={data?.data as EmployeeProps[]}/>
					</QueryHandler>
				</Row>
			</Col>
		</Row>
	)
}
