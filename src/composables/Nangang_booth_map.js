// composables/Nangang_booth_map.js
export function generateLayout() {
  const layout = []

  // 定義直排順序（從上到下）
  const verticalSections = [
    { prefix: '狗', count: 20 },
    { prefix: '雞', count: 32 },
    { prefix: '猴', count: 34 },
    { prefix: '特', count: 4 },
    { prefix: '商', count: 2 }
  ]

  // 定義橫排區域（從左到右）
  const horizontalZones = [
    { left: '羊', right: 'Q' },
    { left: '馬', right: 'P' },
    { left: '蛇', right: 'O' },
    { left: '龍', right: 'N' },
    { left: '兔', right: 'M' },
    { left: '虎', right: 'L' },
    { left: '牛', right: 'K' },
    { left: '鼠', right: 'J' },
    { left: 'Z', right: 'I' },
    { left: 'Y', right: 'H' },
    { left: 'X', right: 'G' },
    { left: 'W', right: 'F' },
    { left: 'V', right: 'E' },
    { left: 'U', right: 'D' },
    { left: 'T', right: 'C' },
    { left: 'S', right: 'B' },
    { left: 'R', right: 'A' }
  ]

  let y = 0

  // 處理每個直排區域
  for (const section of verticalSections) {
    const { prefix, count } = section
    
    // 如果是第一個區域，不需要大走道間隔
    if (y > 0) {
      // 加入大走道間隔（兩個格子寬）
      for (let i = 0; i < 2; i++) {
        layout.push({ id: '大走道', x: i, y, type: 'large-aisle' })
      }
      y++
    }

    // 處理該區域的每一列
    for (let row = 0; row < count; row++) {
      let x = 0
      
      // 左側的直向編號
      const verticalId = `${prefix}${String(count - row).padStart(2, '0')}`
      layout.push({ id: verticalId, x: x++, y, type: 'booth' })

      // 處理每個橫排區域
      for (const zone of horizontalZones) {
        const { left, right } = zone
        
        // 加入大走道（兩個格子寬）
        layout.push({ id: '大走道', x: x++, y, type: 'large-aisle' })
        layout.push({ id: '大走道', x: x++, y, type: 'large-aisle' })
        
        // 處理左側區域（降序 72-01）
        for (let i = 72; i >= 1; i--) {
          layout.push({ 
            id: `${left}${String(i).padStart(2, '0')}`, 
            x: x++, 
            y, 
            type: 'booth' 
          })
        }
        
        // 加入小走道分隔左右區域
        layout.push({ id: '小走道', x: x++, y, type: 'small-aisle' })
        
        // 處理右側區域（升序 01-72）
        for (let i = 1; i <= 72; i++) {
          layout.push({ 
            id: `${right}${String(i).padStart(2, '0')}`, 
            x: x++, 
            y, 
            type: 'booth' 
          })
        }
        
        // 加入大走道（兩個格子寬）
        layout.push({ id: '大走道', x: x++, y, type: 'large-aisle' })
        layout.push({ id: '大走道', x: x++, y, type: 'large-aisle' })
      }
      
      // 加入出入口
      layout.push({ id: '出入口', x: x++, y, type: 'exit' })
      
      y++
    }
  }

  // 加入底部特殊區域
  // 商01列的特殊處理
  let x = 0
  layout.push({ id: '商01', x: x++, y, type: 'booth' })
  layout.push({ id: '走道', x: x++, y, type: 'aisle' })
  layout.push({ id: 'DM放置處', x: x++, y, type: 'facility' })
  layout.push({ id: '小走道', x: x++, y, type: 'small-aisle' })
  layout.push({ id: '場內服務台', x: x++, y, type: 'facility' })
  layout.push({ id: '小走道', x: x++, y, type: 'small-aisle' })
  y++

  // 最底部的特殊區域
  x = 0
  // 加入白色區域和廁所
  for (let i = 0; i < 10; i++) {
    layout.push({ id: '白', x: x++, y, type: 'white' })
  }
  layout.push({ id: '廁所', x: x++, y, type: 'facility' })
  layout.push({ id: '白', x: x++, y, type: 'white' })
  layout.push({ id: '更衣室', x: x++, y, type: 'facility' })
  layout.push({ id: '白', x: x++, y, type: 'white' })
  
  // 繼續加入白色區域直到Q41前
  for (let i = 0; i < 15; i++) {
    layout.push({ id: '白', x: x++, y, type: 'white' })
  }
  layout.push({ id: '廁所', x: x++, y, type: 'facility' })
  layout.push({ id: '白', x: x++, y, type: 'white' })

  return layout
} 