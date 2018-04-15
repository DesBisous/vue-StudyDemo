<<<<<<< HEAD
//import 数据 from ''	这里面可以获取数据
import * as types from './types'

export default{
    // 事件函数
	setBookName:({commit,state},param)=>{
		commit(types.Book_Name,param);
	},
    addLoading:({commit,state})=>{
        commit(types.Add_Loading);
    }
}
=======
//import 数据 from ''	这里面可以获取数据
import * as types from './types'

export default{
    // 事件函数
	setBookName:({commit,state},param)=>{
		commit(types.Book_Name,param);
	},
    addLoading:({commit,state})=>{
        commit(types.Add_Loading);
    }
}
>>>>>>> 5ea53ea6af5e6b2057b83f1dea80daedd201a292
