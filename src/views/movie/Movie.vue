<template>
  <div id="main">
      <Header title="喵喵影院"/>
          <div id="content">
            <div class="movie_menu">
              <router-link tag="div" to="/movie/city" class="city_name">
                <span>{{$store.state.city.nm}}</span><i class="iconfont icon-lower-triangle"></i>
              </router-link>
              <div class="hot_swtich">
                <router-link tag="div" to="/movie/homePlaying" class="hot_item">正在热映</router-link>
                <router-link tag="div" to="/movie/comingSon" class="hot_item">即将上映</router-link>
              </div>
              <router-link tag="div" to="/movie/search" class="search_entry">
                <i class="iconfont icon-sousuo"></i>
              </router-link>
            </div>
            <keep-alive>
              <router-view/>
          </keep-alive>
          </div>
         
      <TabBar/>
  </div>
</template>

<script type="text/javascript">

import Header from 'components/header'
import TabBar from 'components/tabbar'
import { messageBox } from 'components/alert'

export default {
    name:"movie",
    components:{
      Header,
      TabBar
    },
    mounted(){

      setTimeout(()=>{
          this.axios.get("/api/getLocation").then((res)=>{
          var msg = res.data.msg;
          if (msg === "ok") {
            
           var nm = res.data.data.nm
           var id = res.data.data.id
           console.log(this.$store.state.nm);
           console.log(nm);
           if (this.$store.state.city.nm == nm) {
             return
           }
              messageBox({
                    title:"定位1",
                    content:nm,
                    cancel:"取消",
                    ok:"切换定位",
                    handleOk () {
                      window.localStorage.setItem("nowNm",nm)
                      window.localStorage.setItem("nowId",id)
                      window.location.reload();
                    }
              })
          }
        })
      },3000)
      
      // messageBox({
      //   title:"定位1",
      //   content:"沈阳",
      //   cancel:"取消",
      //   ok:"切换定位",
      //   handleCancel () {
      //     console.log(1)
      //   },
      //   handleOk () {
      //     console.log(2)
      //   }
      // })
    }
}
</script>

<style scoped>
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
</style>
