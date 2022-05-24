import type { ReactElementProps } from 'types'
import {
	CSSProperties, useContext, useEffect, useState,
} from 'react'
import { MainContext } from './MainContext'
import WindowVars from '../../../hooks/useWindowsSize'
import MainProvider from './MainProvider'
import clsx from 'clsx'


export default (props: ReactElementProps) => {
	const {
		      sideBarState: sideBar,
		      sideBarOpts,
		      overlayState,
		      setOverlayState,
		      overlays,
	      }                         = useContext(MainContext)
	const [mainStyle, setMainStyle] = useState<CSSProperties>({})
	const { windowWidth }           = WindowVars()

	const { children, className } = props
	const { shrinkPoint }         = sideBarOpts


	const overlayToggle = () => {
		if (overlays.length > 0) {
			overlays[overlays.length - 1].onClick()
		}
	}

	useEffect(() => {
		if (overlays.length > 0) {
			setOverlayState(true)
		} else if (overlays.length === 0) {
			setOverlayState(false)
		}
	}, [overlays])

	useEffect(() => {
		if (shrinkPoint && sideBar && windowWidth > shrinkPoint) {
			setMainStyle({
				marginLeft: `${sideBarOpts.width}px`,
			})
		} else {
			setMainStyle({})
		}
	}, [sideBar])

	return (
		<MainProvider>
			<div {...props} id="main" className={`h-full ${clsx(className)}`} style={mainStyle}>

				<div id="overlay"
				     role="presentation"
				     className={`opacity transition-opacity ease-out-in duration-400 dark:bg-dark-800
		                    ${overlayState ? 'fixed h-full w-full bg-dark-200 opacity-40 z-20' : 'opacity-0'}`}
				     onClick={overlayToggle}/>

				{children}
			</div>
		</MainProvider>
	)
}
