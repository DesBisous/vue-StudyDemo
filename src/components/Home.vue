<template>
    <div id="home">
        <Carousel></Carousel>
        <router-view></router-view>
    </div>
</template>

<script>
    import Carousel from '@/components/CarouselNav'
    export default{
        components:{
            Carousel
        },
        data() {
            return {

            }
        },
        methods:{

        },
        mounted(){

        },
    }
</script>

<style scoped>

</style>
