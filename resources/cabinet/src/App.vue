<script>

export default {
  name: 'App',
}
</script>
<template>
  <div>
    <router-view :key="$route.path" />
  </div>
</template>