import { ref } from 'vue'
const cpMap={
    545:['玖伊','崑伊'],
    714:['焰圓','紅藍'],
    747:['藤千','千藤','葉流圭','圭葉流','圭圭'],
    748:['凪玲','玲凪','我現在想不到'],

}
const cpOptions=ref([])
// 存已經選中的cp
const selectedCPs=ref([])

export function useCpOptions(){
    function getCpforCat(selectCatID){
        // 根據你選取的分類 ID（selectCatID），從 CP 對應表 cpMap 中找出所有對應的 CP 選項，並合併成一個陣列。
        const combined=selectCatID.flatMap(catId=>
            cpMap[catId]||[])
            // 可選的cp列表
        cpOptions.value=[...new Set(combined)]
        // 已選中的，預設全部勾選
        selectedCPs.value=[...new Set(combined)]
        
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
    
    
    return{cpOptions, selectedCPs, getCpforCat, shouldExcludeAuthor}
}