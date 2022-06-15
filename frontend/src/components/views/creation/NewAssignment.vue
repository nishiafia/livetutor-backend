<template>
  <v-card class="pa-4">
    <v-card-title>
      <span class="text-h5">Create New Assignment {{ this.class_id }}</span>
    </v-card-title>
    <v-form v-on:submit.prevent="save">
      <v-row>
        <v-col>
          <v-text-field
            v-model="name"
            label="Title"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-select
            v-if="!class_id"
            v-model="selected_class"
            label="Select Class"
            :items="classes"
            item-text="name"
            item-value="id"
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
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="details"
            label="Short Description"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            type="number"
            v-model="mark"
            label="Mark"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-file-input
          label="Attachments"
          v-model="attachments"
          accept=".doc,.docx,.pdf,.jpg,.jpeg,.png"
          chips
          show-size
          multiple
          counter
        ></v-file-input>
      </v-row>
      <v-row>
        <v-col>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="due_date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="due_date"
                label="Assignment Due Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due_date" :min="today" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(due_date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col>
          <v-menu
            ref="menu2"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="due_time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="due_time"
                label="Assignment Due Time"
                prepend-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu2"
              ampm-in-title
              format="ampm"
              v-model="due_time"
              full-width
              @click:minute="$refs.menu2.save(due_time)"
            ></v-time-picker>
          </v-menu>
        </v-col>
      </v-row>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('closeDialog')">
          Close
        </v-btn>
        <v-btn color="blue darken-1" type="submit" text> Save </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
function initialState() {
  return {
    name: "",
    details: "",
    due_date: null,
    start: null,
    due_time: null,
    menu: false,
    menu2: false,
    mark: 0,
    selected_class: {},
    attachments: {},
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
      name: "",
      details: "",
      due_date: null,
      start: null,
      due_time: null,
      menu: false,
      menu2: false,
      selected_class: {},
      attachments: {},
      mark: 0,
      classes: this.$store.state.classes.classes,
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
      this.$store.dispatch("assignments/add", {
        name: this.name,
        description: this.details,
        attachments: this.attachments,
        room: this.class_id ? this.class_id : this.selected_class.id,
        submission_date_time: `${this.due_date} ${this.due_time}`,
        mark: this.mark,
      });
      Object.assign(this.$data, initialState());
      this.$emit("closeDialog");
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
  },
};
</script>
<style></style>
