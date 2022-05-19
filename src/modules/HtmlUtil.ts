/**
 * this function return offset data for a given html element.
 * @param element - the element to get the offset data for.
 * @return {left: number, top: number, width: number, height: number}
 */
export const getOffset = (element: HTMLElement) => {
	const rect = element.getBoundingClientRect()

	return {
		left:   rect.left + window.scrollX,
		top:    rect.top + window.scrollY,
		width:  rect.width || element.offsetWidth,
		height: rect.height || element.offsetHeight,
	}
}

/**
 * draw a line between two elements.
 * @param from - element to draw line from
 * @param to - element to draw line to
 * @param color - line color in hex
 * @param thickness - thickness of the line
 * @param lineTarget - element to append the line to
 */
export const connect = (from: HTMLDivElement, to: HTMLDivElement, color: string, thickness: number, lineTarget: HTMLDivElement): void => {
	const off1   = getOffset(from)
	const off2   = getOffset(to)
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

	const htmlLine = `<div style='padding:0; margin:0; height:${thickness}px; background-color:${color}; line-height:1px;
									position:absolute; left:${cx}px; top:${cy}px; width:${length}px; -moz-transform:rotate(${angle}deg);
									-webkit-transform:rotate(${angle}deg); -o-transform:rotate(${angle}deg); -ms-transform:rotate(${angle}deg);
									transform:rotate(${angle}deg);'/>`

	lineTarget.innerHTML += htmlLine
}
