<template>
  <v-card>
    <v-app-bar color="#406882" dark scroll-target="#scrolling-techniques-6">
      <v-toolbar-title>Room Attendants</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialogInviteToRoom" width="800" height="800">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon><v-icon>mdi-plus</v-icon></v-btn>
        </template>
        <invite-to-room :class_id="class_id"></invite-to-room>
      </v-dialog>
    </v-app-bar>
    <v-list>
      <v-list-item v-for="room_user in users" :key="room_user.id">
        {{ room_user }}
        {{ room_user.user.email }}
        <v-chip
          class="mx-1"
          small
          color="orange lighten-2"
          dark
          v-if="room_user.user.trial"
          >Trial User</v-chip
        >

        <v-btn icon><v-icon>mdi-delete</v-icon></v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import api from "@/services/api";
import InviteToRoom from "../views/general/InviteToRoom.vue";
export default {
  components: { InviteToRoom },
  props: ["class_id", "class_owner"],
  data() {
    return { users: [], dialogInviteToRoom: false };
  },
  created() {
    api
      .get(`rooms/${this.class_id}/users/`)
      .then((res) => (this.users = res.data));
  },
};
</script>

<style>
</style>
