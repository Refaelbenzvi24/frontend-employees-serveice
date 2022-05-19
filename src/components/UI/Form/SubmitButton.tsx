import clsx from "clsx"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"


type SubmitButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default (submitButtonProps: SubmitButtonProps) => {
	const { children, className, ...restProps } = submitButtonProps

	return (
		<button {...restProps}
			className={`w-40 h-10 py-1 px-3 mx-3 bg-gray-200 dark:bg-dark-400 opacity-95
			rounded-md shadow-sm focus:outline-none active:bg-gray-100 dark:active:bg-dark-600 ${clsx((className))}`}
		        type="submit">
			{children}
		</button>
	)
}
