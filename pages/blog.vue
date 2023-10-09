<template>
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deserunt sapiente adipisci id, voluptatem atque illo voluptate at. Dolorem animi illum quam impedit tenetur accusamus recusandae inventore quae doloribus voluptas.
        </p>
        <h1>Special state in `window.__NUXT__`</h1>

    </div>
</template>
<router>
    {
        path: '/blog',
        alias: [
            '/detail',
        ]
    }
</router>

<script>
export default {
    layout: 'blog',
    asyncData(context) {
        // 에러 객체 시그니처 지켜야 올바르게 전달됨
        // context.error({ statusCode: 404, message: '페이지를 잘못 찾았습니다.' });
        if (process.server) {
            context.beforeNuxtRender(({ nuxtState }) => {
                nuxtState.test = true
            })
        } 

        if (process.client) {
            console.log(context.nuxtState)
        }
        
    },
    
}
</script>