# ConfigProvider

## 全局配置化组件 

### 主题覆盖
::: tip 透过ConfigProvider我们可以轻松控制内部的所有子组件
  你可以通过`themeOverrides`这个属性覆盖hover状态下的主题色,被该组件包裹的组件都会自动继承该属性内的css变量
::: 
::: tip 部分组件不选择继承使用
当然你也可以让部分组件选择不使用继承的主题配置 比如button组件 那么你可以让`themeOverride`设置为null 或者传入一份独特属于该button的样式变量
::: 
::: demo
configure/configProvider/themeOverride
:::

<!-- ### 主题切换
::: tip 
   我们会通过`useColorModeControl`将当前主题模式暴露给你，这样我们甚至可以做到在`dark`与`light`模式下分别定义组件的各种颜色
:::  
::: demo 
configure/configProvider/configProvider
::: -->

