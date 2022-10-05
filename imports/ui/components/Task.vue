<template>
  <li :class="taskClassName">
    <input type="checkbox"
    readonly :checked="!!this.task.checked"
    @click="toggleChecked"
    >
    <span class="text">
      {{this.task.text}}
    </span>

    <button class="deleteBtn" @click="deleteTask">×</button>
  </li>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {}
  },
  computed: {
    taskClassName: function () {
      return this.task.checked ? "task checked" : "task";
    }
  },
  methods: {
    toggleChecked() {
      Meteor.call('tasks.setIsChecked', this.task._id, !this.task.isChecked)
    },
    deleteTask() {
      Meteor.call('tasks.remove', this.task._id);
    }
  },
}
</script>