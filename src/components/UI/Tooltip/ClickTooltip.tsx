import type { ReactElement, ReactNode } from 'react'

import './Tooltip.css'
import type { ReactElementProps } from 'types'
import clsx from "clsx"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import ConditionalAnimation from "../Animation/ConditionalAnimation"


interface ClickTooltipProps extends ReactElementProps {
	children: ReactElement;
	tooltip: ReactNode | number | string;
}

export default (props: ClickTooltipProps) => {
	const [tooltipIsActive, setTooltipIsActive] = useState(false)
	const tooltipRef                            = useRef<Node>() as MutableRefObject<HTMLDivElement>

	useEffect(() => {
		document.addEventListener('click', (e: MouseEvent) => {
			if (!tooltipRef.current.contains(e.target as Node)) {
				setTooltipIsActive(false)
			}
		})
	}, [])

	return (
		<div className="flex w-auto">
			<div {...props} ref={tooltipRef} className="relative">
				<ConditionalAnimation condition={tooltipIsActive} timeout={200}>
					<span className={`${clsx(!tooltipIsActive && '!opacity-0 ease-in-out', 'transition-all duration-200 fade-in')}
										absolute rounded shadow-xl text-semibold p-1 bg-gray-100 dark:bg-dark-200 text-blue-500
										dark:text-white z-9999 ${clsx(props.className)}`}>
						{props.tooltip}
					</span>
				</ConditionalAnimation>
				<div role="tooltip" onClick={() => setTooltipIsActive(!tooltipIsActive)}>
					{props.children}
				</div>
			</div>
		</div>
	)
}
