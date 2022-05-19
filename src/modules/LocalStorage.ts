import type { ThemeName } from '../components/UI/Theme/types'


export class LocalStorage {
	static THEME    = 'theme'
	
	static getTheme(): ThemeName | undefined {
		const theme = localStorage.getItem(LocalStorage.THEME)
		return theme as ThemeName | undefined
	}
	
	static setTheme(theme: boolean | string): void {
		localStorage.setItem(LocalStorage.THEME, theme.toString())
	}
}

export default {}
