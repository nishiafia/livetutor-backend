<template>
  <v-container>
    <v-row>
      <v-col
        ><class-description :class_id="class_id"></class-description>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <schedules :class_id="class_id"></schedules>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="6" cols="12"
        ><activities :class_id="class_id"></activities
      ></v-col>
      <v-col class="mt-5" lg="6" cols="12">
        <user-tabs :class_id="class_id"></user-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TabsAssignments from "../components/profile/TabsAssignments.vue";
import Schedules from "../components/profile/Schedules.vue";
import TabsExams from "../components/profile/TabsExams.vue";
import TabsNotes from "../components/profile/TabsNotes.vue";
import Activities from "../components/room/Activities.vue";
import ClassDescription from "../components/room/ClassDescription.vue";
import EnrolledStudents from "../components/room/EnrolledStudents.vue";
import UserTabs from "../components/profile/UserTabs.vue";
export default {
  name: "Room",
  components: {
    Schedules,
    TabsAssignments,
    TabsExams,
    Activities,
    ClassDescription,
    EnrolledStudents,
    TabsNotes,
    UserTabs,
  },
  data: () => ({
    dialog: false,
  }),

  computed: {
    class_id() {
      return this.$route.params.id;
    },
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style></style>
