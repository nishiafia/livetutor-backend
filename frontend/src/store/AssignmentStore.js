import api from "@/services/api";
export default {
  namespaced: true,
  state: {
    assignments: [],
  },

  actions: {
    get({ commit }) {
      return api.get("/assignments/").then((response) =>
        commit(
          "load",
          response.data.map((data) => ({
            ...data,
            created_at: new Date(data.created_at).toLocaleString(),
          }))
        )
      );
    },

    add({ dispatch }, payload) {
      let formData = new FormData();
      for (var key in payload) {
        formData.append(key, payload[key]);
      }
      if (payload.attachments) {
        for (let i = 0; i < payload.attachments.length; i++) {
          formData.append("attachments[]", payload.attachments[i]);
        }
      }
      return api
        .post("assignments/", formData, { headers: { "Content-Type": "multipart/form-data" } })
        .then(() => dispatch("get"));
    },
    update({ dispatch }, { id, name, description, due_date, due_time, mark }) {
      return api
        .put("assignments/", {
          id,
          name,
          description,
          submission_date_time: `${due_date}' '${due_time}`,
          mark,
        })
        .then(() => dispatch("get"));
    },
    delete({ dispatch }, id) {
      return api.delete(`assignments/${id}`).then(() => dispatch("get"));

    },
    submit({ commit }, payload) {
      const { assignment_id, assignment_submission_files } = payload
      let formData = new FormData();
      formData.append('assignment_id', assignment_id)
      for (let i = 0; i < assignment_submission_files.length; i++) {
        formData.append("assignment_submission_files[]", assignment_submission_files[i]);
      }
      return api
        .post(`assignments/${assignment_id}/submissions/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => console.log(res));
    },
  },

  mutations: {
    load(state, payload) {
      state.assignments = payload;
    },
  },

  getters: {
    all_assignment: (state) => state.assignments,

    assignments_for_current_class: (state) => (class_id) =>
      state.assignments.filter((assignment) => assignment.room == class_id),
    get_submission_by_assignment: (state) => (assignment_id) =>
      state.submissions.filter((submission) => submission.assignment_id === assignment_id),
  },
};
