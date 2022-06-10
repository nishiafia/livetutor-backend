<template>
  <v-card color="grey lighten-4" class="mt-4">
    <v-toolbar width="100%" dark color="third">
      <v-toolbar-title>My Rooms</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog_join_class" persistent width="400px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined v-bind="attrs" v-on="on" class="p-2 mr-2">Join Room</v-btn>
        </template>
        <JoinRoom @closeDialog="join_class_close_dialog"> </JoinRoom>
      </v-dialog>
      <v-dialog v-model="dialog_new_class" persistent max-width="850px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined v-bind="attrs" v-on="on" class="p-2">New Room </v-btn>
        </template>
        <NewRoom @closeDialog="new_class_close_dialog"> </NewRoom>
      </v-dialog>
    </v-toolbar>
    <v-container>
      <v-card
        v-for="cls in classes"
        v-bind:key="cls.id"
        class="mb-3"
        style="max=width: 540px"
        elevation="3"
        outlined
      >
        <v-card-title
          >{{ cls.name }}

          <v-chip class="mx-1" small color="#FFC900" dark v-if="cls.is_author">Your Room</v-chip>
          <v-chip v-if="cls.organization" small color="#BFC900" dark class="mx-1"
            ><span v-if="cls.organization">{{ cls.organization }} </span>
            <span v-if="cls.branch">|| {{ cls.branch }}</span></v-chip
          >
          <v-chip class="mx-1" small color="orange lighten-2" dark v-if="cls.trial"
            >Trial Room</v-chip
          >
          <v-btn :to="{ name: 'room', params: { id: cls.id } }" icon>
            <v-icon> mdi-call-made </v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>{{ cls.code }}</v-card-subtitle>
        <v-card-text v-if="cls.categories.length">
          Category:
          <v-chip class="mx-1" v-for="{ name, id } in cls.categories" :key="id">{{ name }}</v-chip>
        </v-card-text>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
import NewRoom from "../views/creation/NewRoom.vue";
import JoinRoom from "../views/general/JoinRoom.vue";
export default {
  components: { NewRoom, JoinRoom },
  data() {
    return {
      dialog_new_class: false,
      dialog_join_class: false,
    };
  },
  computed: {
    classes() {
      return this.$store.state.classes.classes;
    },
  },
  // created() {
  //   this.$store.dispatch("classes/get");
  // },
  methods: {
    new_class_close_dialog() {
      this.dialog_new_class = false;
    },
    join_class_close_dialog() {
      this.dialog_join_class = false;
    },
  },
};
</script>

<style></style>
