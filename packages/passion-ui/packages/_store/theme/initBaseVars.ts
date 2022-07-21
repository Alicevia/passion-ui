import { reactive } from 'vue'
import './tailwindcss/index.css'
import 'animate.css'
import { ButtonCssVars } from '../../button/src/tailwindcss/index'
import { CommonCssVars } from './themeVars'

export default reactive({ CommonCssVars, ButtonCssVars })
