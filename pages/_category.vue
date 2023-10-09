<template>
    <div>
        _category
        <NuxtChild :key="$route.params.id" :data="'PARENT!!'" />
    </div>
</template>

<script>
export default {}
</script>