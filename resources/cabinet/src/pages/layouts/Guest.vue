<script>
export default {
  name: 'layoutGuest',
  metaInfo: {
    title: 'layoutGuest'
  },
}
</script>
<template>
  <div class="auth-wrapper">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>
