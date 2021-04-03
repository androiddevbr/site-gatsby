export const updateLinks = (
  text,
  name,
  url = `https://github.com/androiddevbr`
) => {
  const regex = /\]\(([^)]+)\)/gsu
  return String(text).replaceAll(regex, (substring) => {
    if (substring.indexOf("http") > 0) return substring
    else if (substring.indexOf("#") > 0)
      return `](${url}/${name}/${substring.replaceAll(/[\]\(\)]/g, "")})`
    else
      return `](${url}/${name}/blob/master/${substring.replaceAll(
        /[\]\(\)]/g,
        ""
      )})`
  })
}

export const getTime = (seconds) => {
  var hours = Math.floor(seconds / 3600)
  var minutes = Math.floor((seconds - hours * 3600) / 60)
  var seconds = seconds - hours * 3600 - minutes * 60

  if (hours < 10) {
    hours = "0" + hours
  }
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  return hours + ":" + minutes + ":" + seconds
}
