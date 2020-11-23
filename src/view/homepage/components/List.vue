<template>
    <div class='grade-table'>
         <el-table
                max-height="800"
                :data="tableData"
                stripe
                :default-sort = "{prop: 'grade', order: 'descending'}"
                style="width: 100%">
                <el-table-column
                prop="semester"
                label="Semester"
                :filters="[{text:'Semester1-1',value:'Semester1-1'},
                           {text:'Semester1-2',value:'Semester1-2'},
                           {text:'Semester2-1',value:'Semester2-1'},
                           {text:'Semester2-1',value:'Semester2-2'},
                           {text:'Semester3-1',value:'Semester3-1'},
                           {text:'Semester3-2',value:'Semester3-2'},                
                ]"
                :filter-method="filterHandler"
                width="200">
                </el-table-column>
                <el-table-column
                prop="name"
                label="Class"
                width="180">
                </el-table-column>
                <el-table-column
                prop="credit"
                label="Credit"
                width="180">
                </el-table-column>
                <el-table-column
                prop="grade"
                label="Grade"
                width="180">
                </el-table-column>
                <el-table-column
                prop="keywords"
                label="Keywords"
                :filters="[{text:'Technology',value:'Technology'},
                           {text:'Science',value:'Science'},
                           {text:'Liberal Arts',value:'Liberal Arts'},               
                ]"
                :filter-method="filterHandler"
                >
                    <template slot-scope="scope">
                        <el-tag
                        v-if="scope.row.keywords==='Technology'"
                        type="danger"
                        disable-transitions>{{scope.row.keywords}}</el-tag>

                        <el-tag
                        v-if="scope.row.keywords==='Science'"
                        type="warning"
                        disable-transitions>&nbsp;&nbsp;{{scope.row.keywords}}&nbsp;&nbsp;&nbsp;</el-tag>


                        <el-tag
                        v-if="scope.row.keywords==='Liberal Arts'"
                        type="success"
                        disable-transitions>{{scope.row.keywords}}</el-tag>
                    </template>

                </el-table-column>
            </el-table>
    </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [
            { semester: 'Semester1-1',  name: '大学计算机', grade: '95', credit:'2', keywords:'Technology', },
            { semester: 'Semester1-1',  name: '大数据分析技术导论', grade: '89', credit:'2', keywords:'Technology', },
            { semester: 'Semester1-1',  name: '高等数学（上）', grade: '93', credit:'5', keywords:'Science', },
            { semester: 'Semester1-1',  name: '线性代数', grade: '99', credit:'3', keywords:'Science', },
            { semester: 'Semester1-1',  name: '综合英语（1-2）', grade: '88', credit:'6', keywords:'Liberal Arts', },
            { semester: 'Semester1-1',  name: '形式与政策1', grade: '95', credit:'0.4', keywords:'Liberal Arts', },
            { semester: 'Semester1-1',  name: '军训', grade: '94', credit:'1', keywords:'', },
            { semester: 'Semester1-1',  name: '大学生心理健康', grade: '94', credit:'0.5', keywords:'Liberal Arts', },
            { semester: 'Semester1-1',  name: '思想道德', grade: '93', credit:'3', keywords:'Liberal Arts', },
            { semester: 'Semester1-1',  name: '中国近现代史纲要', grade: '95', credit:'2', keywords:'Liberal Arts', },
            { semester: 'Semester1-1',  name: '体育基础（上）', grade: '82', credit:'1', keywords:'', },
            { semester: 'Semester1-2',  name: '电子系统基础', grade: '89', credit:'3', keywords:'Technology', },
            { semester: 'Semester1-2',  name: 'C高级语言程序设计', grade: '95', credit:'3', keywords:'Technology', },
            { semester: 'Semester1-2',  name: '电路实验', grade: '92', credit:'1', keywords:'Technology', },
            { semester: 'Semester1-2',  name: '高等数学（下）', grade: '100', credit:'5', keywords:'Science', },
            { semester: 'Semester1-2',  name: '形式与政策2', grade: '98', credit:'0.4', keywords:'Liberal Arts', },
            { semester: 'Semester1-2',  name: '军事理论', grade: '100', credit:'1.5', keywords:'Liberal Arts', },
            { semester: 'Semester1-2',  name: '综合英语（3）', grade: '85', credit:'4', keywords:'Liberal Arts', },
            { semester: 'Semester1-2',  name: '英语中级读写', grade: '85', credit:'2', keywords:'Liberal Arts', },
            { semester: 'Semester1-2',  name: '马克思主义基本原理', grade: '88', credit:'3', keywords:'Liberal Arts', },
            { semester: 'Semester1-2',  name: '大学物理（上）', grade: '90', credit:'3', keywords:'Science', },
            { semester: 'Semester1-2',  name: '物理实验', grade: '84', credit:'1.5', keywords:'Science', },
            { semester: 'Semester1-2',  name: '个人发展计划I', grade: '91', credit:'0.4', keywords:'Liberal Arts', },
            { semester: 'Semester2-1',  name: '数据结构', grade: '94', credit:'2', keywords:'Technology', },
            { semester: 'Semester2-1',  name: '计算机实习', grade: '94', credit:'2', keywords:'Technology', },
            { semester: 'Semester2-1',  name: '工程数学', grade: '95', credit:'4', keywords:'Science', },
            { semester: 'Semester2-1',  name: '大学物理（下）', grade: '99', credit:'2', keywords:'Science', },
            { semester: 'Semester2-1',  name: '电子电路基础', grade: '87', credit:'3', keywords:'Technology', },
            { semester: 'Semester2-1',  name: '信号与系统', grade: '95', credit:'3', keywords:'Technology', },
            { semester: 'Semester2-1',  name: '企业管理', grade: '86', credit:'2.5', keywords:'Liberal Arts', },
            { semester: 'Semester2-1',  name: '形势与政策3', grade: '92', credit:'0.4', keywords:'Liberal Arts', },
            { semester: 'Semester2-1',  name: '体育基础（下）', grade: '80', credit:'1', keywords:'', },
            { semester: 'Semester2-2',  name: 'Java高级语言程序设计', grade: '95', credit:'4', keywords:'Technology', },
            { semester: 'Semester2-2',  name: '概率论与随机过程', grade: '99', credit:'3', keywords:'Science', },
            { semester: 'Semester2-2',  name: '数字信号处理', grade: '88', credit:'3', keywords:'Technology', },
            { semester: 'Semester2-2',  name: '数字信号处理实验', grade: '91', credit:'1', keywords:'Technology', },
            { semester: 'Semester2-2',  name: '学术交流技能1', grade: '87', credit:'2', keywords:'Liberal Arts', },
            { semester: 'Semester2-2',  name: '学术交流技能2', grade: '87', credit:'2', keywords:'Liberal Arts', },
            { semester: 'Semester2-2',  name: '毛概', grade: '94', credit:'4', keywords:'Liberal Arts', },
            { semester: 'Semester2-2',  name: '毛概（实践环节）', grade: '93', credit:'2', keywords:'Liberal Arts', },
            { semester: 'Semester2-2',  name: '数字电路与逻辑设计', grade: '84', credit:'3', keywords:'Technology', },
            { semester: 'Semester2-2',  name: '产品开发与营销', grade: '88', credit:'2.5', keywords:'Liberal Arts', },
            { semester: 'Semester2-2',  name: '个人发展计划II', grade: '100', credit:'0.3', keywords:'Liberal Arts', },
            { semester: 'Semester2-2',  name: '电磁场与电磁波', grade: '98', credit:'4', keywords:'Technology', },
            { semester: 'Semester3-1',  name: 'Design & Build 实训1	', grade: '91', credit:'2', keywords:'Technology', },
            { semester: 'Semester3-1',  name: '电信系统', grade: '95', credit:'2.5', keywords:'Technology', },
            { semester: 'Semester3-1',  name: '多媒体基础', grade: '94', credit:'3', keywords:'Technology', },
            { semester: 'Semester3-1',  name: '互联网协议', grade: '92', credit:'3', keywords:'Technology', },
            { semester: 'Semester3-1',  name: '高级变化', grade: '91', credit:'3', keywords:'Technology', },
            { semester: 'Semester3-1',  name: '体育专项（上）', grade: '77', credit:'1', keywords:'', },
            { semester: 'Semester3-1',  name: '形势与政策5', grade: '90', credit:'0.4', keywords:'Liberal Arts', },
            { semester: 'Semester3-2',  name: '通信原理', grade: '96', credit:'4', keywords:'Technology', },
            { semester: 'Semester3-2',  name: '移动互联网', grade: '97', credit:'2', keywords:'Technology', },
            { semester: 'Semester3-2',  name: 'Web搜索技术', grade: '96', credit:'2', keywords:'Technology', },
            { semester: 'Semester3-2',  name: '互联网应用', grade: '97', credit:'3', keywords:'Technology', },
            { semester: 'Semester3-2',  name: '交互式媒体', grade: '96', credit:'3', keywords:'Technology', },
            { semester: 'Semester3-2',  name: '图像与视频处理', grade: '96', credit:'3', keywords:'Technology', },
            { semester: 'Semester3-2',  name: '软件工程', grade: '92', credit:'4', keywords:'Technology', },
            { semester: 'Semester3-2',  name: '个人发展计划III', grade: '96', credit:'0.3', keywords:'Liberal Arts', },
            
        ]
      }
    },
    methods:{
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        }
    }

}
</script>

<style>
.grade-table .el-icon-arrow-down:before {
    content: "\E6DF";
    font-weight: bold;
    font-size: 16px!important;
}
</style>