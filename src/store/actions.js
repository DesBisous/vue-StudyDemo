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
