<template>
    <div>
        <header :style="{
            backgroundColor: color ? color : defaultColor
        }">{{ title }}</header>
    </div>
</template>

<script setup lang="ts">
import {ref,defineProps} from 'vue'
// 父组件传递进来更改该头部组件的属性值
defineProps(["title","color"])

const defaultColor = ref('red')
const name = ref('Vaica')

</script>

<style scoped>
header {
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    color: white;
}
</style>