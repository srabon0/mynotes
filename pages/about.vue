<template>
    <div>
        <p v-for="item in responseData.data" :key="item.id">
 {{ item.title }}            
        </p>
    </div>
    <AuthPassport></AuthPassport>
</template>

<script setup lang="ts">
import axios from 'axios'
 console.log("i am about")
  //const responseData = ref(null);
  const url = "http://localhost:5000/blogs"
//   const options = {
//     headers:{
//         'authorization' : `Bearer ${localStorage.getItem('token')}`
//     }
//   }
  const {data:responseData,pending,error} = await useAsyncData('blogs',async()=>{
    if(process.server){
        const req = await axios.get(url);
        console.log(req);
        return await req.data;
    }
  })

 

</script>

<style lang="scss" scoped>

</style>