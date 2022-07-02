<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="5">
        <v-card elevation="2" class="pa-4" min-height="320">
          <v-form @submit.prevent="login" ref="form">
            <v-card-title>Login</v-card-title>
            <v-card-subtitle class="text-muted"
              >Sign In to your account</v-card-subtitle
            >
            <vue-tel-input-vuetify
              v-model="mobile"
              :rules="$phoneRules"
              counter="11"
              type="tel"
            ></vue-tel-input-vuetify>
            <v-text-field
              :rules="$requiredRules"
              v-model="password"
              label="Password"
              type="password"
              autocomplete="curent-password"
            >
            </v-text-field>
            <v-row>
              <v-col cols="6">
                <v-btn type="submit" outlined color="primary lighten-2"
                  >Login</v-btn
                >
              </v-col>
              <v-col col="6" class="text-right">
                <v-btn outlined color="red lighten-2">Forgot password?</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card
          dark
          elevation="2"
          color="#406882"
          min-height="320"
          class="text-center pa-4"
        >
          <v-card-title>Sign up</v-card-title>
          <p>
            Live Tutor, provides a seamless experience to the student, teacher
            and organization about tutoring.
          </p>
          <v-btn color="primary lighten-5" outlined @click="goRegister()">
            Register Now!
          </v-btn>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      form: "",
      mobile: "",
      password: "",
      showMessage: false,
      message: "",
    };
  },
  methods: {
    goRegister() {
      this.$router.push({ path: "register" });
    },
    login() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("user/login", {
            phone: this.mobile.replace("-", ""),
            password: this.password,
          })
          .then(() => this.$router.push("/profile"))
          .catch(() => alert("Could Not Log In"));
      }
    },
  },
};
</script>
