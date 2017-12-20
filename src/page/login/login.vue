<template>
	<div class="backImgcss">
		<h1>{{title}}</h1>
		<mt-field label="账号" class ="filedCss" placeholder="请输入账号" type="text" v-model="email"></mt-field>
		<mt-field label="密码" class ="filedCss" placeholder="请输入密码" type="password" v-model="kouling"></mt-field>
    <mt-button class="buttionCss" type="primary" v-on:click="submit">登录</mt-button>
	</div>
</template>

<script>
	export default{
		name:'login',
		data(){
        return{
          title:'智联招聘',
          email:'',
          kouling:''
        }
		},
    methods: {
		  submit:function () {
		    var _this = this;
		    if(_this.email != '' && _this.kouling != ''){
          this.$router.push({path: '/mainList'})
        }else{
            _this.$messagebox('登陆失败', '账号或密码不能为空！');
            _this.main='';
            _this.kouling=''
        }
      }
    }
	}
</script>
<style>
  h1{
    font-family: cursive;
    font-size: 38px;
    color: darkorange;
  }
  .backImgcss{
    background-image: url(../../assets/Lighthouse.jpg);
    background-repeat: no-repeat;
    padding-top: 100px;
    height: -webkit-fill-available;
  }
  .filedCss{
    background: transparent;
  }
  .buttionCss{
    margin-top: 40px;
    background-color: forestgreen;
    width: 150px;
  }
</style>
