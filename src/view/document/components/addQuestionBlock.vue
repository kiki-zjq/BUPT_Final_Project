<template>
<div>
    <el-dialog title="Add Question" :visible.sync="addBlock" :before-close="cancel">
            <el-form label-width="100px">
                <el-form-item label="Question" >
                    <el-input type="textarea"  :autosize="{ minRows: 2, maxRows: 6}" v-model="title" resize="none" clearable></el-input>
                </el-form-item>
                <el-form-item label="Total Marks" >
                    <el-col :span="2">
                     <el-input v-model="total" 
                                onkeyup="this.value=this.value.replace(/[^\d]/g,'') " 
                                onafterpaste="this.value=this.value.replace(/[^\d]/g,'') "
                    ></el-input>
                    </el-col>
                    <el-col :span="5">
                        <span style="font-weight:bold;margin-left:1.5em;"> Marks </span>
                    </el-col>
                </el-form-item>
                <el-divider></el-divider>
                <div v-for="(sub,i) in subquestion" :key="i">
                    <el-form-item label="Subquestion" >
                        <el-input type="textarea"  v-model="sub.question" :autosize="{ minRows: 2, maxRows: 6}"  resize="none" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="Marks" >
                        <el-col :span="2">
                        <el-input  v-model="sub.grade"
                                    onkeyup="this.value=this.value.replace(/[^\d]/g,'') " 
                                    onafterpaste="this.value=this.value.replace(/[^\d]/g,'') "
                        ></el-input>
                        </el-col>
                        <el-col :span="5">
                            <span style="font-weight:bold;margin-left:1.5em;"> Marks </span>
                        </el-col>
                        <el-col :span="2" :offset="12"><el-button type="success" size="small" icon="el-icon-plus" @click="addCriteria(i)" circle></el-button></el-col>
                        <el-col :span="2" ><el-button type="danger" size="small" icon="el-icon-delete" @click="delSub(i)" circle></el-button></el-col>
                    </el-form-item>


                    <el-form-item label="Criteria" v-if="sub.criteria.length!=0">
                        <el-row v-for="(cri,index) in sub.criteria" :key="index" style="margin-bottom:1em">
                            <el-col :span="12">
                                <el-input v-model="cri.point"></el-input>
                            </el-col>
                            <el-col :span="2" :offset="2">
                                <el-input  v-model="cri.mark"
                                    onkeyup="this.value=this.value.replace(/[^\d]/g,'') " 
                                    onafterpaste="this.value=this.value.replace(/[^\d]/g,'') "
                                ></el-input>
                            </el-col>
                
                            <el-col :span="3">
                                <span style="font-weight:bold;margin-left:1.5em;"> Marks </span>
                            </el-col>

                            <el-col :span="2" :offset="2">
                                <i style="font-weight:bold; color:red; cursor:pointer" class="el-icon-close" @click="delCri(i,index)"></i>
                            </el-col>

                        </el-row>
                    </el-form-item>



                    <el-divider></el-divider>
                </div>
            </el-form>
            
            <div slot="footer" class="dialog-footer">
                <el-button type="success" @click="addSub()">Add Subquestion</el-button>
                <el-button @click="cancel()">Cancel</el-button>
                <el-button type="primary" @click="save()">Save</el-button>
            </div>

        </el-dialog> 
</div>
</template>

<script>
export default {
    props:{
        addBlock:false,
    },
    computed:{
        // isVisible:function(){
        //     return this.addBlock;
        // }
    },
    data(){
        return{
            title:'',
            total:'',   
            subquestion:[],
        }
    },
    methods:{
        delSub(i){
            this.$confirm('Are you sure you want to delete this subquestion?', '', {
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            type:'warning'
            }).then(()=>{
                this.$message({
                type: 'success',
                message: `Delete Successfully`
                });
                this.subquestion.splice(i,1)
            }).catch(()=>{
                this.$message({
                type: 'info',
                message: `Cancel Delete Action`
                });
            })            
        },
        delCri(i,index){
            this.$confirm('Are you sure you want to delete this criteria?', '', {
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            type:'warning'
            }).then(()=>{
                this.$message({
                type: 'success',
                message: `Delete Successfully`
                });
                this.subquestion[i].criteria.splice(index,1)
            }).catch(()=>{
                this.$message({
                type: 'info',
                message: `Cancel Delete Action`
                });
            })            
        },
        addSub(){
            var Obj = {
                question:'',
                grade:0,
                criteria:[],
            }
            this.subquestion.push(Obj)
        },
        addCriteria(i){
            var Obj = {
                point:'',
                mark:0,
            }
            this.subquestion[i].criteria.push(Obj);
        },
        cancel(){
            this.$confirm('We will not save your input if you leave!', 'Prompt',{
                confirmButtonText: 'Leave',
                cancelButtonText: 'Stay Here',
                type: 'warning'
            }).then(()=>{
                this.title='';
                this.total='';
                this.subquestion=[];
                
                this.$emit('cancel');
            })

        },
        save(){
            if(this.check()){
                var obj={
                    "title":this.title,
                    "total":this.total,
                    "subquestion":this.subquestion,
                }
                this.$emit('save',obj);
                this.title='';
                this.total='';
                this.subquestion=[];

            }else{
                this.$notify({
                    title: 'Warning',
                    message: 'Make sure that the sum of subquestion score is equal to the total score!',
                    type: 'warning',
                    duration:5000,
                });
            }
        },
        check(){
            var sum = 0;
            if(!this.subquestion.length)return true;
            
            this.subquestion.forEach((sub)=>{
                sum += Number(sub.grade)
            })
            if(this.total == sum)return true;
            else return false;
        },

    }
}
</script>

<style scoped>

</style>