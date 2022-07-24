import { reactive } from 'vue'
import './tailwindcss/index.css'
import 'animate.css'
import { CommonCssVars } from './tailwindcss/plugins/themeVars'
import { ButtonCssVars } from '../button/src/tailwindcss/index'
import { InputCssVars } from '../input/src/tailwindcss/index'

export default reactive({ CommonCssVars, ButtonCssVars, InputCssVars })
