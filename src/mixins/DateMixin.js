export const dateMixin =  {
    methods: {
      formatPaperIDDate(){
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth()+1;
        var year = d.getFullYear();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();

        if(day<10)day='0'+day;
        if(month<10)month='0'+month;
        if(hour<10)hour='0'+hour;
        if(minute<10)minute = '0'+minute;
        if(second<10)second = '0'+second;
        return year+month+day+hour+minute+second;
      },
      formatDate(){
        var d = new Date();
        var day = d.getDate();
        
        var month = d.getMonth()+1;

        var year = d.getFullYear();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();

        if(day<10)day='0'+day;
        if(month<10)month='0'+month;
        if(hour<10)hour='0'+hour;
        if(minute<10)minute = '0'+minute;
        if(second<10)second = '0'+second;
        return year+'.'+month+'.'+day+' '+hour+':'+minute+':'+second;
      }
    }
  }
  