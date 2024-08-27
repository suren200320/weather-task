<template>
  <div class="home">
    <WeatherWidget v-if="!weatherStore.loading" />
  </div>
</template>

<script setup>
import WeatherWidget from '@/components/WeatherWidget.vue';

import { useWeather } from '@/store/useWeather';

const weatherStore = useWeather();

weatherStore.fetchWeatherData();
weatherStore.loadSearchHistory();
</script>
