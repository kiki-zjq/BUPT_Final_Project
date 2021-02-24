export const dateMixin =  {
    methods: {
      formatPaperIDDate(){
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth()+1;
        if(month<10)month='0'+month
        var year = d.getFullYear();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();
        return year+month+day+hour+minute+second;
      },
      formatDate(){
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth()+1;
        if(month<10)month='0'+month
        var year = d.getFullYear();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();
        return year+'.'+month+'.'+day+' '+hour+':'+minute+':'+second;
      }
    }
  }
  