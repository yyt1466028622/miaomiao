<template>
  <div class="">
      <Header title="我的喵喵"/>
      <Login/>
      <TabBar/>
  </div>
</template>

<script type="text/javascript">
import Header from 'components/header'
import TabBar from 'components/tabbar'
import Login from "components/login"
export default {
    name:"mine",
    components:{
      TabBar,
      Header,
      Login
    }
}
</script>

<style scoped>
</style>