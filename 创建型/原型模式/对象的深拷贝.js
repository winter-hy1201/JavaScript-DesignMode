function deepClone(obj) {
  //不是引用值类型，直接返回
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  let copyObj = {}

  if (Array.isArray(obj)) {
    copyObj = []
  }

  //若值是引用类型，递归遍历去拷贝每一层数据结构，直到值是基本类型
  for (let key in obj) {
    /*
      校验进入循环的key是否是对象自有属性
      MDN:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    */
    if (obj.hasOwnProperty(key)) {
      copyObj[key] = deepClone(obj[key])
    }
  }
  return copyObj
}

console.log(deepClone({ a: 1 }))
