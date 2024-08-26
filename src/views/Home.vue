<template>
  <div class="home">
    Weather
  </div>
</template>

<script setup>
import axios from '@/axios';
import { onMounted } from 'vue';


onMounted(async () => {
  const resp = await axios.get("/weather", { params: { lat: "40.177200", lon: "44.503490" } });
  console.log(resp);
})
</script>
