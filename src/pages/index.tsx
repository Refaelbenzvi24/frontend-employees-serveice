import { Outlet } from 'react-router'
import Main from '../components/UI/Main/Main'


export default () => {
	return (
		<div className="h-full w-full mx-auto">
			<Main>
				<Outlet/>
			</Main>
		</div>
	)
}
