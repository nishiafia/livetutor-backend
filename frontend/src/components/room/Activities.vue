<template>
  <v-timeline align-top dense>
    <v-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :color="activity.color"
    >
      <v-row>
        <v-col class="px-0">
          <v-card outlined class="p-2">
            <v-row align="center">
              <v-col>
                <v-card-text>{{ activity.created_at }}</v-card-text>
              </v-col>

              <v-col class="text-right">
                <v-chip
                  class="mx-1"
                  dark
                  :color="activity.color"
                  v-text="activity.type"
                ></v-chip>
                <v-chip
                  v-if="activity.mark"
                  class="mx-1"
                  dark
                  color="#95CD41"
                  v-text="`mark: ${activity.mark}`"
                ></v-chip>
                <v-btn
                  v-if="owner"
                  icon
                  :to="{
                    name: `${activity.type}s`,
                    params: { id: activity.id },
                  }"
                  ><v-icon>mdi-arrow-top-right</v-icon></v-btn
                >
              </v-col>
            </v-row>
            <v-card-title>{{ activity.name }}</v-card-title>

            <v-card-text>{{ activity.description }}</v-card-text>

            <!-- <v-card-text
              v-if="activity.type == 'assignment' || 'exam'"
              v-html="activity.mark"
            ></v-card-text> -->
            <v-row class="pa-4" justify="center">
              <v-col
                v-for="file in activity.files"
                :key="file.id"
                class="ma-2 pa-2 elevation-1"
                cols="12"
                lg="4"
                md="6"
              >
                <v-img
                  v-if="
                    file.file
                      .split('.')
                      .pop()
                      .match(/(jpg|jpeg|png|gif)$/i)
                  "
                  :src="file.file"
                  max-width="100%"
                  height="150"
                  @click="openFile(file.file)"
                  class="grey lighten-2"
                />
                <v-img
                  v-else
                  max-width="100%"
                  height="150"
                  @click="openFile(file.file)"
                >
                  <v-row justify="center" align="center" class="fill-height">
                    <h1>{{ file.file.split(".").pop() }}</h1>
                  </v-row>
                </v-img>
              </v-col>
            </v-row>

            <v-card-actions v-if="activity.type == 'assignment' || 'exam'">
              <v-file-input
                v-if="!owner && activity.type !== 'note'"
                class="pr-2"
                multiple
                small-chips
                counter
                prepend-inner-icon="mdi-file-upload"
                prepend-icon=""
                v-model="activity.attachments"
                hint="Select single/multiple files"
                :label="
                  activity.type === 'exam'
                    ? 'Submit your Answer'
                    : 'Submit your Assignment'
                "
                append-icon="mdi-check"
                @click:append="
                  activity.type === 'exam'
                    ? submitAnswer(activity)
                    : submitAssignment(activity)
                "
              >
              </v-file-input>
            </v-card-actions>

            <v-list-group>
              <template v-slot:activator>
                <v-list-item-title>Comments</v-list-item-title>
              </template>
              <v-list-item>
                <v-text-field
                  v-model="activity.comment"
                  append-icon="mdi-send"
                  @click:append="submitComment(activity)"
                >
                </v-text-field
              ></v-list-item>

              <v-list-item
                v-for="comment in activity.comments"
                :key="comment.id"
              >
                <v-list-item-content>
                  <v-list-item-title v-html="comment.text"></v-list-item-title>

                  <v-list-item-subtitle
                    v-html="comment.user_name"
                  ></v-list-item-subtitle>
                  <v-list-item-subtitle
                    v-text="new Date(comment.created_at).toLocaleString()"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-group> </v-card
        ></v-col>
      </v-row>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import api from "@/services/api";

export default {
  props: ["class_id"],
  // created() {
  //   this.$store.dispatch("assignments/get");
  //   this.$store.dispatch("exams/get");
  //   this.$store.dispatch("notes/get");
  // },
  computed: {
    activities() {
      const assignments_g = this.$store.getters[
        "assignments/assignments_for_current_class"
      ](this.class_id);
      console.log(assignments_g);
      const assignments = assignments_g.map((assignment) => ({
        ...assignment,
        type: "assignment",
        color: "orange",
      }));

      const notes_g = this.$store.getters["notes/notes_for_current_class"](
        this.class_id
      );
      const notes = notes_g.map((note) => ({
        ...note,
        type: "note",
        color: "blue",
      }));
      const exams_g = this.$store.getters["exams/exams_for_current_class"](
        this.class_id
      );
      const exams = exams_g.map((exam) => ({
        ...exam,
        type: "exam",
        color: "green",
      }));
      const activities = [...assignments, ...notes, ...exams];

      return activities.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    },

    owner() {
      return this.$store.getters["classes/is_class_owner"](this.class_id);
    },
  },
  methods: {
    /*
     *submit assignment
     *params: id->activity id
     */

    submitAssignment({ id, attachments, class_id }) {
      const assignment_id = id;
      const assignment_submission_files = attachments;

      this.$store.dispatch("assignments/submit", {
        assignment_id,
        assignment_submission_files,
        class_id,
      });
    },
    submitAnswer({ id, attachments }) {
      const exam_id = id;
      const exam_submission_files = attachments;
      this.$store.dispatch("exams/submit", { exam_id, exam_submission_files });
    },

    submitComment({ id, comment, type }) {
      api
        .post(`${type}s/${id}/comments/`, { [type]: id, text: comment })
        .then((r) => console.log(r));
    },
    openFile(file) {
      window.open(file);
    },
  },
};
</script>

<style></style>
