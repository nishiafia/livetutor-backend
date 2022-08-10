<template>
  <v-card height="300">
    <v-toolbar color="secondary" flat dark>
      <v-toolbar-title
        v-html="$store.getters['user/getName']"
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-cog-outline</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-dialog
            v-model="dialogShowTeacherBooking"
            width="600"
            min-height="600"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item text v-bind="attrs" v-on="on" link>
                <v-icon class="px-2" color="accent">mdi-book-edit</v-icon>Manage
                Bookings
              </v-list-item>
            </template>
            <Bookings></Bookings>
          </v-dialog>

          <v-dialog v-model="dialogCreateListingProfile" width="800">
            <template v-slot:activator="{ on, attrs }">
              <v-list-item text v-bind="attrs" v-on="on">
                <v-icon class="px-2" color="accent">mdi-file-cog</v-icon> Manage
                Listing Account
              </v-list-item>
            </template>
            <create-listing-profile></create-listing-profile>
          </v-dialog>
          <v-dialog v-model="dialogAssignUsersToRooms" width="800" height="600">
            <template v-slot:activator="{ on, attrs }">
              <v-list-item text v-bind="attrs" v-on="on">
                <v-icon class="px-2" color="accent">mdi-file-cog</v-icon> Assign
                Users to Rooms
              </v-list-item>
            </template>
            <UploadOrganizationUsersRooms
              @closeDialog="closeDialog('dialogAssignUsersToRooms')"
            ></UploadOrganizationUsersRooms>
          </v-dialog>
          <v-list-item
            text
            v-bind="attrs"
            v-on="on"
            link
            to="/organization-payments"
          >
            <v-icon class="px-2" color="accent">mdi-file-cog</v-icon> Manage
            Payments
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-card>
</template>

<script>
import CreateListingProfile from "./forms/CreateListingProfile.vue";
import Bookings from "./Bookings.vue";
import UploadOrganizationUsersRooms from "./forms/UploadOrganizationUsersRooms.vue";
export default {
  components: { CreateListingProfile, Bookings, UploadOrganizationUsersRooms },
  data() {
    return {
      dialogShowTeacherBooking: false,
      dialogCreateListingProfile: false,
      dialogAssignUsersToRooms: false,
    };
  },
  methods: {
    closeDialog(dialog) {
      this[dialog] = false;
    },
  },
};
</script>

<style>
</style>
