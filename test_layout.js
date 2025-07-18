import { generateLayout } from './src/composables/booth_map2.js';

const layout = generateLayout();
console.log('總攤位數:', layout.length);

// 檢查特攤位
const specialBooths = layout.filter(item => item.id.startsWith('特'));
console.log(`特攤位數量: ${specialBooths.length}`);
console.log('特攤位:', specialBooths.map(item => item.id));

// 檢查商攤位
const businessBooths = layout.filter(item => item.id.startsWith('商'));
console.log(`商攤位數量: ${businessBooths.length}`);
console.log('商攤位:', businessBooths.map(item => item.id));

// 檢查狗攤位
const dogBooths = layout.filter(item => item.id.startsWith('狗'));
console.log(`狗攤位數量: ${dogBooths.length}`);
console.log('狗攤位:', dogBooths.map(item => item.id));

// 檢查雞攤位
const chickenBooths = layout.filter(item => item.id.startsWith('雞'));
console.log(`雞攤位數量: ${chickenBooths.length}`);
console.log('雞攤位:', chickenBooths.map(item => item.id).slice(0, 10));

// 檢查猴攤位
const monkeyBooths = layout.filter(item => item.id.startsWith('猴'));
console.log(`猴攤位數量: ${monkeyBooths.length}`);
console.log('猴攤位:', monkeyBooths.map(item => item.id).slice(0, 10)); 