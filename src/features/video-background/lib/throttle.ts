// Based on https://stackoverflow.com/questions/27078285/simple-throttle-in-js
export default (callback: (...args: any[]) => void, limit: number) => {
  let timeoutHandler: any = 'null'
  return (...args: any[]) => {
    if (timeoutHandler === 'null') {
      timeoutHandler = setTimeout(() => {
        callback(...args)
        timeoutHandler = 'null'
      }, limit)
    }
  }
}

