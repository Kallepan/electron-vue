<script setup lang="ts">
/**
 * Periodically emits a string to the electron main process using the electronAPI
 */

import { ref, onMounted, onUnmounted } from 'vue';

const string = ref<string>('Hello from VueJS');
let interval: NodeJS.Timeout;
onMounted(() => {
  if (interval) re;
  interval = setInterval(() => {
    window.electronAPI?.message(string.value);
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template><div>Sending Data...</div></template>
