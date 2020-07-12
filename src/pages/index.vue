<template>
  <v-layout
  >
   <taskListPanel />
  </v-layout>
</template>

<script>
import Vuex from 'vuex'
import TaskListPanel from '~/components/TaskListPanel.vue'

export default {
  components: {
    TaskListPanel
  }
}
new Vuex.Store({
})
</script>
