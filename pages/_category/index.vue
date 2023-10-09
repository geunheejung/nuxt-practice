<template>
    <div>
        category-detail
        {{ data }}
        <NuxtChild />
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>