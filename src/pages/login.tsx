import { Col, Row } from "../components/UI/Grid"
import { useNavigate } from "react-router-dom"
import { authEndpoint } from "../services"
import { useFormik } from "formik"
import * as Yup from "yup"
import TextField from "../components/UI/Form/TextField"
import TokenStorage from "../modules/TokenStorage"
import SubmitButton from "../components/UI/Form/SubmitButton"


export default () => {
	const navigate = useNavigate()

	const formik = useFormik({
		initialValues:    {
			email:    '',
			password: '',
		},
		validationSchema: Yup.object({
			email:    Yup.string()
				          .required("Email's required")
				          .email('Invalid email address'),
			password: Yup.string()
				          .required("Password's required"),
		}),
		validateOnChange: false,
		validateOnBlur:   false,
		onSubmit:         async (values) => {
			try {
				const { email, password } = values
				const result              = await authEndpoint.login(email, password)
				const userData            = result.data

				TokenStorage.storeEmployeeData(userData)
				navigate('/')
			} catch (error) {
				throw error
			}
		},
	})

	return (
		<Row className="w-full h-full justify-center">
			<Col>
				<h1 className="text-6xl p-5 text-center">
					Employees app
				</h1>

				<Row className="w-full justify-center">
					<Col className="pt-[60%] w-full">
						<form onSubmit={formik.handleSubmit}>
							<TextField id="email"
							           className="w-[60%] m-auto"
							           placeholder="Email"
							           value={formik.values.email}
							           onChange={formik.handleChange}
							           onBlur={async () => formik.validateField('email')}
							           error={formik.errors.email}/>

							<TextField id="password"
							           className="pt-2 w-[60%] m-auto"
							           placeholder="Password"
							           value={formik.values.password}
							           onChange={formik.handleChange}
							           onBlur={async () => formik.validateField('password')}
							           error={formik.errors.password}
							           type="password"/>

							<div className="w-full flex justify-center pt-2">
								<SubmitButton id="login-submit">Login</SubmitButton>
							</div>
						</form>
					</Col>
				</Row>
			</Col>
		</Row>
	)
}
