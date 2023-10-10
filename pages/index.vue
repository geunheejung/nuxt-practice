<template>
    <div>
        <h1>Hello World!</h1>
        <button @click="refresh">Refresh</button>
        {{ date }}
        <h2>
            현재 화면의 렌더링 되는 파트의 대해서 {{ renderedOn }}
        </h2>
        <article>
            <ul>
                <li v-for="item in posts" :key="item.id">
                    <nuxt-link :to="`posts/${item.id}`" no-prefetch>
                        <h3>
                            {{ item.title }}
                        </h3>
                        <p>
                            {{ item.body }}
                        </p>
                    </nuxt-link>
                </li>
            </ul>
        </article>  
        <nuxt-link to="/blog">Blog</nuxt-link>
    </div>
</template>


<script>
import { mapState } from 'vuex';
export default {
    // async asyncData() {
    //     const res = await fetch('http://localhost:4000/posts').then(res => res.json())
    //     return {
    //         date: Date.now(),
    //         renderedOn: process.client ? 'client' : 'server',
    //         dataList: res,
    //     };
    // },
    head() {
        // Set Meta Tags for this Page
    },
    data() {
        return {
            date: '',
            renderedOn: 'server',
            // dataList: [],
        }
    },
    computed: {
        ...mapState(['posts'])
    },
    methods: {
        refresh() {
            this.$nuxt.refresh();
        }
    },
    mounted() {
        this.$nextTick(() => {
            // 클라이언트 단에서는   접근 불가능한 프로퍼티인듯.
            console.log(this.$nuxt.$loading);
            this.$nuxt.$loading.start();
            setTimeout(() => {
                this.$nuxt.$loading.finish();
            }, 500);
        });

    }
}
</script>
<style>
.nuxt-link-active {
  color: red;
}
.nuxt-link-exact-active {
  color: green;
}
</style>