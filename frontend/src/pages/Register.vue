<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4">
        <v-card class="mx-4 pa-4">
          <v-form ref="form" v-if="!otp_verified">
            <PhoneField v-model="mobile" :rules="$requiredRules"></PhoneField>
            <v-alert type="info" class="d-flex align-items-center">
              Please save the below pin code for your login
            </v-alert>
            <v-text-field
              readonly
              :rules="$requiredRules"
              v-model="password"
            ></v-text-field>
            <v-btn @click="check_mobile()" color="success" block
              >Continue</v-btn
            >
          </v-form>
          <v-form ref="form2" v-show="otp_verified">
            <v-text-field
              v-model="name"
              label="Full Name"
              :rules="$requiredRules"
            >
            </v-text-field>
            <v-text-field
              v-model="address"
              :rules="$requiredRules"
              label="Address"
            ></v-text-field>
            <v-text-field
              v-model="email"
              type="email"
              :rules="$requiredRules"
              label="Email"
            ></v-text-field>
            <v-btn @click="register()" color="success" block
              >Create Account</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Individual from "../components/register/Individual.vue";
import Institution from "../components/register/Institution.vue";
import PhoneField from "../components/global/PhoneField.vue";
export default {
  components: { Individual, Institution, PhoneField },
  name: "Register",
  data() {
    return {
      form: "",
      form2: "",
      name: "",
      mobile: "",
      address: undefined,
      email: undefined,
      password: Math.random().toString().slice(2, 6),
      otp: "",
      pass_generated: false,
      server_otp: "",
      otp_verified: false,
      reg_complete: false,
      profile_completed: false,
    };
  },
  methods: {
    check_mobile() {
      if (this.$refs.form.validate()) {
        this.otp_verified = true;
        this.$refs.form2.resetValidation();
      }
    },
    register() {
      if (this.$refs.form2.validate()) {
        const data = {
          name: this.name,
          phone: this.mobile,
          address: this.address,
          password: this.password,
          email: this.email,
        };
        return axios
          .post(
            process.env.NODE_ENV === "production"
              ? "https://www.apps.livetutor.com.bd/api/users/"
              : "http://localhost:8000/api/users/",
            data,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(() =>
            this.$store.dispatch("user/login", {
              phone: this.mobile.replace("-", ""),
              password: this.password,
            })
          )
          .then(() => this.$router.push("/profile"))
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
