//求和函数
const addAll = function () {
  let sum = 0
  const length = arguments.length
  for (let i = 0; i < length; i++) {
    sum += arguments[i]
  }
  console.log('执行一次计算')
  return sum
}

//缓存代理
const cacheProxyAddAll = (function () {
  const resultCache = {}
  return function () {
    const argsStr = Array.prototype.join.call(arguments, ',')

    if (argsStr in resultCache) {
      return resultCache[argsStr]
    }

    resultCache[argsStr] = addAll(...arguments)
    return resultCache[argsStr]
  }
})()

/*
  下面两次函数执行，addAll函数 只执行了一次
  log => 执行一次计算
  log => 15
  log => 15
*/
console.log(cacheProxyAddAll(1, 2, 3, 4, 5))
console.log(cacheProxyAddAll(1, 2, 3, 4, 5))
