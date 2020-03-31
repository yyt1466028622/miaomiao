<template>
  <div class="map">
    <div id="chart" style="width:600px;height:600px"></div>
  </div>
</template>

<script type="text/javascript">
    import echarts from 'echarts'//引入echarts
    import 'echarts/map/js/china'//引入中国地图
    import jsonp from 'jsonp'

    const option = {
        title:{//标题
            text:'vue实现疫情地图',
            x:'center',   //居中
            textStyle:{   //标题 样式
                color:'#9c0505'
            }
        },
        tooltip:{
            trigger:'item',     //类型
            //地图：{a}(系列名称)，{b}(区域名称)，{c}(合并数值)，{d}(无)
            formatter:'地区：{b}<br/>确诊：{c}'
        },
        series:[//数据
            {
                type:'map',//图表的类型
                map:'china',
                data:[
                    {name:'北京',value:2000},
                    {name:'湖北',value:6000},
                    {name:'湖南',value:6000},
                    {name:'西藏',value:20000},
                    {name:'云南',value:50000},
                    {name:'广东',value:90000},
                    {name:'上海',value:8000},
                    {name:'四川',value:2000},
                    {name:'内蒙古',value:6000},
                    {name:'新疆',value:30000},
                ],
                label:{ //图形上的文本标签，可用于说明图形的一些数据信息
                show:true,
                color:'#fff',
                fontSize:12
                },
                zoom:1.3,//当前视角的缩放比例
                itemStyle:{
                // 地图区域的多边形 图形样式。
                     borderColor : "#27ae60"
                },
                emphasis:{ //高亮状态下的设置
                    label:{ //图形上的文本标签，可用于说明图形的一些数据信息
                        color:'#fff',
                        fontSize:10
                    },
                    itemStyle:{
                        areaColor:"#8e44ad"
                    }
                }
            }, 
        ],
        visualMap: {  //视觉地图
            // min: 800,
            // max: 50000,
            // text: ['High', 'Low'],
            // realtime: true, //拖拽时实时更新
            // calculable: true,//是否显示拖拽的手柄
            // inRange: {
            //     color: ['lightskyblue', 'yellow', 'orangered']
            // }
            type:'piecewise',//分段形
            show:true,
            pieces: [
                {min: 10000}, // 不指定 max，表示 max 为无限大（Infinity）。
                {min: 1000, max: 9999},
                {min: 100, max: 999},
                {min: 10, max: 99},
                {min: 1, max: 9},
                {value: 0}     // 不指定 min，表示 min 为无限大（-Infinity）。
            ],
            inRange: {
                color: ['#fff', '#f00', '#660208']
            },
            itemWidth:20,
            itemHeight:20
        },
    };
    export default {
    name:"Map",
    data() {
        return {
            myChart:''
        }
    },
    mounted(){
        this.getData();
        this.myChart = echarts.init(document.getElementById('chart'));
        // // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);
    },
    methods:{
        getData(){
            // jsonp('url',function(){})
            jsonp('http://interface.sina.cn/news/wap/fymap2020_data.d.json?=1580892522427',(err,data)=>{
                //console.log(data.data.list)
                var lists = data.data.list.map(item=>{return {name:item.name,value:item.value}})
                console.log(lists)
                option.series[0].data = lists;
                // 使用刚指定的配置项和数据显示图表。
                this.myChart.setOption(option);
            })
        }
    },
    components: {

    }
    }
</script>

<style scoped>
</style>
