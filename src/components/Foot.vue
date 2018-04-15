<template>
    <div id="foot">
        <div class="container">
            <div class="foot-body">
                <div class="foot-top">
                    <div class="foot-img">
                        <img :src="icon" alt="">
                    </div>
                    <span>图书馆</span>
                </div>
                <div class="foot-middle">
                    <p>
                        图书馆Web使用的是Vue2.0完成搭建，并且使用了vue-router、axios、bootstrap、jquery等技术，本网站仅仅作为本人学习的demo，如有雷同，纯属巧合 O(∩_∩)O。
                    </p>
                </div>
                <div class="foot-bottom">
                    <em>Author: 邝晓滨 | Benson</em>
                    <time>© {{creationTime | normalTime}}</time>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                creationTime : "1497484800000",
                icon: require('@/assets/img/icons.png')
            }
        },
        methods:{
        },
        mounted(){
        },
    }
</script>

<style scoped lang="scss" rel="stylesheet/sass">
    @import "./static/scss/foot.scss";
</style>
