<template>
    <div id="Carousel">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators" style="display:none">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img :src="carousel_1" alt="...">
                    <div class="carousel-caption">
                        <div class="carousel-caption-top">
                            <strong>Book</strong>
                            <div>
                                <span>Welcome</span>
                                <div>
                                    <i class="glyphicon glyphicon-flag"></i>
                                    <i class="glyphicon glyphicon-camera"></i>
                                </div>
                            </div>
                        </div>
                        <h1>The book is the ladder of human progress.</h1>
                        <h4 class="">— Golgi</h4>
                        <div class="carousel-caption-bottom">
                            <p>Follow me</p>
                            <i @click="navClickEvent()" class="glyphicon glyphicon-chevron-down"></i>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img :src="carousel_2" alt="...">
                    <div class="carousel-caption">
                        <div class="carousel-caption-top">
                            <strong>Book</strong>
                            <div>
                                <span>Welcome</span>
                                <div>
                                    <i class="glyphicon glyphicon-flag"></i>
                                    <i class="glyphicon glyphicon-camera"></i>
                                </div>
                            </div>
                        </div>
                        <h1>Books are the storehouse of human thought.</h1>
                        <h4>— Ushinski</h4>
                        <div class="carousel-caption-bottom">
                            <p>Follow me</p>
                            <i @click="navClickEvent()" class="glyphicon glyphicon-chevron-down"></i>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img :src="carousel_3" alt="...">
                    <div class="carousel-caption">
                        <div class="carousel-caption-top">
                            <strong>Book</strong>
                            <div>
                                <span>Welcome</span>
                                <div>
                                    <i class="glyphicon glyphicon-flag"></i>
                                    <i class="glyphicon glyphicon-camera"></i>
                                </div>
                            </div>
                        </div>
                        <h1>Books are the tools of the soul.</h1>
                        <h4>— Hugo</h4>
                        <div class="carousel-caption-bottom">
                            <p>Follow me</p>
                            <i @click="navClickEvent()" class="glyphicon glyphicon-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
//    import img from '@/assets/img/1,jpg'
    export default{
        data(){
            return{
              carousel_1: require('@/assets/img/carousel-1.jpeg'),
              carousel_2: require('@/assets/img/carousel-2.jpeg'),
              carousel_3: require('@/assets/img/carousel-3.jpeg')
            }
        },
        methods:{
            navClickEvent(){
                setTimeout(()=>{
                    $('html,body').animate({scrollTop: '567.7777709960938px'}, 800);
                },1);
            }
        }
    }
</script>

<style scoped>
    .carousel-inner>.item>a>img, .carousel-inner>.item>img, .img-responsive, .thumbnail a>img, .thumbnail>img{
        width: 100%;
        height: 635px;
        opacity: 0.8;
    }
    .carousel-caption>h4{
        text-align: right;
        padding-right: 12%;
    }
    .carousel-inner{
        background: #000;
    }
    .carousel-caption {
        padding-bottom: 17.5%;
    }
    .carousel-caption-top{
        margin-bottom: 50px;
    }
    .carousel-caption-top strong{
        font-size: 2.5em;
        padding: 10px 10px 0;
        border-right: 1px solid #fff;
        vertical-align: bottom;
    }
    .carousel-caption-top>div{
        display: inline-block;
        padding: 0 10px 0;
        vertical-align: bottom;
        text-transform: uppercase;
        letter-spacing: .1em;
        font-family: "Roboto", sans-serif;
    }
    .carousel-caption-bottom{
        position: absolute;
        bottom: 15%;
        left: 50%;
        width: 140px;
        margin-left: -70px;
    }
    .carousel-caption-bottom>p{
        font-size: 1.3em;
        text-transform: lowercase;
        color: rgba(255,255,255,0.8);
        letter-spacing: .1em;
        font-family: "Roboto", sans-serif;
    }
    .carousel-caption-bottom>i{
        display: block;
        cursor: pointer;
        margin-top: 70px;
        padding: 0 15px;
        font-size: 1.1em;
        -webkit-animation: upDown 10s linear .1s infinite;
        animation: upDown 10s linear .1s infinite;
        -webkit-transition: all ease 0.3s;
        transition: all ease 0.3s;
    }
    @keyframes upDown {
        0%{
            transform: translate(0);
        }
        15%{
            transform: translate(0,20px);
        }
        30%{
            transform: translate(0);
        }
        45%{
            transform: translate(0,20px);
        }
        60%{
            transform:translate(0);
        }
        75%{
            transform: translate(0,20px);
        }
        100%{
            transfrom: translate(0);
        }
    }

</style>
