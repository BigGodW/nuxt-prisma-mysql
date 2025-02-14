<script setup>
definePageMeta({
  layout: 'admin'
})
const {data:users} = await useFetch('/api/users')
const newUser = ref({
    name:"",
    email:""
})
const addUser = async()=>{
    console.log('add')
    const {data:res} = await useFetch('/api/user',{
        body:newUser.value,
        method:"POST"
    })
    console.log(res)
}

</script>


<template>
    <h1>用户管理</h1>
    {{ users }}
    <el-table :data="users" style="width: 100%">
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="email" label="email" />
  </el-table>
  <el-input v-model="newUser.name" style="width: 240px" placeholder="newName" />
  <el-input v-model="newUser.email" style="width: 240px" placeholder="email" />
  <el-button type="primary" @click="addUser">添加用户</el-button>

</template>