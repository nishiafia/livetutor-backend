<template>
  <v-form ref="phoneFieldForm" lazy-validation>
    <v-row class="d-flex-inline">
      <v-col cols="12" md="3">
        <v-select
          :items="countryList"
          v-model="countryCode"
          item-value="phoneCode"
          :rule="requiredRules"
        >
          <template #item="{ item }">
            <v-icon class="mx-2"> {{ item.icon }} </v-icon
            ><span class="mx-2"> {{ item.text }} </span>
          </template>
          <template #selection="{ item }">
            <v-icon class="mx-2"> {{ item.icon }} </v-icon
            ><span class="mx-2"> {{ item.phoneCode }} </span>
          </template>
        </v-select>
      </v-col>
      <v-col cols="12" md="9" class="mx-md-0 pl-md-0">
        <v-text-field @input="handleInput" :rules="phoneRules"></v-text-field>
      </v-col> </v-row
  ></v-form>
</template>

<script>
export default {
  data() {
    return {
      phoneFieldForm: "",
      countryCode: "",
      requiredRules: [(v) => !!v || "This Field is Required"],
      countries: [
        {
          text: "Bangladesh",
          value: "bd",
          phoneCode: "+88",
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

    phoneRules() {
      return [
        (v) => !!v || "Phone is required",
        (v) => /^\d{11}$/.test(v) || "Phone must be 11 digits",
      ];
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", `${this.countryCode}${e}`);
    },
  },
};
</script>

<style scoped>
</style>
