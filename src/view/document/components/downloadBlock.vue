<template>
    <div>
        <el-dialog title="Download Settings" :visible.sync="downloadBlock" :before-close="cancel">
            <el-form label-width="150px" style="text-align:left;margin-left:2em" label-position="left">
                <el-form-item label="Output Format">
                    <el-radio v-model="format" label="1">PDF</el-radio>
                    <el-radio v-model="format" label="2">LaTeX</el-radio>
                    <el-radio v-model="format" label="3">PDF+LaTeX</el-radio>
                </el-form-item>

                <el-form-item label="Output Type">
                    <el-radio v-model="type" label="1">Without Marking Criteria</el-radio>
                    <el-radio v-model="type" label="2">With Marking Criteria</el-radio>
                </el-form-item>

            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel()">Cancel</el-button>
                <el-button type="primary" @click="download()">Download</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {
    data(){
        return{
            format:'1',
            type:'1',
        }
    },
    props:{
        downloadBlock:false,
    },
    methods:{
        cancel(){
            this.format='1';
            this.type='1';
            this.$emit('cancel')
        },
        download(){
            this.$emit('download',this.format, this.type)
        }
    }
}
</script>