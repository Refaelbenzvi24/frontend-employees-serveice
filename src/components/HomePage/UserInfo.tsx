import { Col, Row } from "../UI/Grid"
import { CircleAvatar } from "../UI/Avatar"
import Title from "../UI/Typograpy/Title"
import TokenStorage from "../../modules/TokenStorage"
import Subtitle from "../UI/Typograpy/Subtitle"
import Tooltip from "../UI/Tooltip/Tooltip"
import IconButton from "../UI/Buttons/IconButton"
import ThemeToggle from "../UI/Theme/ThemeToggle"
import { useNavigate } from "react-router-dom"


export default () => {
	const navigate = useNavigate()

	const logout = async () => {
		TokenStorage.clearEmployeeData()
		navigate("/login")
	}

	return (
		<Col>
			<Row>
				<Col>
					<CircleAvatar className="w-12 h-12">
						<IconPhUserDuotone/>
					</CircleAvatar>
				</Col>

				<Col className="justify-center">
					<Title className="text-2xl px-2 text-center">
						{`${TokenStorage.getEmployeeFirstName()} ${TokenStorage.getEmployeeLastName()}`}
					</Title>

					<Subtitle className="px-5 text-xs">
						{TokenStorage.getEmployeeEmail()}
					</Subtitle>
				</Col>

				<Col className="justify-center">
					<Row>
						<Tooltip className="bottom-[40px] right-[-50%]" tooltip="Logout">
							<IconButton id="logout-button" onClick={logout}>
								<IconMdiLogout/>
							</IconButton>
						</Tooltip>

						<ThemeToggle className="mx-1"/>
					</Row>
				</Col>
			</Row>
		</Col>
	)
}
