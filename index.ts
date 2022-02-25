type ar = number|string []
const add = <T>(a:T ) => {
    console.log(a)
}
add<string>(5)
interface axiosData<T = any> {
  status: string,
  statusCode: number,
  data: T

}
const user: axiosData ={
  status:'ok',
  statusCode:200,
  data:['a',3]
}
const b = new Promise((resolve:any, reject:any) => {
  setTimeout(() => {
    resolve()
    console.log('xong')
  }, 2000)
})
