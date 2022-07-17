import { reactive, computed } from 'vue'
import './tailwindcss/index.css'

import { Button } from '../../button/src/tailwindcss/index'
import { Common } from './themeVars'

export default reactive({ Common, Button })
