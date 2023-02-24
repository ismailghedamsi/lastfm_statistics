<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Subscriber</th>
          <th>Type</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(friend, index) in friends" :key="index">
          <td><img alt="friend cover image"
             :src="friend.image.find(image => image.size === 'extralarge')?.['#text']"
             width="50"
             height="50">
          </td>
          <td>{{ friend.name }}</td>
          <td>{{ friend.subscriber }}</td>
          <td>{{ friend.type }}</td>
          <td>{{ friend.url }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 14px;
  font-weight: 400;
}

.table th,
.table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #f8f8f8;
  font-weight: 700;
  text-transform: uppercase;
}

.table tbody tr:hover {
  background-color: #f5f5f5;
}

.table img {
  display: block;
  max-width: 100%;
}
</style>

<script lang="ts">
import {
  defineComponent, onMounted, ref,
} from 'vue';

interface Friend {
  bootstrap: string;
  country: string;
  image: [
    {
      size: string,
      '#text' : string;
    }
  ]
  name: string;
  playcount: string;
  playlists: string;
  realname: string;
  registered: {
    unixtime: string;
    '#text': string;
  };
  subscriber: string;
  type: string;
  url: string;
}

export default defineComponent({
  name: 'FriendList',
  components: {

  },
  setup() {
    const friends = ref<Friend[]>([]);

    const fetchFriends = async () => {
      try {
        const response = await fetch('http://localhost:9002/friends?username=ismailghedamsi');
        const data = await response.json();
        friends.value = data;
      } catch (error) {
        console.error(error);
      }
    };
    console.log('friend image ', friends);
    onMounted(fetchFriends);

    return {
      friends,
    };
  },
});
</script>
