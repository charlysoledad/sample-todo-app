<template>
  <form class="task-form" @submit.prevent="handleSubmit">
    <input type="text" placeholder="Type to add new task" v-model="newTask">
    <button type="submit">Add Task</button>
  </form>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import { TasksCollection } from "../../db/TasksCollection";

export default {
  data() {
    return {
      newTask: "",
    }
  },
  methods: {
    handleSubmit(event) {
      if (this.newTask.length === 0) return;

      Meteor.call('tasks.insert', this.newTask.trim());
      // Clear form
      this.newTask = "";
    }
  },
}
</script>