<template lang="html">
  <div>
    this is a Counter component~~~~, msg is {{extMost}}
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
  },
  computed : {
    extMost : function () {
      return 'nihao   ' + this.message;
    }
  }
}
</script>

<style lang="css">
</style>
