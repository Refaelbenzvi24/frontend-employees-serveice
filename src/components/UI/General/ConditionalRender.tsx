import { ReactNode } from "react"


interface ConditionalRenderProps {
	children: ReactNode
	condition: boolean
}

export default ({ children, condition }: ConditionalRenderProps): JSX.Element => {
	return (
		<>
			{condition && children}
		</>
	)
}
