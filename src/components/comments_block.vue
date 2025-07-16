<template>
  <div>


    <div class="card">
      <div class="card-header">
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addC">
          <p>暱稱<input v-model="c_name" type="text" />
          </p>
          <p>參加展覽/場次
            <select v-model="exhibition">
              <option disabled value="">請選擇</option>
            

            <option v-for="exh in exh_list" :key="exh.ex_id" :value="ex_name">{{ exh.ex_name }} </option>
</select>

            <!-- <BookSelectOther v-model="Book.award" :options="typeSet('award')"
                                        placeholderStr="請輸入展覽或場次" /> -->
          </p>
          <p>留言
            <textarea v-model="c_comment" type="text" required />
          </p>
          你的身分
          <label>
            <input type="radio" required value="visitor" v-model="c_type" name="rbgType">逛展人
          </label>
          <label>
            <input type="radio" required value="owner" v-model="c_type" name="rbgType">攤主
          </label>
          <!-- 星星評分 -->
          <div class="rating">
            <span v-for="star in 5" :key="star" @click="setRating(star)">
              <i class="fa-star" :class="star <= c_rating ? 'fa-solid' : 'fa-regular'"></i>
            </span>
          </div>
          <p>
            <label>
              <input type="radio" value="argee" required>看過並同意我們的
              <a href="#" @click.prevent="showRules = true">《社群守則》</a>

            </label>
          </p>
           <!-- Modal 彈窗 -->
  <snsRuleModal v-if="showRules" @close="showRules = false" />
          <button class="btn" type="submit">送出</button>
        </form>
      </div>
    </div>

  </div>

</template>
<script setup>
import axios from 'axios'
import { ref,onMounted } from 'vue'
import snsRuleModal from './snsRuleModal.vue'
// v-model列
const c_name = ref('')
const c_comment = ref('')
const c_type = ref('')
const c_rating = ref(0)
const exhibition = ref('')
// 展覽清單
const exh_list=ref([])

// 同意守則
const showRules = ref(false)
// 評星級
function setRating(star) {
  c_rating.value = star
}
function addC() {
  if (c_name.value === '') {
    c_name.value = '匿名'
  }
  // axios...我api還沒設計
  //    按下送出後，送到api後清空
  c_name.value = ''
  c_comment.value = ''
  c_type.value = ''

}
//抓展覽清單的api 網址:http://localhost:5263/api/booth/exhibitions
function get_exh_list(){
  let url='http://localhost:5263/'
  url+='api/booth/exhibitions'
axios.get(url).then(res=>{exh_list.value=res.data;}).catch(err => console.error(err));
}
onMounted(()=>{get_exh_list()})
</script>
<style scoped>
.card {
  margin: 30px auto;
}

input {
  margin-left: 33px;
  border-radius: 5px;
}

textarea {
  width: 100%;
  height: 150px;
  border-radius: 10px;
}

select {
  color: #90A8C3;
  margin-left: 33px;
}

label a{margin-left: 5px;
text-decoration: none;
}
</style>