<template>
    <div class="post-container">
        <p v-if="$fetchState.pending">Fetching mountations...</p>
        <p v-else-if="$fetchState.error">
            An error occurred :(
                {{ $fetchState }}
        </p>
        <div v-else>
            <audio :src="require('../../assets/water.mp3').default" controls></audio>
            {{ post }}
            <div>
                <nuxt-link :to="`${(($route.params.id * 1) - 1)}`">Prev</nuxt-link>
                <nuxt-link :to="`${($route.params.id * 1) + 1}`">Next</nuxt-link>
                <button @click="$fetch">Refresh</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        console.log('head!!', this.post);
        return {
        title: '게시글 페이지',
        meta: [
            {
                hid: 'charset',
                charset: 'en-us'
            },
            {
                hid: 'description',
                name: 'description',
                content: '상세 게시글 페이지 입니다!'
            }
        ],
        script: [
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
            },        
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
            }
        ],
    }
    },
    validate(context) {
        /**
         * 새로운 경로로 이동하기 전에 매번 호출된다.
         * 서버 측에서 한 번(Nuxt 앱에 대한 첫 번째 요청 시) 호출되고,
         * 추가 경로를 탐색할 때 클라이언트 측에서 호출된다.
         * context 개체를 인수로 사용한다.
         * return true; // if the params are valid
         * Nuxt가 경로 렌더링을 중지하고 오류 페이지를 표시한다.
         * 유효성 검사 메서드를 반환하지 않으면 자동으로 404에러로 error layout에게 전달됨.
         * return false; 
         */
        return /^\d+$/.test(context.params.id);         
    },
    async asyncData(context) {
        // const id = context.params.id
        // try {
        // const res = await fetch(
        //     `http://localhost:4000/posts/${id}`
        // );
        // const post = await res.json();
        // return { post }
        // } catch (e) {
        // context.error(e) // Show the nuxt error page with the thrown error
        // }
        return {};
    },
    data() {
        return {
            post: [],
        }
    },
    // watch: {
    //     '$route.query': '$fetch'
    // },
    activated() {
        // 마지막으로 불러온 시간이 30초 이상 지난 경우 다시 불러오기를 호출한다.
        // Date.now()는 현재 시간, 현재 시간에서 30초를 뺀값이 마지막으로 불러온 시간보다 크거나 같으면?
        // 30초가 지났느냐이다. 지나지 않았다면 마지막에 요청한 시간이 더 높았을 듯.
        console.log(Date.now() - 30000);
        if (this.$fetchState.timestamp <= Date.now() - 30000) {
            
            this.$fetch();
        }
    },
    async fetch() {
        
        // context 사용하면, this라우팅으로 접근이 안되는구나, 왜? context는 서버사이드에서 제공받으니.
        const id = this.$route.params.id
        try {
        const res = await fetch(
            `http://localhost:4000/posts/${id}`
        );
        const post = await res.json();
        this.post = post;
        } catch (e) {
            throw e;
            // context.error(e) // Show the nuxt error page with the thrown error
        } finally {
        }
    },
    beforeMount() {
        console.log('beforeMounted!!');
    },
    created() {
        console.log('created');
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    }
    // fetchOnServer: false,
}
</script>

<style lang="scss">
.post-container {
    font-family: 'Roboto';

    button {
        background: #fff;
        
    }
}
</style>