import type { ReactElementProps } from 'types'
import clsx from "clsx"


export default (props: ReactElementProps) => {
	return (
		<span {...props}
		      className={`font-bold block w-full whitespace-nowrap bg-transparent
									text-blueGray-400 ${clsx(props.className)}`}>
			{props.children}
		</span>
	)
}
