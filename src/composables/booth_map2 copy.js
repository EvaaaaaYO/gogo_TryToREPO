// composables/booth_map2.js
export function generateLayout() {
  const layout = [];
  let y = 0;
  let globalRow = 0; // 全域行數追蹤

  // 每個直排區塊
  const verticalSections = [
    { prefix: '狗', count: 20 },
    { prefix: '雞', count: 32 },
    { prefix: '猴', count: 34 },
    { prefix: '特', count: 4 },
    { prefix: '商', count: 2 }
  ];

  // 定義17組橫排區塊及其對應的直排行（每組佔兩行，然後加一個小走道行）
  const horizontalZones = [
    { left: '羊', right: 'Q', startRow: 0 },      // 狗20,19列 + 小走道
    { left: '馬', right: 'P', startRow: 3 },      // 狗18,17列 + 小走道
    { left: '蛇', right: 'O', startRow: 6 },      // 狗16,15列 + 小走道
    { left: '龍', right: 'N', startRow: 9 },      // 狗14,13列 + 小走道
    { left: '兔', right: 'M', startRow: 12 },     // 狗12,11列 + 小走道
    { left: '虎', right: 'L', startRow: 15 },     // 狗10,09列 + 小走道
    { left: '牛', right: 'K', startRow: 18 },     // 狗08,07列 + 小走道
    { left: '鼠', right: 'J', startRow: 21 },     // 狗06,05列 + 小走道
    { left: 'Z', right: 'I', startRow: 24 },      // 狗04,03列 + 小走道
    { left: 'Y', right: 'H', startRow: 27 },      // 狗02,01列 + 小走道
    { left: 'X', right: 'G', startRow: 30 },      // 雞32,31列 + 小走道
    { left: 'W', right: 'F', startRow: 33 },      // 雞30,29列 + 小走道
    { left: 'V', right: 'E', startRow: 36 },      // 雞28,27列 + 小走道
    { left: 'U', right: 'D', startRow: 39 },      // 雞26,25列 + 小走道
    { left: 'T', right: 'C', startRow: 42 },      // 雞24,23列 + 小走道
    { left: 'S', right: 'B', startRow: 45 },      // 雞22,21列 + 小走道
    { left: 'R', right: 'A', startRow: 48 }       // 雞20,19列 + 小走道
  ];

  // 處理每個直排區域
  for (const section of verticalSections) {
    const { prefix, count } = section;
    
    // 如果是第一個區域，不需要大走道間隔
    if (y > 0) {
      // 加入大走道間隔（兩個格子寬）
      for (let i = 0; i < 2; i++) {
        layout.push({ id: '大走道', x: i, y, type: 'large-aisle' });
      }
      y++;
    }

    // 處理該區域的每一列
    for (let row = 0; row < count; row++) {
      let x = 0;
      const rowNum = count - row;
      
      // 左側的直向編號
      layout.push({ id: `${prefix}${String(rowNum).padStart(2, '0')}`, x: x++, y, type: 'booth' });

      // 檢查這一行是否需要加入橫排區塊（使用全域行數）
      const zoneForThisRow = horizontalZones.find(zone => 
        globalRow >= zone.startRow && globalRow < zone.startRow + 2
      );
      
      // 檢查這一行是否是小走道行
      const isAisleRow = horizontalZones.some(zone => 
        globalRow === zone.startRow + 2
      );
      
      if (zoneForThisRow) {
        // 加入大走道間隔（兩個格子寬）
        x += 2; // 跳過兩個格子作為大走道間隔

        // 計算是該組的第一行還是第二行
        const rowInZone = globalRow - zoneForThisRow.startRow;
        
        if (rowInZone === 0) {
          // 第一行：高號 (37~72)
          // 左側區域（升序）
          for (let n = 37; n <= 72; n++) {
            layout.push({ 
              id: `${zoneForThisRow.left}${String(n).padStart(2, '0')}`, 
              x: x++, 
              y, 
              type: 'booth' 
            });
            
            // 在特定號碼之間插入小走道間隔
            if (n === 48 || n === 60) {
              x++; // 跳過一個格子作為小走道間隔
            }
          }

          // 加入小走道間隔分隔左右區域
          x++; // 跳過一個格子作為小走道間隔

          // 右側區域（升序）
          for (let n = 37; n <= 72; n++) {
            layout.push({ 
              id: `${zoneForThisRow.right}${String(n).padStart(2, '0')}`, 
              x: x++, 
              y, 
              type: 'booth' 
            });
            
            // 在特定號碼之間插入小走道間隔
            if (n === 48 || n === 60) {
              x++; // 跳過一個格子作為小走道間隔
            }
          }
        } else {
          // 第二行：低號 (36~1)
          // 左側區域（降序）
          for (let n = 36; n >= 1; n--) {
            layout.push({ 
              id: `${zoneForThisRow.left}${String(n).padStart(2, '0')}`, 
              x: x++, 
              y, 
              type: 'booth' 
            });
            
            // 在特定號碼之間插入小走道間隔
            if (n === 25 || n === 13) {
              x++; // 跳過一個格子作為小走道間隔
            }
          }

          // 加入小走道間隔分隔左右區域
          x++; // 跳過一個格子作為小走道間隔

          // 右側區域（降序）
          for (let n = 36; n >= 1; n--) {
            layout.push({ 
              id: `${zoneForThisRow.right}${String(n).padStart(2, '0')}`, 
              x: x++, 
              y, 
              type: 'booth' 
            });
            
            // 在特定號碼之間插入小走道間隔
            if (n === 25 || n === 13) {
              x++; // 跳過一個格子作為小走道間隔
            }
          }
        }

        // 加入大走道間隔（兩個格子寬）
        x += 2; // 跳過兩個格子作為大走道間隔
      } else if (isAisleRow) {
        // 小走道行：整行都是間隔，不產生任何格子
        // 直接跳到下一行，不增加任何攤位
      }
      
      // 加入出入口
      layout.push({ id: '出入口', x: x++, y, type: 'exit' });
      
      y++;
      globalRow++; // 增加全域行數

      // 檢查攤位數量是否超過2800
      if (layout.length > 2800) {
        console.log(`攤位數量超過2800，停止生成。當前數量: ${layout.length}`);
        break;
      }
    }

    // 如果已經超過2800，跳出外層迴圈
    if (layout.length > 2800) {
      break;
    }
  }

  // 加入底部特殊區域
  // 商01列的特殊處理
  let x = 0;
  layout.push({ id: '商01', x: x++, y, type: 'booth' });
  layout.push({ id: '走道', x: x++, y, type: 'aisle' });
  layout.push({ id: 'DM放置處', x: x++, y, type: 'facility' });
  layout.push({ id: '小走道', x: x++, y, type: 'small-aisle' });
  layout.push({ id: '場內服務台', x: x++, y, type: 'facility' });
  layout.push({ id: '小走道', x: x++, y, type: 'small-aisle' });
  y++;

  // 最底部的特殊區域
  x = 0;
  // 加入白色區域和廁所
  for (let i = 0; i < 10; i++) {
    layout.push({ id: '白', x: x++, y, type: 'white' });
  }
  layout.push({ id: '廁所', x: x++, y, type: 'facility' });
  layout.push({ id: '白', x: x++, y, type: 'white' });
  layout.push({ id: '更衣室', x: x++, y, type: 'facility' });
  layout.push({ id: '白', x: x++, y, type: 'white' });
  
  // 繼續加入白色區域直到Q41前
  for (let i = 0; i < 15; i++) {
    layout.push({ id: '白', x: x++, y, type: 'white' });
  }
  layout.push({ id: '廁所', x: x++, y, type: 'facility' });
  layout.push({ id: '白', x: x++, y, type: 'white' });

  return layout;
}