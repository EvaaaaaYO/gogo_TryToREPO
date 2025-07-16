// composables/booth_map.js

export function generateLayout() {
  const layout = []

  const horizontalOrder = ['羊', 'Q', '馬', 'P', 'R']
  const verticalOrder = ['狗', '雞', '猴', '特', '商']

  const horizontalCount = { 羊: 72, Q: 72, 馬: 72, P: 72, R: 72 }
  const verticalCount = { 狗: 20, 雞: 32, 猴: 34, 特: 4, 商: 2 }

  if (!Array.isArray(horizontalOrder) || !Array.isArray(verticalOrder)) {
    throw new Error('horizontalOrder 或 verticalOrder 未正確定義')
  }

  let y = 0

  // 第一列白 + 廁所等設施
  horizontalOrder.forEach((prefix, idx) => {
    layout.push({ id: `top-${prefix}`, 
        x: idx, y, 
        type: 'facility' })
  })
  y++

  // 每個直向區塊（狗、雞、猴、特、商）
  verticalOrder.forEach(vPrefix => {
    const rows = verticalCount[vPrefix]
    if (typeof rows !== 'number') throw new Error(`verticalCount[${vPrefix}] 無效`)

    for (let row = 0; row < rows; row++) {
      let x = 0

      // 左邊直排
      const leftId = `${vPrefix}${String(rows - row).padStart(2, '0')}`
      layout.push({ id: leftId, x: -1, y, type: 'booth' })

      horizontalOrder.forEach((hPrefix, hIdx) => {
        if (hIdx > 0) {
          layout.push({ id: `aisle-${y}-${hIdx}`, x, y, type: 'small-aisle' })
          x++
        }

        const isAsc = hPrefix === '羊' || hPrefix === '馬'
        const num = isAsc ? row + 1 : rows - row
        const id = `${hPrefix}${String(num).padStart(2, '0')}`

        layout.push({ id, x, y, type: 'booth' })
        x++
      })

      y++
    }

    // 每個區塊下方的大走道
    layout.push({ id: `large-aisle-${y}`, x: 0, y, type: 'large-aisle' })
    y++
  })

  // 倒數第二列 DM/服務台
  const dmItems = ['商01', '商02', 'dm', 'aisle', 'service', 'aisle']
  dmItems.forEach((label, i) => {
    layout.push({ id: label, x: i, y, type: label === 'aisle' ? 'small-aisle' : 'facility' })
  })
  y++

  // 最下方白列
  horizontalOrder.forEach((prefix, idx) => {
    layout.push({ id: `bottom-${prefix}`, x: idx, y, type: 'facility' })
  })

  return layout
}
