
export const normalTime = (time)=>{
	if(time){
		let oDate=new Date();
		oDate.setTime(time);

        let y=oDate.getFullYear();
        let m=oDate.getMonth()+1;
        let d=oDate.getDate();

        if( m < 10 ) m = "0" + m;
        if( d < 10 ) n = "0" + n;

		return y+'-'+m+'-'+d;
	}
};