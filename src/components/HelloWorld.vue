<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ msg: string }>()
const count = ref(0)

const emit = defineEmits(['someEvent'])
emit('someEvent')

import { useAttrs, useSlots } from 'vue'
const attrs = useAttrs()
console.log(attrs)
const slots = useSlots()
const defaultContent = slots.default ? slots.default() : ''
console.log(defaultContent)
</script>

<template>
  <div>
    <!-- 添加tailwind 样式 -->
    <h1 class="text-3l font-bold underline">{{ msg }}</h1>
    <button type="button" @click="count++">count is: {{ count }}</button>
    <hr />
    <button @click="$emit('someEvent')">click me</button>
    <slot />
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
}

.small {
  font-size: 20px;
  background-color: lightblue;
}
</style>
