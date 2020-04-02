<template>

<div >
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>
    <div>11111222222222222222222</div>

    <div class="city_body">
         <Loading v-if="isLoading"/>
        <div v-else class="city_list">
            <Scroller ref="city_list">
            <div>
                <div class="city_hot">
                    <h2>热门城市</h2>
                    <ul class="clearfix">
                        <li v-for="item in hotList" :key="item.id" @tap="handleToCity(item.nm,item.id)">{{item.nm}}</li>
                    </ul>
                </div>
                <div class="city_sort" ref="city_sort">
                    <div v-for="(item ,i) in cityList" :key="i">
                        <h2>{{item.index}}</h2>
                        <ul>
                            <li v-for="items in cityList[i].list" :key="items.id" @tap="handleToCity(items.nm,items.id)">{{items.nm}}</li>
                        </ul>
                    </div>	
                </div>
            </div>
            </Scroller>
        </div>
        <div class="city_index">
            <ul>
                <li v-for="(item,index) in cityList" :key="item.id" @touchstart="handleToIndex(index)">
                    {{item.index}}
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
name:"City",
  data() {
    return {
        cityList:[],
        hotList:[],
        isLoading:true
    }
  },
  mounted(){

      var cityList = window.localStorage.getItem('cityList');
      var hotList = window.localStorage.getItem('hotList');
        if (cityList && hotList) {
            this.cityList = JSON.parse(cityList);
            this.hotList = JSON.parse(hotList);
            this.isLoading = false;
        }else{
        this.axios.get('/api/cityList').then(res=>{
          console.log(res)
          if (res.data.msg === 'ok') {
              var cites = res.data.data.cities;
              this.isLoading = false;
            //   {index:"A",list:[{nm:"阿成"，id:1}]}
              var {cityList,hotList} = this.formateCityList(cites)
              this.cityList = cityList;
              this.hotList = hotList;
              window.localStorage.setItem('cityList',JSON.stringify(cityList))
               window.localStorage.setItem('hotList',JSON.stringify(hotList))
          }
      })
        }
      
  },
  methods:{
      formateCityList(cites){
          var cityList = [];
          var hotList = [];
        for (let i = 0; i < cites.length; i++) {
            if (cites[i].isHot == 1){
                hotList.push(cites[i])
            }
            
        }
          for (let i = 0; i < cites.length; i++) {
              var firstLetter =cites[i].py.substring(0,1).toUpperCase();
              if(toCom(firstLetter)){
                   cityList.push({index:firstLetter,list:[{nm:cites[i].nm,id:cites[i].ed}]})
              }else{
                  for (let j = 0; j < cityList.length; j++) {
                      if (firstLetter === cityList[j].index) {
                       cityList[j].list.push({nm:cites[i].nm,id:cites[i].ed})
                      }
                  }
              }
          }
            cityList.sort((n1,n2)=>{
                if (n1.index>n2.index) {
                    return 1;
                }else if (n1.index<n2.index) {
                    return -1;
                }else{
                    return 0;
                }
            })
          function toCom(firstLetter){
            for (let i = 0; i < cityList.length; i++) {
                if (firstLetter === cityList[i].index) {
                    return false
                }
            }
           return true
          }
          return {
              cityList,hotList
          }
      },
      handleToIndex(i){
              var h2 = this.$refs.city_sort.getElementsByTagName("h2");
            //   this.$refs.city_sort.parentNode.scrollTop = h2[i].offsetTop;
            this.$refs.city_list.toScrollTop(-h2[i].offsetTop)
      },
      handleToCity(nm,id){
          this.$store.commit('city/CITY_INFO',{nm,id});
          window.localStorage.setItem('nowNm',nm)
           window.localStorage.setItem('nowId',id)
          this.$router.push('/movie/homePlaying')
      }
  }
}
</script>

<style scoped>
.city_body{ margin-top: 45px;display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>