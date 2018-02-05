<template lang="html">
  <div>
    this is a Counter component~~~~, msg is {{message}}
  </div>
</template>

<script>
export default {
  name : 'Counter',
  props: ['message'],
  data () {
    return {
        count : 0
    }
  }
}
</script>

<style lang="css">
</style>
