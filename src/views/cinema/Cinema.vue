<template>
  <div class="">
      <Header/>
      <div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
      
			</div>
      <CliList/>
      <TabBar/>
  </div>
</template>

<script type="text/javascript">

import Header from 'components/header'
import TabBar from 'components/tabbar'
import CliList from 'components/cliList'
export default {
    name:"cinema",
    components:{
      Header,
      TabBar,
      CliList
    }
}
</script>

<style scoped>
.cinema_menu{ 
  width: 100%; 
  height: 45px; 
  border-bottom:1px solid #e6e6e6; 
  display: flex; 
  justify-content:space-around; 
  align-items:center; 
  background:white;
  }

</style>