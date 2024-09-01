<template>
    <div class="bg-primary pa-3">
        {{ route.params }}
    </div>
    <div class="bg-primary pa-3">
        {{ route.query }}
    </div>
</template>
<script lang="ts" setup>
const route = useRoute();
</script>
<style scoped></style>