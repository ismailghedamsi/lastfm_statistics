<template>
  <div v-if="friendName">
    <p>Welcome to the page of {{  friendName }}!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'MyComponent',
  setup() {
    const route = useRoute();
    const { friendName } = route.params;

    return {
      friendName,
    };
  },
});
</script>
