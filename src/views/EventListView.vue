<script setup>
import { ref, onMounted } from "vue";
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
const events = ref(null);

onMounted(() => {
  EventService.getEvents()
    .then((res) => {
      events.value = res.data;
    })
    .catch((err) => console.error(err));
});
</script>
<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
