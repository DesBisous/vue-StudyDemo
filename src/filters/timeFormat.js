<<<<<<< HEAD

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
=======

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
>>>>>>> 5ea53ea6af5e6b2057b83f1dea80daedd201a292
};