<template>
    <div>
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="请输入公司名称或者职位进行搜索">
      </mt-search>
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
</template>
<script>
    export default {
        name: "mainlist",
        data(){
          return{
            value:'',
          }
        },
        methods:{
        },
        watch: {
          "value": function (newVal, oldVal)
          {
            console.log('new: %s, old: %s', newVal, oldVal)
          }
        }
    }
</script>
