// composables/booth_map2.js
export function generateLayout() {
  const layout = [];
  let y = 0;
  let x = 0; // 宣告 x 變數
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
    { left: '羊', right: 'Q', startRow: 5 },      // 狗20,19列 + 小走道
    { left: '馬', right: 'P', startRow: 10 },      // 狗18,17列 + 小走道
    { left: '蛇', right: 'O', startRow: 15 },      // 狗16,15列 + 小走道
    { left: '龍', right: 'N', startRow: 20 },      // 狗14,13列 + 小走道
    { left: '兔', right: 'M', startRow: 25 },     // 狗12,11列 + 小走道
    { left: '虎', right: 'L', startRow: 30 },     // 狗10,09列 + 小走道
    { left: '牛', right: 'K', startRow: 35 },     // 狗08,07列 + 小走道
    { left: '鼠', right: 'J', startRow: 40 },     // 狗06,05列 + 小走道
    { left: 'Z', right: 'I', startRow: 45 },      // 狗04,03列 + 小走道
    { left: 'Y', right: 'H', startRow: 50 },      // 狗02,01列 + 小走道
    { left: 'X', right: 'G', startRow: 55 },      // 雞32,31列 + 小走道
    { left: 'W', right: 'F', startRow: 60 },      // 雞30,29列 + 小走道
    { left: 'V', right: 'E', startRow: 65 },      // 雞28,27列 + 小走道
    { left: 'U', right: 'D', startRow: 70 },      // 雞26,25列 + 小走道
    { left: 'T', right: 'C', startRow: 75 },      // 雞24,23列 + 小走道
    { left: 'S', right: 'B', startRow: 80 },      // 雞22,21列 + 小走道
    { left: 'R', right: 'A', startRow: 86 }       // 雞20,19列 + 小走道
  ];

  // 第一行：添加廁所設施
  x = 0;
  // 加入牆壁區域
  for (let i = 0; i < 2; i++) {
    layout.push({ id: '', x: x++, y, type: 'wall' });
  }

  // 第一行廁所：6個 block 寬度
  for (let i = 0; i < 6; i++) {
    layout.push({ id: '廁所', x: x++, y, type: 'toilet' });
  }

  // 加入牆壁區域
  for (let i = 0; i < 5; i++) {
    layout.push({ id: '', x: x++, y, type: 'wall' });
  }

  // 第一行更衣室：8個 block 寬度
  for (let i = 0; i < 8; i++) {
    layout.push({ id: '更衣室', x: x++, y, type: 'facility' });
  }

  // 加入牆壁區域
  for (let i = 0; i < 25; i++) {
    layout.push({ id: '', x: x++, y, type: 'wall' });
  }

  // 第一行第二個廁所：6個 block 寬度
  for (let i = 0; i < 6; i++) {
    layout.push({ id: '廁所', x: x++, y, type: 'toilet' });
  }

  // 加入牆壁區域
  for (let i = 0; i < 16; i++) {
    layout.push({ id: '', x: x++, y, type: 'wall' });
  }
  for (let i = 0; i < 6; i++) {
    layout.push({ id: '宅配區', x: x++, y, type: 'facility' });
  }
  // 加入牆壁區域
  for (let i = 0; i < 9; i++) {
    layout.push({ id: '', x: x++, y, type: 'wall' });
  }

  y++; // 進入下一行

  // 處理每個直排區域
  for (const section of verticalSections) {
    const { prefix, count } = section;

    // 如果是第一個區域（狗區），不需要大走道間隔
    // 或者如果是特區（特區和商區相鄰，不需要走道）
    // 但如果是狗區（第一個區域），不要增加間距
    if (y > 0 && prefix !== '商' && prefix !== '狗') {
      y++;
    }

    // 處理該區域的每一列
    // 這裡的 count 是該區域的總列數（例如：狗區20列，雞區32列）
    for (let row = 0; row < count; row++) {
      let x = 0;
      // 計算實際的攤位編號（從高到低）
      // 例如：狗區20列，第一行是狗20，第二行是狗19，以此類推
      const rowNum = count - row;

      // 左側的直向編號（狗01、雞01等）
      layout.push({
        id: `${prefix}${String(rowNum).padStart(2, '0')}`,
        x: x++, y, type: 'booth'
      });

      // 檢查這一行是否需要加入橫排區塊（使用全域行數）
      // 找到當前全域行數對應的橫排區塊
      const zoneForThisRow = horizontalZones.find(zone =>
        globalRow >= zone.startRow && globalRow < zone.startRow + 2
      );



      if (zoneForThisRow) {
        // 狗跟羊的大走道間隔（兩個格子寬）
        x += 1;

        // 計算是該組的第一行還是第二行
        // rowInZone = 0 表示第一行，rowInZone = 1 表示第二行
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

          // 加入大間距分隔左右區域（2個格子寬）
          x += 2; // 跳過2個格子作為大間距

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

          // 加入大間距分隔左右區域（2個格子寬）
          x += 2; // 跳過2個格子作為大間距

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

      } else {
        // 沒有橫排區塊的行，添加空白區域到 x = 81
        while (x < 81) {
          x++;
        }
      }

      // 在每一行的最後加上牆壁（不管是否有橫排區塊）
      // 確保每一行都有牆壁在 x = 81 的位置
      if (x < 81) {
        // 如果 x 還沒到 81，先補足到 81
        while (x < 81) {
          x++;
        }
      }
      const exits_FIRST = [7, 46, 84];
      const exits = [5, 6, 7, 8, 9, 44, 45, 46, 47, 48, 82,83, 84, 85];
      if (exits_FIRST.includes(globalRow)) {
        layout.push({ id: '出入口', x: x++, y, type: 'exit' });
      }
      else if (exits.includes(globalRow)) {
        layout.push({ id: '', x: x++, y, type: 'exit' });
      }
      else {
        // 在 x = 82 的位置加入牆壁
        layout.push({ id: '', x: x++, y, type: 'wall' });
      }
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
  console.log(`當前數量: ${layout.length}`);
  //額外補充
  const wall_list = [21, 54, 96, 89]
  wall_list.forEach(e => {
    layout.push({ id: '', x: 81, y: e, type: 'wall' });
  });
  // 加入底部特殊區域
  // 商01列的特殊處理
  x = 0;
  layout.push({ id: '商01', x: x++, y, type: 'booth' });

  x += 24;
  // DM放置處：3個 block 寬度
  for (let i = 0; i < 5; i++) {
    layout.push({ id: 'DM放置處', x: x++, y, type: 'facility' });
  }

  x += 20;
  for (let i = 0; i < 5; i++) {
    layout.push({ id: '場內服務台', x: x++, y, type: 'facility' });
  }

  // 在商01行的最後加上牆壁
  // if (x >= 85) {  // 降低條件
  //   layout.push({ id: '牆壁', x: x++, y, type: 'wall' });
  // }

  y++;

  // 倒數第二
  x = 0;
  // 加入白色區域
  for (let i = 0; i < 6; i++) {
    layout.push({ id: '', x: x++, y, type: 'wall' });
  }
  for (let i = 0; i < 10; i++) {
    layout.push({ id: '', x: x++, y, type: 'wall' });
  }
  for (let i = 0; i < 8; i++) {
    layout.push({ id: 'I區-再入場入口處', x: x++, y, type: 'exit' });
  }
  for (let i = 0; i < 32; i++) {
    layout.push({ id: '', x: x++, y, type: 'wall' });
  }
  for (let i = 0; i < 8; i++) {
    layout.push({ id: 'J區-社團入場入口處', x: x++, y, type: 'exit' });
  }
  for (let i = 0; i < 19; i++) {
    layout.push({ id: '', x: x++, y, type: 'wall' });
  }

  y++; // 進入最後一行

  // 最底部的特殊區域
  x = 2;

  // 廁所：3個 block 寬度
  for (let i = 0; i < 6; i++) {
    layout.push({ id: '廁所', x: x++, y, type: 'toilet' });
  }
  x = 75;
  for (let i = 0; i < 5; i++) {
    layout.push({ id: '寄物處', x: x++, y, type: 'facility' });
  }

  return layout;
}