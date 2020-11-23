<template>
    <div class='footer'>

            <el-dialog
                title="Mail"
                :visible.sync="dialogMail"
                width="30%"
                :before-close="handleClose">
                <p>zhujiangqi@bupt.edu.cn</p>
                <i>or</i>
                <p>zhujiangqi0701@gmail.com</p>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogMail = false" style='background-color: #404040;'>O K</el-button>
                </span>
            </el-dialog>

            <el-dialog
                title="Phone"
                :visible.sync="dialogTele"
                width="30%"
                :before-close="handleClose">
                <p>18810701233</p>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogTele = false" style='background-color: #404040;'>O K</el-button>
                </span>
            </el-dialog>

            <el-dialog
                title="WeChat"
                :visible.sync="dialogWechat"
                width="30%"
                :before-close="handleClose">
                <p>WeChat Number: <i>zjq990701</i></p>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogWechat = false" style='background-color: #404040;'>O K</el-button>
                </span>
            </el-dialog>

            <div class="contact-section-header">
                <h2>Contact me...</h2>
                
            </div>
                <div class="contact-links">
                    <!-- <a
                    href="#"
                    target="_blank"
                    class="btn contact-details"
                    ><i class="fa fa-facebook-square fa-2x"></i> <span class='contact-way'>Facebook</span></a> -->


                    <a
                    id="profile-link"
                    href="https://github.com/kiki-zjq"
                    target="_blank"
                    class="btn contact-details"
                    ><i class="fa fa-github fa-2x"></i> <span class='contact-way'>GitHub</span></a>

                    <!-- <a
                        href="#"
                        target="_blank"
                        class="btn contact-details"
                    ><i class="fa fa-twitter fa-2x"></i> <span class='contact-way'>Twitter</span></a> -->

                    <a 
                        href='javascript:void(0)'
                        class="btn contact-details"
                        @click='dialogMail = true'
                    ><i class="fa fa-at fa-2x"></i> <span class='contact-way'>Send a mail</span></a>

                    <a 
                        href='javascript:void(0)' 
                        class="btn contact-details"
                        @click='dialogTele = true'
                    ><i class="fa fa-phone-square fa-2x"></i> <span class='contact-way'>Call me</span></a>

                    <a 
                        href='javascript:void(0)' 
                        class="btn contact-details"
                        @click='dialogWechat = true'
                    ><i class="fa fa-wechat fa-2x"></i> <span class='contact-way'>WeChat</span></a>

                </div>
            <el-divider></el-divider>
            <div class="copyright">
                <i class="fa fa-at fa-1x" aria-hidden="true"></i><span class='team-name'>KiKi-Zjq</span>
            </div>
    </div>
</template>
<script>
import "font-awesome/css/font-awesome.css"
export default {
    data(){
        return{
        dialogMail:false,
        dialogTele:false,
        dialogWechat:false,
        }
    }

}
</script>
<style scoped>
@import "font-awesome/css/font-awesome.css";
.fa {
    z-index:100;
    color:white!important;
    margin-left:40px;
}
.footer{
        box-sizing: border-box;
        padding:20px;
        color:white;
        background-color: #404040;
        width:100%;
        height:40vh;
        position: relative;        
    }
.footer a {
    display: inline-block;
    color:white;
    text-decoration: none;
    transition: transform 0.5s;
    /* text-decoration: none; */
    /* font-size:px; */
}
a:hover{
    transform: translateY(12px);
    
}
.contact-way{
    font-size:24px;
    line-height:40px;
}
.contact-links{
    margin-bottom: 5em;
}
.contact-section-header > h2 {
  font-size: 2rem;
  color:white;
}
.copyright{
    text-align: right;
}
.team-name{
    margin-left:4px;
    margin-right:3em;
    font-size:16px;
    line-height:40px;
}

</style>