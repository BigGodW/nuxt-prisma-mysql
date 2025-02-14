<script setup>

import { onMounted, ref } from 'vue'

const { data: users } = await useFetch('/api/users')


</script>

<template>
  <div>
    <h1>nuxt-prisma</h1>
    <ul>
      <li v-for="user in users">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
