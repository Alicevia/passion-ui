export function lowerCamelCase (str, separator = '-') {
  const arr = str.split(separator) // 先用字符串分割成数组
  return arr.map((item, index) => {
    if (index == 0) return item
    return item.at(0).toUpperCase() + item.slice(1)
  }).join('')
}
