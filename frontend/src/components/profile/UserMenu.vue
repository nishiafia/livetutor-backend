<template>
  <v-card height="300">
    <v-toolbar color="secondary" flat dark>
      <v-toolbar-title
        v-html="$store.getters['user/getUsername']"
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
            width="800"
            min-height="400"
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
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-card>
</template>

<script>
import CreateListingProfile from "./forms/CreateListingProfile.vue";
import Bookings from "./Bookings.vue";
export default {
  components: { CreateListingProfile, Bookings },
  data() {
    return {
      dialogShowTeacherBooking: false,
      dialogCreateListingProfile: false,
    };
  },
};
</script>

<style>
</style>
