//利用闭包实现
function StorageBase() {}

StorageBase.prototype.getItem = (key) => {
  return localStorage.getItem(key)
}
StorageBase.prototype.setItem = (key, value) => {
  return localStorage.setItem(key, value)
}

const createStorage = (function () {
  let instance = null

  return function () {
    if (!instance) {
      instance = new StorageBase()
    }
    return instance
  }
})()

const storage1 = createStorage()
const storage2 = createStorage()

console.log(storage1 === storage2) //true

storage1.getItem('name')
