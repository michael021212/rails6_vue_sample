<template>
  <div>
    <router-link :to="{ name: 'Top' }">EmployeeIndexPage(Top)</router-link>
    <router-link :to="{ name: 'EmployeeNewPage' }">EmployeeNewPage</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style scoped>
</style>
