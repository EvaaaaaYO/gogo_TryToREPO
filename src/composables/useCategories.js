// useCategories.js
import { ref } from 'vue'

const categories = ref([])

export function useCategories() {
    // 這裡可加載取 API 或靜態資料
    // 寫死700多筆資料
    function loadCategories() {
        // 載入分類資料
        categories.value = [

            {
                "id": 1,
                "name": "哆啦什夢"
                // 原創
            }, 
            {
                "id": 0,
                "name": "蠟筆小心"
                // 原創
            }, 
            // {"id": 545,
            //     "name": "新世界狂歡"}, 
            //     {"id": 714,
            //     "name": "魔法少女小圓"},
            {
                "id": 747,
                "name": "失憶投捕"
            }
            // ,{
            //     "id": 748,
            //     "name": "藍色監獄 blue lock"
            // }
        ]
    }

    /*api載入
async function loadCategories() {
 const res = await fetch('/api/categories')
 categories.value = await res.json()
}
    */
    return {
        categories,
        loadCategories

    }
}
