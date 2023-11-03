//ES5去写一个能够生成迭代器对象的迭代器生成函数

function iteratorGenerator(list) {
  //内部迭代器使用的当前访问元素的索引
  var idx = 0
  var len = list.length

  return {
    next() {
      var done = idx >= len

      //idx++: 实际读取的是idx的值 然后使idx+1
      var value = !done ? list[idx++] : undefined

      return {
        done,
        value,
      }
    },
  }
}

var iterator = iteratorGenerator(['1号', '2号', '3号'])

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
