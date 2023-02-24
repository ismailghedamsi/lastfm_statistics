<template>
    <div class="friendList">
        <h1>FriendList</h1>
        <FriendList/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import FriendList from '@/components/FriendList.vue';

export default defineComponent({
  name: 'FriendListView',
  components: {
    FriendList,
  },
});
</script>
