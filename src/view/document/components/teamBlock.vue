<template>
    <div>
        <el-dialog title="Add Team Member" :visible.sync="teamBlock" :before-close="cancel">
            <el-form label-width="150px">
                <el-form-item label="Member Account">
                    <el-input v-model="account" ></el-input>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel()">Cancel</el-button>
                <el-button type="primary" @click="invite()">Invite</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {inviteTeam} from '@/request/accountApi'
export default {
    data(){
        return{
            account:'',
        }
    },
    props:{
        teamBlock:false,
    },
    methods:{
        invite(){
            if(this.account=='' || this.account == this.$store.state.account){
                this.$notify.error({
                    title: 'Error',
                    message: 'Make sure you have input a correct user account'
                });
            }else{
                let paperid = this.$route.params.paperid;
                inviteTeam(this.account, paperid).then((res)=>{
                    this.$notify({
                        title: 'Success',
                        message: 'Invite People Successfully',
                        type: 'success',
                        duration:5000,
                    });
                }).catch((res)=>{
                    if(res.response.data == 'This account does not exist!'){
                        this.$notify.error({
                            title: 'Error',
                            message: 'Account Does Not Exist',
                            duration:5000,
                        });
                    }
                    if(res.response.data == 'Already invite!'){
                        this.$notify.error({
                            title: 'Error',
                            message: 'Account Already In Your Team',
                            duration:5000,
                        });
                    }
                    
                })
            }
        },
        cancel(){
            this.$confirm('We will not save your input if you leave!', 'Prompt',{
                 confirmButtonText: 'Leave',
                cancelButtonText: 'Stay Here',
                type: 'warning'
            }).then(()=>{
                this.account='';
                this.$emit('cancel');
            })
            
        }
    }
}
</script>