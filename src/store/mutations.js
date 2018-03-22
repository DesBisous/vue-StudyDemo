// 与actions.js哪里不同的另一种导入方式
import {Book_Name,Add_Loading} from './types'

export default{
    [Book_Name]( state, param ){
        if( param != undefined || param != '' ) state.bookName = param;
    },
    [Add_Loading]( state ){
        state.loading++;
    }
}