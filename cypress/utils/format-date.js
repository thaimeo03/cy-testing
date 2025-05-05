export function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0') // getMonth() trả về 0-11
  const yyyy = date.getFullYear()
  return `${dd}/${mm}/${yyyy}`
}

export function formatTime(date) {
  const HH = String(date.getHours()).padStart(2, '0')
  const MM = String(date.getMinutes()).padStart(2, '0')
  return `${HH}:${MM}`
}
