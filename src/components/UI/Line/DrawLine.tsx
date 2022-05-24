import { CSSProperties, useEffect, useState } from "react"


interface DrawLineProps {
	from: string
	to: string
	thickness: number
	color: string
}

export const getOffset = (element: HTMLElement) => {
	const rect = element.getBoundingClientRect()

	return {
		left:   rect.left + window.scrollX,
		top:    rect.top + window.scrollY,
		width:  rect.width || element.offsetWidth,
		height: rect.height || element.offsetHeight,
	}
}

export const calcLineData = (from: string, to: string, thickness: number) => {
	const fromElement = document.querySelector(from) as HTMLDivElement
	const toElement   = document.querySelector(to) as HTMLDivElement

	const off1   = getOffset(fromElement)
	const off2   = getOffset(toElement)
	// bot center
	const x1     = off1.left + (off1.width / 2)
	const y1     = off1.top + off1.height
	// top center
	const x2     = off2.left + (off2.width / 2)
	const y2     = off2.top
	// distance
	const length = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)))
	// center
	const cx     = ((x1 + x2) / 2) - (length / 2)
	const cy     = ((y1 + y2) / 2) - (thickness / 2)
	// line angle
	const angle  = Math.atan2((y1 - y2), (x1 - x2)) * (180 / Math.PI)

	return { cx, cy, angle, length }
}

export default ({ from, to, thickness, color }: DrawLineProps) => {
	const [lineStyle, setLineStyle] = useState<CSSProperties>({})

	useEffect(() => {
		const { cx, cy, angle, length } = calcLineData(from, to, thickness)

		setLineStyle({
			padding:         0,
			margin:          0,
			height:          `${thickness}px`,
			backgroundColor: `${color}`,
			lineHeight:      `1px`,
			position:        "absolute",
			left:            `${cx}px`,
			top:             `${cy}px`,
			width:           `${length}px`,
			transform:       `rotate(${angle}deg)`,
		})
	}, [])

	return (
		<div style={lineStyle}/>
	)
}
