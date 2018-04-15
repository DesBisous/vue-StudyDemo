<<<<<<< HEAD
// 与actions.js哪里不同的另一种导入方式
import {Book_Name,Add_Loading} from './types'

export default{
    [Book_Name]( state, param ){
        if( param != undefined || param != '' ) state.bookName = param;
    },
    [Add_Loading]( state ){
        state.loading++;
    }
=======
// 与actions.js哪里不同的另一种导入方式
import {Book_Name,Add_Loading} from './types'

export default{
    [Book_Name]( state, param ){
        if( param != undefined || param != '' ) state.bookName = param;
    },
    [Add_Loading]( state ){
        state.loading++;
    }
>>>>>>> 5ea53ea6af5e6b2057b83f1dea80daedd201a292
}