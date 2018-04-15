<template>
    <div id="navBox" v-if="bookList != null">
        <div class="navbar-box">
            <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
                <nav id="navbar-example" class="navbar navbar-default navbar-static container" role="navigation" v-if="navShow">
                    <div class="container-fluid container">
                        <div class="navbar-header">
                            <button class="navbar-toggle" type="button" data-toggle="collapse"
                                    data-target=".bs-js-navbar-scrollspy">
                                <span class="sr-only">Library</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Library</a>
                        </div>
                        <div class="collapse navbar-collapse bs-js-navbar-scrollspy">
                            <ul class="nav navbar-nav">
                                <li @click="navClickEvent(0)" :class="{ active: navActive == 0 }"><a href="#hot">热门</a></li>
                                <li @click="navClickEvent(1)" :class="{ active: navActive == 1 }"><a href="#masterpiece">名著</a></li>
                                <li @click="navClickEvent(2)" :class="{ active: navActive == 2 }"><a href="#fiction">小说</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </transition>
            <div class="example-body"
                 style="position: relative;">
                <div id="hot" class="box">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 block-center">
                                <div class="col-md-5">
                                    <div class="hot-image animated fadeInLeft" @click="goToBook(bookList[0].name)" v-if="hot">
                                        <img :src="bookList[0].src" alt="">
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <header class="hot-body animated fadeInDown" v-if="hot">
                                        <h2 v-text="bookList[0].name"></h2>
                                        <p v-for="(item, index) in hotData" :key="index" v-text="item"></p>
                                        <em v-text="bookList[0].author"></em>
                                    </header>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="masterpiece" class="box">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 animated zoomIn" v-for="(item, index) in masterpieceData" :key="index" v-if="masterpiece">
                                <div class="col-md-5">
                                    <div class="masterpiece-image" @click="goToBook(item.name)">
                                        <img :src="item.src" alt="">
                                    </div>
                                </div>
                                <div class="col-md-6 col-md-offset-1">
                                    <header class="masterpiece-body">
                                        <h3 v-text="item.name"></h3>
                                        <p v-text="item.briefIntro"></p>
                                        <em v-text="item.author"></em>
                                    </header>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fix-bg animated fadeIn" v-if="fixBg">
                        <div class="bg-body">
                            <p>Living without books is like without sunshine; without wisdom, there is no book like a bird without wings.</p>
                            <img :src="twice" alt="">
                            <em>Shakespeare</em>
                            <time>1564-1616</time>
                        </div>
                    </div>
                </div>
                <div id="fiction" class="box">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 block-center">
                                <div class="col-md-4 animated lightSpeedIn" v-for="(item, index) in fictionData" :key="index" v-if="fiction">
                                    <div class="fiction-image" @click="goToBook(item.name)">
                                        <img :src="item.src" alt="">
                                    </div>
                                    <h5 v-text="item.name"></h5>
                                    <p v-text="item.briefIntro"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        computed: {
            hotData: function () {
                return this.bookList[0]["article"].slice(0, 2)
            },
            masterpieceData: function () {
                return this.bookList.slice(1, 5)
            },
            fictionData: function () {
                return this.bookList.slice(5, 8)
            }
        },
        data() {
            return {
                navActive: 0,
                navShow: false,
                hot: false,
                masterpiece: false,
                fiction: false,
                fixBg: false,
                bookList: null,
                twice: require('@/assets/img/twice.jpeg'),
            }
        },
        methods:{
            navClickEvent(index){
                this.navActive = index;
                setTimeout(()=>{
                    let scrollTop;
                    if( document.documentElement && document.documentElement.scrollTop ) {
                        scrollTop = document.documentElement.scrollTop;
                    } else if(document.body) {
                        scrollTop = document.body.scrollTop;
                    }
                    if( scrollTop > 70 ){
                        scrollTop = scrollTop - 66;
                    }
                    $('html,body').animate({scrollTop: scrollTop+'px'}, 800);
//                    window.scrollTo(0,scrollTop);
                },1);
            },
            goToBook(name){

                /*----------------------
                    路由跳转和传参方式
                ----------------------*/

                // 字符串
                //this.$router.push('/book');
                // 对象
                //this.$router.push({ path: '/book' });
                // 命名的路由
                //this.$router.push({ path: '/book', params: { name: name }});
                this.$router.push({ name: 'book', params: { name: name }});

                /*----------------------
                    使用vuex进行传参方式
                 ----------------------*/
                this.$store.dispatch( 'setBookName', name );
            },
            handleScroll(){
                let scrollTop;
                if( document.documentElement && document.documentElement.scrollTop ) {
                    scrollTop = document.documentElement.scrollTop;
                } else if(document.body) {
                    scrollTop = document.body.scrollTop;
                }
                /*导航*/
                if( scrollTop < 200 ) this.navShow = false;
                else this.navShow = true;

                /*热门*/
                if( scrollTop > 40 ) this.hot = true;

                /*名著*/
                if( scrollTop > 640 ) this.masterpiece = true;

                /*小说*/
                if( scrollTop > 1980 ) this.fiction = true;

                /*fixBg*/
                if( scrollTop > 1400 ) this.fixBg = true;

            },
            init(){
                var _this=this;
                //-->初始化Home数据
                //-->get方式
                this.$http.get('bookweb/static/data/book.json').then(function(res){
                    _this.bookList = res.data;
                }).catch(function(err){
                    console.log(err);
                });




                /*this.$http({
                    method: 'get',
                    url: 'src/assets/data/book.json',
                    params: {}
                }).then(function (res) {
                    console.log(res);
                }).catch(function (err) {
                    alert(err);
                });*/

                //-->post方式
                /*-vue 脚本架里axios post是不能本地json，GET可以-*/
                /*this.$http.post('', {}).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });*/

                /*this.$http({
                    method: 'post',
                    url: '',
                    params: {}
                }).then(function (res) {
                    alert(res);
                }).catch(function (err) {
                    alert(err);
                });*/

            }
        },
        mounted(){
            this.init();
            window.addEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    #navbar-example{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        background-color: #1F0C07;
        border: 0 none;
        margin-bottom: 0;
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
        min-height: 50px;
        padding: 8px;
    }
    #navbar-example .navbar-nav{
        float: right;
    }
    .navbar-default .navbar-brand {
        color: #c2900f;
        font-size: 25px;
    }
    .navbar-default .navbar-nav>li>a{
        letter-spacing: .1em;
    }
    .navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
        color: #D19A04;
        background-color: transparent;
    }
    .navbar-default .navbar-nav>li>a:hover{
        color: #D19A04;
    }
    .block-center{
        float: none;
        margin: 0 auto;
    }
    #hot{
        background-color: #f6f6f6;
    }
    .box .container{
        padding: 100px 0 75px;
    }
    .hot-image{
        padding: 15px;
    }
    .hot-image img,
    .masterpiece-image img{
        width: 100%;
        border-radius: 3px;
        box-shadow: 2px 7px 10px #3c3c3c;
        cursor: pointer;
    }
    .hot-body h2{
        text-align: center;
        margin-top: 15%;
        margin-bottom: 10%;
    }
    .hot-body p,
    .masterpiece-body p{
        color: #626262;
        text-indent: 2em;
        font-family: "Roboto", sans-serif;
        font-size: 1em;
        font-weight: 300;
        line-height: 1.58;
        letter-spacing: .045em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
    }
    .hot-body em{
        float: right;
        margin: 10px 0 0;
    }
    .masterpiece-body h3{
        margin-top: 22%;
        text-align: center;
    }
    .masterpiece-body em{
        width: 90%;
        display: block;
        margin: 10px auto 0;
        text-align: center;
    }
    .masterpiece-image{
        height: 300px;
    }
    .masterpiece-image img{
        height: 100%;
    }
    #masterpiece .row .col-md-6{
        margin-bottom: 30px;
    }
    .fix-bg{
        padding-top: 0px;
        background-image: url("../assets/img/review_bg.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    .fix-bg .bg-body{
        background-color: rgba(0,0,0,0.3);
        height: 360px;
        color: #fff;
        font-family: "Roboto", sans-serif;
        line-height: 1.58;
        letter-spacing: .045em;
        text-align: center;
        padding: 6% 30%;
    }
    .fix-bg .bg-body p{
        padding: 0 30px 30px;
        font-size: 1.11em;
    }
    .fix-bg .bg-body img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .fix-bg .bg-body em{
        display: block;
        margin: 30px 5px 5px;
    }
    #fiction .col-md-4{
        margin-bottom: 30px;
    }
    .fiction-image{
        padding: 0 40px;
        height: 300px;
        margin-bottom: 20px;
    }
    .fiction-image img{
        width: 100%;
        height: 100%;
        border-radius: 3px;
        box-shadow: 2px 4px 10px #3c3c3c;
        cursor: pointer;
    }
    #fiction h5{
        text-align: center;
    }
    #fiction p{
        color: #626262;
        text-indent: 2em;
        font-family: "Roboto", sans-serif;
        font-size: 1em;
        font-weight: 300;
        line-height: 1.58;
        letter-spacing: .045em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>
