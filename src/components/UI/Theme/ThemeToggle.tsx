import { DetailedHTMLProps, HTMLAttributes, useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import Tooltip from '../Tooltip/Tooltip'
import IconButton from '../Buttons/IconButton'

type ThemeToggleProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default (props: ThemeToggleProps) => {
	const { theme, setTheme } = useContext(ThemeContext)

	const themeToggle = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<div {...props}>
			<Tooltip className="bottom-[40px] right-[-50%]" tooltip="theme">
				<IconButton className={props.className} id="theme-toggle-button" onClick={themeToggle}>
					{theme === 'light' ? <IconCarbonLight/> : <IconCarbonMoon/>}
				</IconButton>
			</Tooltip>
		</div>
	)
}
