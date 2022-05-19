import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import clsx from "clsx";


interface IconButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}

export default (props: IconButtonProps) => {
	return (
		<div {...props} className="">
			<div className={`flex
											cursor-pointer
											text-xl
											opacity-80
											text-true-dark-200
											dark:text-white
											hover:text-gray-700
											dark:hover:text-gray-100
											active:text-gray-500
											dark:active:text-gray-300
											hover:opacity-100
											active:opacity-70
											${clsx(props.className)}`}>
				{props.children}
			</div>
		</div>
	)
}
