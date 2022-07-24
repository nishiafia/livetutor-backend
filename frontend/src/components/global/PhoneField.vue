<template>
  <v-form ref="phoneFieldForm" lazy-validation>
    <v-row class="d-flex-inline">
      <v-col cols="12" md="3">
        <v-select
          :items="countries"
          v-model="countryCode"
          item-value="phone_code"
          :rule="requiredRules"
        >
          <template #item="{ item }">
            <v-img width="32" height="16" v-html="item.flag"></v-img>
            <span class="mx-2"> {{ item.name }} </span>
          </template>
          <template #selection="{ item }">
            <v-img v-html="item.flag"></v-img>

            <!-- <v-icon class="mx-2"> {{ item.icon }} </v-icon
            > -->
            <span class="mx-2"> {{ item.phone_code }} </span>
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
      countries: [],
    };
  },

  computed: {
    phoneRules() {
      return [
        (v) => !!v || "Phone is required",
        (v) => /^\d{11}$/.test(v) || "Phone must be 11 digits",
      ];
    },
  },
  created() {
    this.loadCountries();
  },
  methods: {
    loadCountries() {
      this.$api.get("/locations/countries/").then((res) => {
        this.countries = res.data;
      });
    },
    handleInput(e) {
      this.$emit("input", `${this.countryCode}${e}`);
    },
  },
};
</script>

<style scoped>
</style>
