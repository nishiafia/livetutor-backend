<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col md="6">
        <v-card class="mx-4 pa-4">
          <v-form
            ref="form"
            v-if="!otp_verified"
            @submit.prevent="check_mobile"
            method="POST"
          >
            <PhoneField v-model="mobile" :rules="$requiredRules"></PhoneField>
            <!-- <vue-tel-input-vuetify
              v-model="mobile"
              :rules="$phoneRules"
              counter="11"
              type="tel"
            ></vue-tel-input-vuetify> -->
            <v-alert type="info" class="d-flex align-items-center">
              Please save the below pin code for your login
            </v-alert>
            <!-- #TODO: READONLY -->
            <v-text-field
              :rules="$requiredRules"
              v-model="password"
              :value="password"
            ></v-text-field>

            <v-btn type="submit" color="success" block>Continue</v-btn>
          </v-form>
          <v-form v-if="otp_verified" ref="form2" lazy-validation>
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
              label="Email"
              :rules="$requiredRules"
            ></v-text-field>

            <v-btn @click="register" color="success" block
              >Create Account</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/services/api";
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
      address: "",
      email: "",
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
      }
    },
    register() {
      if (this.$refs.form2.validate()) {
        const data = {
          name: this.name,
          email: this.email,
          phone: this.mobile.replace("-", ""),
          address: this.address,
          password: this.password,
        };
        axios
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
