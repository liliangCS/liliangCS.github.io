import siteConfig from "./site-config.json" assert { type: "json" }

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

// 内容填充
// 创建单个站点
function createItem(item) {
  const { name, iconUrl, linkUrl } = item
  const aEl = document.createElement("a")
  aEl.className = "item"
  aEl.href = linkUrl
  aEl.target = "_blank"
  aEl.innerHTML = `<img src="${iconUrl}" title="${name}" />`
  return aEl
}
// 创建一类站点
function createList(list, contentEl) {
  list.forEach(item => {
    contentEl.appendChild(createItem(item))
  })
}
// 创建所有站点
function createAll() {
  const { tools, design, assets, study, relax } = siteConfig
  const listArr = [tools, design, assets, study, relax]
  document.querySelectorAll(".content").forEach((contentEl, index) => {
    createList(listArr[index], contentEl)
  })
}
createAll()