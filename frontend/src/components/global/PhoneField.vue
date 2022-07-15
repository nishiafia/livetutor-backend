<template>
  <div class="inn">
    <v-select :items="countryList" flat dense class="pa-0 ma-0">
      <template #item="{ item }">
        <v-icon> {{ item.icon }} </v-icon> {{ item.text }}
      </template>
      <template #selection="{ item }">
        <span>
          <v-icon> {{ item.icon }} </v-icon> {{ item.phoneCode }}
        </span>
      </template>
    </v-select>
    <v-text-field></v-text-field>
  </div>
  <!-- <v-text-field>
    <template slot="prepend">
      <v-select :items="countryList" flat dense class="pa-0 ma-0">
        <template #item="{ item }">
          <v-icon> {{ item.icon }} </v-icon> {{ item.text }}
        </template>
        <template #selection="{ item }">
          <span>
            <v-icon> {{ item.icon }} </v-icon> {{ item.phoneCode }}
          </span>
        </template>
      </v-select>
    </template>
  </v-text-field> -->
</template>

<script>
export default {
  data() {
    return {
      countries: [
        {
          text: "Bangladesh",
          value: "bd",
          phoneCode: "+880",
          icon: "flagBD",
          maxDigit: 11,
        },
      ],
    };
  },
  computed: {
    countryList() {
      return this.countries.map((country) => {
        return {
          ...country,
          icon: `$vuetify.icons.${country.icon}`,
        };
      });
    },
  },
};
</script>

<style scoped>
.inn {
  display: inline-flex;
}
</style>
