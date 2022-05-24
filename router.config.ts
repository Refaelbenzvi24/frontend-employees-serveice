import { RouteObject } from "react-router"


export const onRouteGenerate = (routes: RouteObject[]) => {

	return routes
}


export const extendRoute = (route: RouteObject) => {
	if (route.index === true) {
		delete route.index
		route.path = '/'
		return route
	}

	if (route.path === ':404') {
		route.path = '*'
		return route
	}

	// Augment the route with meta that indicates that the route requires authentication - uncomment bellow if you want to include auth meta.
	{
		return {
			...route,
			// meta: {auth: true},
		}
	}
}
