<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Create New Note</span>
    </v-card-title>
    <v-form ref="form" v-on:submit.prevent="save" class="pa-4">
      <v-row>
        <v-col>
          <v-text-field
            v-model="name"
            label="Title"
            hide-details="auto"
            :rules="$requiredRules"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-select
            v-if="!class_id"
            v-model="selected_class"
            label="Select Class"
            :items="user_created_classes"
            item-text="name"
            item-value="id"
            :rules="$requiredRules"
            persistent-hint
            :hint="`Room: ${selected_class.name || 'Not Selected'} | Section: ${
              selected_class.section || 'Not Selected'
            } | Session: ${selected_class.session || 'Not Selected'}`"
            return-object
          >
            <template v-slot:selection="{ item }"
              >{{ item.name }} - {{ item.section }}
            </template>
            <template v-slot:item="{ item }"
              >{{ item.name }} - {{ item.section }}
            </template>
          </v-select>
        </v-col>

        <!-- <v-row>
            <v-text-field
              v-model="topic"
              label="Topic"
              hide-details="auto"
            ></v-text-field>
          </v-row> -->
      </v-row>
      <v-row>
        <v-text-field
          v-model="details"
          label="Short Description"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-file-input
          v-model="attachments"
          accept=".doc,.docx,.pdf,.jpg,.jpeg,.png"
          chips
          show-size
          multiple
          counter
        ></v-file-input>
      </v-row>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('closeDialog')">
          Close
        </v-btn>
        <v-btn type="submit" color="blue darken-1" text> Save </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
import api from "@/services/api";
import { mapGetters } from "vuex";
function initialState() {
  return {
    form: "",
    name: "",
    details: "",
    date: "",
    attachments: {},
    menu: false,
    topic: "",
    selected_class: {},
    // classes: this.$store.state.classes.classes,
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
  };
}
export default {
  props: ["class_id"],

  data: function () {
    return {
      form: "",
      name: "",
      details: "",
      date: "",
      attachments: {},
      menu: false,
      topic: "",
      selected_class: {},
      // classes: this.$store.state.classes.classes,
      colors: [
        "blue",
        "indigo",
        "deep-purple",
        "cyan",
        "green",
        "orange",
        "grey darken-1",
      ],
    };
  },
  emits: ["closeDialog"],
  // props: ["selectedDate"],

  methods: {
    save() {
      if (this.$refs.form.validate()) {
        const data = {
          name: this.name,
          description: this.details,
          room: this.class_id ? this.class_id : this.selected_class.id,
          // created_at: new Date().toLocaleString(),
          attachments: this.attachments,
        };
        this.$store.dispatch("notes/add", data);
        Object.assign(this.$data, initialState());
        this.$emit("closeDialog");
      }
    },
    getSelectText(item) {
      return item.section;
    },
  },
  computed: {
    today() {
      return new Date(new Date() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10);
    },
    ...mapGetters({ user_created_classes: "classes/get_user_owned_classes" }),
  },
};
</script>
<style></style>
