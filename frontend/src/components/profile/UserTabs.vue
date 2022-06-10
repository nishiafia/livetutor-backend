<template>
  <v-card>
    <v-toolbar dark color="third"><v-toolbar-title>At a glance</v-toolbar-title></v-toolbar>
    <v-tabs color="light-yellow" right>
      <v-tab>Assignments</v-tab>
      <v-tab>Notes</v-tab>
      <v-tab>Exams</v-tab>
      <v-tab-item><tabs-assignments :class_id="class_id"></tabs-assignments></v-tab-item>
      <v-tab-item><TabsNotes :class_id="class_id"></TabsNotes></v-tab-item>
      <v-tab-item><tabs-exams :class_id="class_id"></tabs-exams></v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import TabsAssignments from "./TabsAssignments.vue";
import TabsExams from "./TabsExams.vue";
import TabsNotes from "./TabsNotes.vue";

export default {
  components: { TabsAssignments, TabsNotes, TabsExams },
  props: ["class_id"],
};
</script>
