<template>
  <v-container>
    <v-row>
      <v-app-bar>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialogCreateListingProfile" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on"> Setup Listing Account </v-btn>
          </template>
          <create-listing-profile></create-listing-profile>
        </v-dialog>
      </v-app-bar>
    </v-row>
    <v-row
      ><v-col><schedules></schedules></v-col
    ></v-row>
    <!-- <v-row class="p-2"><user-card></user-card> </v-row> -->
    <v-row class="mt-4">
      <v-col>
        <v-row>
          <v-col>
            <upcoming-meetings></upcoming-meetings>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <RoomList></RoomList>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
        <v-row>
          <v-col>
            <user-tabs></user-tabs>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserTabs from "@/components/profile/UserTabs.vue";
import RoomList from "@/components/profile/RoomList.vue";
import UpcomingMeetings from "@/components/profile/UpcomingMeetings.vue";

import Schedules from "@/components/profile/Schedules.vue";
import CreateListingProfile from "@/components/profile/forms/CreateListingProfile.vue";
export default {
  components: {
    RoomList,
    UpcomingMeetings,
    CreateListingProfile,
    Schedules,
    UserTabs,
  },
  data() {
    return {
      dialogCreateListingProfile: false,
    };
  },
};
</script>

<style lang="sass"
    CreateListingProfile></style>
