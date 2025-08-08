import { ref } from 'vue'
const cpMap = {
    423: ['迷宮飯cp：','迷宮飯全員向', '奇爾查克受', '萊歐斯'],
    545: ['NU_cp：','NU全員', '玖伊', '啖伊', '崑伊',
        '奧伊',
        '八伊', '布伊',
        '伊艾', '崑玖', '崑玖啖', '啖歛奧', '托帕',
        '崑西', '玖球', '玖夜', '伊得', '艾德蒙特',
        '奧利文', '啖天', '歛',
        'nu御三家', '小動物們', '玖伊+崑伊',
        '伊奧＋崑奧＋崑伊Ｘ奧', '崑玖伊+托帕+玖球'],
    // 714:['焰圓','紅藍'],
    // 0:['要先選好作品再選CP','小心不要白點了','我想不到還有什麼了(悲)'],
    // 1:['怎麼可能會有什夢的cp','這只是範例而已ㄟ','想要其他作品請貼給我攤位資料或吃土單，謝謝'],

    747: ['忘八cp：','忘八一般向', '藤千',
        '千藤', '卷千', '藤山', '圭圭', '葉流圭', '圭葉流', '卷桐','桐卷'],
    748: ['凪玲', '玲凪', '我現在想不到'],
    262: ['忍亂cp：',
        // '忍亂全員向',
        '利＆土', '利土井', '利土♀+♂', '利小松', '小松田', '利吉',
        '土井', '天鬼', '天鬼+土井+亂霧新', '新兵衛',


        '四年生中心', '四い', '瀧夜叉丸', '綾瀧♀',
        '五年生', '五い', '五ろ', '五ろ-魚英雄',
        '久久知', '三郎', '雙忍', '勘右衛門', '清右衛門',
        '八左衛門', '鉢尾',

        '六年生', '六い', '六ろ', '六は', '舊六は', '留三郎',
        '文仙', '仙文', 'こへ長♀', '伊食滿', '留伊',
        '保健委員會', '體育委員會', '上級生', '綾仙', '久久鷹', '文三木', '櫻若',
        '小平瀧(こへ滝)', '七松小平太+平滝夜叉丸', '雜渡昆奈門',
        '雜渡昆奈門x諸泉尊奈門', '雜伊', '雜利',
        '雜渡+伏木藏', '雜渡+伊作+伏木藏'

    ]
}
const cpOptions = ref([])
// 存已經選中的cp
const selectedCPs = ref([])

export function useCpOptions() {
    function getCpforCat(selectCatID) {
        // 根據你選取的分類 ID（selectCatID），從 CP 對應表 cpMap 中找出所有對應的 CP 選項，並合併成一個陣列。
        const combined = selectCatID.flatMap(catId =>
            cpMap[catId] || [])

        //   優化只選  
        const newCpList = [...new Set(combined)]

        // 只加入新 CP 不清空已選
        const stillValid = selectedCPs.value.filter(cp => newCpList.includes(cp))
        selectedCPs.value = [...stillValid]

        cpOptions.value = newCpList
        // // 可選的cp列表
        // cpOptions.value = [...new Set(combined)]
        // // 已選中的，預設全部勾選
        // selectedCPs.value = [...new Set(combined)]

    }

    // 檢查作者是否應該被排除（變白色）
    function shouldExcludeAuthor(author, selectedCPs, selectedCategories) {
        // 如果當前沒有CP選項，就不應該排除
        if (selectedCPs.length === 0) {
            return false
        }

        // 快速檢查：如果作者沒有useCpOptions屬性或為空陣列，直接返回false
        if (!author.useCpOptions || !Array.isArray(author.useCpOptions) || author.useCpOptions.length === 0) {
            return false
        }

        // 檢查作者的所有CP是否都被取消勾選
        const authorCPs = author.useCpOptions
        const hasSelectedCP = authorCPs.some(cp => selectedCPs.includes(cp))

        // 如果作者有任何一個CP被選中，就不應該被排除
        if (hasSelectedCP) {
            return false
        }

        // 如果作者沒有任何CP被選中，檢查作者是否只屬於當前分類
        // 找出作者屬於哪些已選分類

        // const authorSelectedCategories = author.categories.filter(cat => selectedCategories.includes(cat))
        const authorSelectedCategories = (author.categories || []).filter(cat => selectedCategories.includes(cat))

        // 如果作者不屬於任何已選分類，不應該被排除（保持原色）
        if (authorSelectedCategories.length === 0) {
            return false
        }

        // 高效能優化：使用 Set 來加速查找
        const selectedCPSet = new Set(selectedCPs)

        // 快速檢查：如果作者有任何被選中的CP，就不應該被排除
        for (const cp of authorCPs) {
            if (selectedCPSet.has(cp)) {
                return false
            }
        }

        // 檢查作者是否應該被排除
        // 遍歷作者所屬的所有已選分類
        for (const category of authorSelectedCategories) {
            const categoryCPs = cpMap[category] || []

            // 如果該分類有CP要求
            if (categoryCPs.length > 0) {
                // 檢查作者的CP是否與該分類的CP有交集
                for (const cp of authorCPs) {
                    if (categoryCPs.includes(cp)) {
                        // 調試：顯示排除邏輯
                        console.log('排除作者:', author.id, {
                            category,
                            categoryCPs,
                            authorCPs,
                            selectedCPs
                        })
                        return true
                    }
                }
            }
        }

        // 如果所有分類都檢查完畢，作者不應該被排除
        return false
    }


    return { cpOptions, selectedCPs, getCpforCat, shouldExcludeAuthor }
}