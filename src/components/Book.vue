<template>
    <div id="book">
        <img class="tree1" :src="tree1" alt="">
        <img class="tree2" :src="tree2" alt="">
        <img class="tree3" :src="tree3" alt="">
        <div class="container" v-if="book != null">
            <div class="book-info">
                <div class="row">
                    <div class="col-md-10 block-center">
                        <div class="col-md-5">
                            <div class="book-image">
                                <img :src="book.src" alt="">
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="info">
                                <h3>{{book.name}}</h3>
                                <p>外籍名：{{book.enName}}</p>
                                <p>作者：<em>{{book.author}}</em></p>
                                <p>创作时间：<time>{{book.creativeTime}}</time></p>
                                <p class="book-i">简介：{{book.briefIntro}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="book-content">
                <p v-for="(item,index) in book.article" :key="index" v-text="item"></p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default{
        computed:mapGetters([//采用vuex进行组件传参
            'bookName'
        ]),
        data() {
            return {
                name: '战争与和平',
                book: null,
                tree1: require('@/assets/img/tree1.png'),
                tree2: require('@/assets/img/tree2.png'),
                tree3: require('@/assets/img/tree3.png')
            }
        },
        methods:{
            getName(){
                this.name = this.$route.params.name;//采用路由跳转传参
//                console.log(this.name);
                //console.log(this.bookName);
                this.getBook();
            },
            getBook(){
                var _this=this;
                this.$http.get('bookweb/static/data/book.json').then(function(res){
                    for( let i = 0; i < res.data.length; i++ ){
                        console.log(_this.name);
                        if( res.data[i].name == _this.name ){
                            _this.book = res.data[i];
                            break;
                        }
                    }
                }).catch(function(err){
                    console.log(err);
                });
            }
        },
        mounted(){
            this.getName();
        },
    }
</script>

<style scoped >
    #book{
        margin-top: 30px;
    }
    .block-center{
        float: none;
        margin: 0 auto;
    }
    #book .book-image{
        padding: 30px;
    }
    #book .book-image img{
        width: 100%;
        box-shadow: 2px 4px 10px #3c3c3c;
    }
    #book .info{
        padding: 30px;
        margin-top: 50px;
    }
    #book .info h3{
        margin: 40px 0 15px;
    }
    #book .info p{
        color: #3C3C3C;
        font-family: "Roboto", sans-serif;
        font-size: 1em;
        font-weight: 400;
        line-height: 1.58;
        letter-spacing: .045em;
    }
    #book .info p:nth-child(2){
        margin-bottom: 30px;
    }
    #book .info p:nth-child(3){
        margin-bottom: 15px;
    }
    #book .info p:nth-child(4){
        margin-bottom: 30px;
    }
    #book .info p:nth-child(5){
        text-indent: 2em;
    }
    #book .book-content{
        margin: 60px 15px 60px;
    }
    #book .book-content p{
        color: #3C3C3C;
        text-indent: 2em;
        font-family: "Roboto", sans-serif;
        font-size: 1em;
        font-weight: 400;
        line-height: 1.58;
        letter-spacing: .045em;
    }
    .tree1{
        position: absolute;
        top:-10px;
        left: -10px;
        width: 400px;
    }
    .tree2{
        position: absolute;
        top:0;
        right: 0;
        width: 420px;
    }
    .tree3{
        position: absolute;
        top:-4px;
        left: 50%;
        width: 240px;
        margin-left: -120px;
    }
</style>
