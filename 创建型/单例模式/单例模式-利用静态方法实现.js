// 利用静态方法实现
class Storage {
  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage()
    }
    return Storage.instance
  }
  getItem(key) {
    return localStorage.getItem(key)
  }
  setItem(key, value) {
    return localStorage.setItem(key, value)
  }
}

const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()
const storage3 = Storage.getInstance()

console.log(storage1 === storage2) //true
