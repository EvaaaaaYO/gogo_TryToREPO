// composables/booth_map.js

export function generateLayout() {
  const layout = []
  const blockSize = 35
  const gap = 15

  const horizontalOrder = ['羊', 'Q', '馬', 'P', 'R']
  const horizontalCount = { 羊: 72, Q: 72, 馬: 72, P: 72, R: 72 }
  const verticalOrder = ['狗', '雞', '猴', '特', '商']
  const verticalCount = { 狗: 20, 雞: 32, 猴: 34, 特: 4, 商: 2 }

  let y = 0
  if (!horizontalOrder || !Array.isArray(horizontalOrder)) {
    throw new Error('horizontalOrder 未定義或不是陣列')
  }
  // ── 上方白/廁所列
  horizontalOrder.forEach(prefix => {
    layout.push({ id: prefix, 
      x: horizontalOrder.indexOf(prefix), y, 
      type: 'facility' })
  })
  y++

  verticalOrder.forEach((vLabel, vIdx) => {
    // 主體排版
    const rowsOfThis = verticalCount[vLabel]
    if (typeof rowsOfThis !== 'number') {
      console.error('❌ verticalCount 沒有定義：', vLabel)
      return layout
    }
    if (!rowsOfThis) {
      throw new Error(`verticalCount 裡找不到 ${vLabel}`)
    }
    for (let rowInBlock = 0; rowInBlock < rowsOfThis; rowInBlock++) {
      let x = 0
      horizontalOrder.forEach((hLabel, hIdx) => {
        if (hIdx > 0) {
          layout.push({ id: `small-aisle-${y}-${hIdx}`, x, y, type: 'small-aisle' })
          x++
        }
        const prefix = rowInBlock === 0 && hIdx === horizontalOrder.length - 1 ? 'entrance' : hLabel
        const num = hLabel === '羊' || hLabel === '馬' ? rowInBlock + 1 : rowsOfThis - rowInBlock
        const id = `${hLabel}${String(num).padStart(2, '0')}`

        layout.push({ id, x, y, type: 'booth' })
        x++
      })

      // 狗、雞、猴...左側
      const numLeft = verticalCount[vLabel] - rowInBlock
      layout.unshift({ id: `${vLabel}${String(numLeft).padStart(2, '0')}`, x: -1, y, type: 'booth' })

      y++
    }

    // 大走道
    y++
  })

  // 倒數第二列 DM/服務台 列
  let xDM = 0
  ['商01', '商02', 'dm', 'aisle', 'service', 'aisle'].forEach(label => {
    layout.push({ id: label, x: xDM++, y, type: label === 'aisle' ? 'small-aisle' : 'facility' })
  })
  y++

  // 最下方白/廁所列
  horizontalOrder.forEach((prefix, idx) => {
    layout.push({ id: prefix, x: idx, y, type: 'facility' })
  })

  return layout
}

