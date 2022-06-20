<template>
  <v-card>
    <v-card-title>Create a Room</v-card-title>

    <!-- <v-card> -->
    <v-card-text>
      <v-row>
        <v-col>
          <v-text-field
            v-model="title"
            label="Title"
            :rules="$requiredRules"
          ></v-text-field>
          <v-combobox
            v-model="selected_categories"
            label="Category"
            :items="categories"
            item-text="title"
            item-value="title"
            chips
            multiple
            :return-object="false"
          ></v-combobox>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        v-if="from_complete"
        color="blue darken-1"
        text
        @click="redirect_to_profile"
      >
        Skip
      </v-btn>
      <v-btn v-else color="blue darken-1" text @click="closeDialog">
        Close
      </v-btn>
      <v-btn color="blue darken-1" @click="save" text> Continue </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import NewMeeting from "./NewMeeting.vue";
import api from "@/services/api";
function initialState() {
  return {
    title: "",
    categories: [],
    selected_categories: [],
  };
}
export default {
  name: "NewClass",
  components: { NewMeeting },
  props: ["from_complete"],
  data: function () {
    return {
      form: "",
      // id: Math.floor(Math.random() * 1000),
      e1: 1,
      title: "",
      categories: [],
      selected_categories: [],
    };
  },
  emits: ["closeDialog"],
  // props: ["selectedDate"],
  created() {
    api.get("/categories/").then((res) => (this.categories = res.data));
  },
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("classes/add", {
          name: this.title,
          selected_categories: this.selected_categories,
        });
        this.e1 = 2;

        Object.assign(this.$data, initialState());
        this.$emit("closeDialog");
      }
    },
    to_next_step() {
      this.e1 += 1;
    },
    redirect_to_profile() {
      this.$router.push("/profile");
    },
    closeDialog() {
      this.$emit("closeDialog");
    },
  },
  computed: {},
};
</script>
<style>
</style>
