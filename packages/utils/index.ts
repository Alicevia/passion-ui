export function lowerCamelCase (str, separator = '-') {
  let newStr = ''
  const arr = str.split(separator) // 先用字符串分割成数组

  arr.forEach((item, index) => {
    if (index > 0) {
      return newStr += item.replace(item[0], item[0].toUpperCase())
    } else {
      return newStr += item
    }
  })
  return newStr
}
