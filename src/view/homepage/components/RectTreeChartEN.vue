<template>
  <div :id="id" :class="className" :style="{ height:height,width:width }" />
</template>


<script>
import echarts from 'echarts'
import resize from '@/mixins/resize'
import setup from '@/echarts/setup'
require('echarts/theme/macarons') // echarts theme

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "CirclePieChart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "500px"
    },
    data: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id),'setup');
      const option = {
            series: [{
                type: 'treemap',
                leafDepth: 1,
                visibleMin: 300,
                roam:'false',
                label:{
                  normal:{
                      fontSize:16,
                  }  
                },
                data: [
                    {
                        name:'Front-End',
                        value:'1500',
                        children:[
                            {
                                name:'HTML + CSS + JS',
                                value:'400',
                                children:[
                                   
                                            {
                                                name:'HTML',
                                                value:'150',
                                            },
                                            {
                                                name:'HTML5',
                                                value:'120',
                                            },
                                      
                                    
                                            {
                                                name:'CSS',
                                                value:'120',
                                            },
                                            {
                                                name:'CSS3',
                                                value:'120',
                                            },
                                      
                                    
                                            {
                                                name:'JavaScript',
                                                value:'150',
                                            },
                                            {
                                                name:'ES6',
                                                value:'120',
                                            },
                                            {
                                                name:'TypeScript',
                                                value:'90',
                                            }
                                        
                                    
                                ],
                            },
                           
                            {
                                name:'jQuery',
                                value:'300',
                            },
                            {
                                name:'Vue',
                                value:'700',
                                children:[
                                    {
                                        name:'Vue',
                                        value:'250',
                                    },
                                    {
                                        name:'Vuex',
                                        value:'200',
                                    },
                                    {
                                        name:'Vue-router',
                                        value:'200'
                                    },
                                    {
                                        name:'Element-UI',
                                        value:'100',
                                    }
                                ]
                                
                            },
                            {
                                name:'React',
                                value:'400',
                                children:[
                                    {
                                        name:'React',
                                        value:'400',
                                    },
                                    {
                                        name:'Redux',
                                        value:'300',
                                    }
                                ]
                            },
                            {
                                name:'Echarts',
                                value:'300',
                            }

                        ]

                    },
                    //--------------------
                    {
                        name:'Back-End',
                        value:'1000',
                        children:[
                            {
                                name:'Java',
                                value:'500'
                            },
                            {
                                name:'Python',
                                value:'600',
                                children:[
                                    {
                                        name:'NumPy',
                                        value:'100',
                                    },
                                    {
                                        name:'python crawl',
                                        value:'300',
                                    },
                                    {
                                        name:'Pandas',
                                        value:'100',
                                    }

                                ],

                            },
                            {
                                name:'Postman',
                                value:'400'    
                            },
                            {
                                name:'Node.js',
                                value:'600',
                                children:[
                                    {
                                        name:'express',
                                        value:'100',
                                    },
                                    {
                                        name:'koa',
                                        value:'75',
                                    },
                                    {
                                        name:'next.js',
                                        value:'75',
                                    }
                                ]
                            },
                        ]
                    },
                    //--------------------
                    {
                        name:'Database',
                        value:'1000',
                        children:[
                            {
                                name:'Relational Database',
                                value:'600',
                                children:[
                                    {
                                        name:'MySQL',
                                        value:'600',
                                    }
                                ]
                            },
                            {
                                name:'Non-relational databases',
                                value:'600',
                                children:[
                                    {
                                        name:'MongoDB',
                                        value:'600',
                                    }
                                ]
                            },
                            {
                                name:'Elastic Search',
                                value:'600',
                            }
                        ]
                    },
                    //-------------------
                    {
                        name:'Other',
                        value:'1000',
                        children:[
                            {
                                name:'Git',
                                value:'400'
                            },
                            {
                                name:'Machine Learning',
                                value:'400'
                            },
                            {
                                name:'Linux',
                                value:'300'
                            },
                            {
                                name:'R',
                                value:'300'
                            },
                            {
                                name:'Matlab',
                                value:'400'
                            }
                        ]
                    }

                ],

                    levels: [
                        {   
                        //color:['#FF4F4F', '#EFBB36','#39A7F5','#FC58C8'],
                            color:['#1e2022', '#52616b','#929aab','#c9d6df'],
                            itemStyle: {
                                borderColor: 'white',
                                borderWidth: 4,
                                gapWidth: 4
                            }
                        },
                        {
                            colorSaturation: [0.75, 0.5],
                            itemStyle: {
                                //borderColorSaturation: 0.9,
                                borderColor:'white',
                                gapWidth: 2,
                                borderWidth: 4
                            }
                        },
                        {
                            colorSaturation: [0.75, 0.5],
                            itemStyle: {
                                //borderColorSaturation: 0.9,
                                borderColor:'white',
                                gapWidth: 1,
                                borderWidth: 4
                            }
                        },
                        {
                            colorSaturation: [0.75, 0.5],
                            itemStyle: {
                                //borderColorSaturation: 0.9,
                                borderColor:'white',
                                gapWidth: 1,
                                borderWidth: 4
                            }
                        }
                    ]



            }]
        };
  
      //option.series[0].data[1].name='12312312';
      //在这一段地方书写东西来改变上面data里的值。
      
      this.chart.setOption(option);
      this.chart.on('click',function(param){
          //console.log(param);
      })
    },
    
  }
};
</script>
<style scoped>
.chartsClass {
  padding-left: 1.2rem;
}
</style>