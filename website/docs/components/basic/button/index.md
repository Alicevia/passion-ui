# Button

## 基础 
按钮的 `type` 分别为 `default`、`tertiary`、`primary`、`info`、`success`、`warning` 和 `error`。
::: tip
目前没有判断type的值是否为一个可用值，如果你乱传那么可能会样式错乱
:::
::: demo 
basic/button/basic
:::



## 尺寸
按钮的 `size` 为 `mini`, `tiny`, `small`, `medium`, `large`, `huge`
::: tip
(⊙o⊙)… 目前先这么弄着吧
:::
::: demo 
basic/button/size
:::

## 幽灵按钮
`ghost`属性控制按钮的背景是否透明
::: demo
basic/button/ghost
:::

## 虚线按钮
`dashed`属性控制按钮边框样式 注意当开启`dashed`的时候会自动开启`幽灵按钮`
::: demo
basic/button/dashed
:::
## 禁用按钮
`disabled` 禁用当前按钮
::: demo
basic/button/disabled
:::

## 文本按钮
`text` 像文本一样的按钮
::: demo
basic/button/text
:::

## 按钮形状
`round` 胶囊一样的按钮  `circle` 圆形按钮 
::: tip 方形按钮
默认情况下是方形按钮最小宽度不会低于高度
:::
::: danger  
当使用了`text` 属性的时候 形状不会生效
:::
::: demo
basic/button/shape
:::

