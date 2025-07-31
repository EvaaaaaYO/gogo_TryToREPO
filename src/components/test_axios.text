<template>
    <div >
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>姓名</th>
                    <th>分類</th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="t in table_g" :key="t.id">
                <td>{{ t.id }}</td>
                <td>{{ t.name }}</td>
                <td>{{t.yn}}</td></tr>
            </tbody>
        </table>

    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() { return {table_g:[]} },
    methods: {

        test() {
            axios.get('http://localhost:5263/api/booth/tt')
                .then(res => {console.log(res.data);
                this.table_g = res.data;}
            )
                .catch(err => console.error(err));

        }

    },mounted() {
  this.test();
}
}
</script>