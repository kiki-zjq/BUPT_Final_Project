<template>
    <div >
        <el-dialog title="Instruction" class='inst-block' :visible.sync="instBlock" :before-close="close">
            <div class="ins-example">
            
                <!-- <span style="color:gray;font-weight:bold;font-style:italic">Edit Meta</span> -->
            
                <div v-show="active==0">
                    <img src='./img/edit_meta.png' height="200px"/>
                    <p>By clicking <el-button style="background:gray;color:white;font-weight:bold;border-radius:5px">EDIT META</el-button> button, your cover page will look like the figure above. 
                    And you can input your modification and click <span style="color:green;font-weight:bold;font-style:italic"><i class="el-icon-check"></i></span> button to save your modification.</p> 
                </div>
            

                <div v-show="active==1 && show2 == 0">
                    <img src='./img/add_question.png' height="200px" />
                    <p>By clicking <el-button style="background:burlywood;color:white;font-weight:bold;border-radius:5px">ADD</el-button> button, you can add new question and marking criteria to this paper.
                   </p> 
                    <p>If your question add successfully, it will look like <span @click="show2 = 1" style="cursor:pointer;color:burlywood;font-weight:bold;font-style:italic">this</span>!</p>
                </div>

                <div v-show="active==1 && show2 == 1">
                    <img src='./img/add_success.png' height="200px" />
                    <p><span @click="show2 = 0" style="cursor:pointer;color:burlywood;font-weight:bold;font-style:italic">Go back</span> !</p>
                </div>

                <div v-show="active==2">
                    <img src='./img/add_team.png' height="200px" />
                    <p>By clicking <el-button style="background:pink;color:white;font-weight:bold;border-radius:5px">ADD TEAM</el-button> button, you can invite your partner to work together with you.</p>
                </div>

                <div v-show="active==3">
                    <img src='./img/comment.png' height="200px" />
                    <p>By clicking <el-button type="warning" class="warning-btn" size="small" icon="el-icon-chat-square"  circle></el-button> in the question block,
                    you can add comment for each question. There are 3 different types of comment and your partner can see the comment you leave.</p>
                </div>

                <div v-show="active==4">
                     <img src='./img/my_bank.png' height="200px" />
                    <p>By clicking <el-button style="background:darksalmon;color:white;font-weight:bold;border-radius:5px">MY BANK</el-button> button, 
                    you can open your own quetsion bank. You can add the question in this bank to this paper directly.</p>
                
                </div>

                <div v-show="active==5">
                     <img src='./img/download.png' height="200px" />
                    <p>By clicking <el-button style="background:#F56C6C;color:white;font-weight:bold;border-radius:5px">DOWNLOAD</el-button> button, 
                    you can download your paper. You can select the format of the output and whether the result contains the marking criteria.</p>
                
                </div>
                
                <div v-show="active==6">
                    <img src='./img/start.png' width="80%" />
                </div>
            </div>



            <el-steps  :active="active" finish-status="success">
                <el-step title="Edit Meta"></el-step>
                <el-step title="Add Question"></el-step>
                <el-step title="Add Team"></el-step>
                <el-step title="Add Comment"></el-step>
                <el-step title="Question Bank"></el-step>
                <el-step title="Download"></el-step>
                <el-step title="!"></el-step>
            </el-steps>
            
            <div slot="footer" class="dialog-footer">
                <el-button @click ="back()" :disabled="ablePrev">Previous</el-button>
                <el-button @click ="next()" :disabled="ableNext">Next</el-button>
                <el-button @click="close()">Close</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active:0,
            show2:0,

        }
    },
    props:{
        instBlock:false,
    },
    computed:{
        ableNext:function(){
            return this.active == 6;
        },
        ablePrev:function(){
            return this.active == 0;
        }
    },
    methods:{
        close(){
            this.active = 0;
            this.show2 = 0;
            this.$emit('cancel')
        },
        next(){
            this.active++;
        },
        back(){
            this.active--;
        }
    }
}
</script>


<style scoped>
.inst-block{
    text-align:left;
}
.ins-example{
    min-height:350px;
    width:100%;
    font-size:16px;
    line-height: 24px;
}

.ins-example div{
    text-align: center;
    margin:auto;
}
.ins-example p{
    text-align: left;
}
</style>

