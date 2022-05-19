import {
	useRoutes,
} from 'react-router-dom'
import routes from '~react-pages'

import Plugins from './plugins'
import * as React from 'react'
import Providers from "./context"


function Pages(): React.ReactElement | null {
	return useRoutes(routes)
}

export default () => {
	Plugins()

	return (
		<Providers>
			<Pages/>
		</Providers>
	)
}
