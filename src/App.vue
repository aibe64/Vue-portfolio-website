<template>
  <div class="app-vue">
    <fHeader></fHeader>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
    <fFooter></fFooter>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    fHeader: () => import('@/components/f-header'),
    fFooter: () => import('@/components/f-footer')
  }
}
</script>
