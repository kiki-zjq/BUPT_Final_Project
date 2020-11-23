<template>
    <div class="block">
        <div class='sub-title'>
            {{language=='Chinese'?'个人经历':'EXPERIENCE'}}
        </div>

        <!-- <div class="divider"></div> -->
        <div class="radio" v-if='language=="Chinese"'>
            排序：
            <el-radio-group v-model="reverse">
            <el-radio :label="true">倒序</el-radio>
            <el-radio :label="false">正序</el-radio>
            </el-radio-group>
        </div>

        <div class="radio" v-if='language=="English"'>
            Sort:<span style='margin-left:5px'></span>
            <el-radio-group v-model="reverse">
            <el-radio :label="true">Reverse</el-radio>
            <el-radio :label="false">Positive</el-radio>
            </el-radio-group>
        </div>

        <!---------------------------------------------------------------->

         <el-timeline :reverse="reverse" v-if='language=="Chinese"'>
            <el-timeline-item
            v-for="(activity, index) in this.activities"
            :key="index"
            :timestamp="activity.timestamp"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            placement="top">
            <el-card>
                <h3 class='activity-title'>{{activity.title}}</h3>
                <div v-for='(content,index) in activity.content' :key='index'>
                    <p class='activity-content'>
                        {{content}}
                    </p><br />
                </div>
            </el-card>
            </el-timeline-item>
        </el-timeline>

        <el-timeline :reverse="reverse" v-if='language=="English"'>
            <el-timeline-item
            v-for="(activity, index) in this.activities_e"
            :key="index"
            :timestamp="activity.timestamp"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            placement="top">
            <el-card>
                <h3 class='activity-title'>{{activity.title}}</h3>
                <div v-for='(content,index) in activity.content' :key='index'>
                    <p class='activity-content'>
                        {{content}}
                    </p><br />
                </div>
            </el-card>
            </el-timeline-item>
        </el-timeline>

</div>
</template>

<script>
  export default {
    data() {
      return {
        reverse: false,
        activities:this.activities,
        activities_e:this.activities_e,
      };
    },
    mounted(){
        this.$http.get('../../static/data/experience.json')
        .then((res)=>{
            //console.log(res);
            this.reverse = false;
            this.activities=res.data.contents;
        });
        this.$http.get('../../static/data/experience_english.json')
        .then((res)=>{
            //console.log(res);
            this.reverse = false;
            this.activities_e=res.data.contents;
        });
    },
    computed:{
        language:function(){
            return this.$store.state.language
        }
    }
  };
</script>

<style scoped>
.block{
    box-sizing: border-box;
    text-align:left;
    padding:20px;
}

.radio{
    margin-top:5%;
    margin-bottom: 5%;
    font-family: Microsoft JhengHei;
}
.divider{
        background-color: #FF4F4F;
        height: 4px;
        width: 230px;
        margin-top: -18px;
    }
.block .activity-content{
    font-size:14px;
    line-height:24px;
    margin-bottom:-20px;
}
.sub-title{
        margin-top:2%;
        margin-bottom: 2%;
        padding-left:2em;
        padding-right:2em;
        font-weight: bold;
        font-size:20px;
        width:fit-content;
        background-color:#FAFAFA;
        height:2em;
        line-height:2em;
        border-radius:20px;
    }
</style>