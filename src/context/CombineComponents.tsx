import { FC } from 'react'
import { ReactComponentProps } from "../types"


/**
 * This function takes array of components and nest them into a single component
 * @param components {array} array of components
 */
export default (...components: FC[]) => {
	return components.reduce((AccumulatedComponents, CurrentComponent) => {
		return ({ children }: ReactComponentProps) => {
			return (
				<AccumulatedComponents>
					<CurrentComponent>
						{children}
					</CurrentComponent>
				</AccumulatedComponents>
			)
		}
	}, ({ children }: ReactComponentProps) => <>{children}</>)
}
