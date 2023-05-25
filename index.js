const clockEl = document.querySelector("#clock")
/**
 * 时间补零
 * @param {*} num 
 * @returns 
 */
function addZero(num) {
  if (num >= 10) {
    return num
  } else {
    return "0" + num
  }
}
// 更新时间
function updateTime() {
  const curTime = new Date()
  const timeStr = addZero(curTime.getHours()) + ":" + addZero(curTime.getMinutes())  + ":" + addZero(curTime.getSeconds())
  clockEl.innerText = timeStr
}
updateTime()
setInterval(updateTime, 1000)