export default {
    formateDate(time){
        if (time){
            let date = new Date(time);
            return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDay() + ' '
                    + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        }
    }
}