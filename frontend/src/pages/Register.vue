<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col md="6">
        <v-card class="mx-4 pa-4">
          <v-form
            v-if="!otp_verified"
            @submit.prevent="check_mobile"
            method="POST"
          >
            <!-- <v-text-field
              v-model="mobile"
              label="Phone"
              prepend-icon="bd"
              placeholder="01245231242"
              type="tel"
              required
            >
              <template #prepend-content><CIcon name="cif-bd" /></template>
            </v-text-field> -->
            <vue-tel-input-vuetify v-model="mobile"></vue-tel-input-vuetify>
            <v-alert type="info" class="d-flex align-items-center">
              Please save the below pin code for your login
            </v-alert>
            <!-- #TODO: READONLY -->
            <v-text-field v-model="password" :value="password"></v-text-field>

            <v-btn type="submit" color="success" block>Continue</v-btn>
          </v-form>

          <v-form v-if="otp_verified" @submit.prevent="register" method="POST">
            <v-radio-group row v-model="user_type">
              <v-radio
                v-for="{ value, label } in user_types"
                :key="value"
                :label="label"
                :value="value"
              ></v-radio>
            </v-radio-group>
            <!-- <v-radio
                v-for="{ value, label } in user_types"
                name="user_type"
                :checked="user_type.label === label"
                :key="value"
                :value="value"
                :label="label"
                @change="set_user_type($event, label)"
              /> -->
            <v-text-field
              required
              label="Full Name"
              autocomplete="name"
              v-model="name"
            >
            </v-text-field>
            <Individual
              v-if="user_type === 1"
              @set_education="set_education($event)"
            ></Individual>
            <Institution
              v-else-if="user_type === 2"
              @set_org_name="set_org_name($event)"
              @set_org_type="set_org_type($event)"
            ></Institution>
            <v-text-field v-model="address" label="Address"></v-text-field>
            <v-select
              v-model="city"
              label="Select Your City"
              :items="cities"
              item-text="label"
              item-value="value"
            >
            </v-select>
            <v-text-field
              type="email"
              v-model="email"
              label="Email"
            ></v-text-field>
            <!-- <v-text-field
                  type="password"
                  v-model="password"
                  placeholder="Password"
                ></v-text-field>
                <v-text-field
                  type="password"
                  v-model="password_confirmation"
                  placeholder="Password Confirmation"
                ></v-text-field> -->
            <v-btn type="submit" color="success" block>Create Account</v-btn>
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
export default {
  components: { Individual, Institution },
  data() {
    return {
      name: "",
      mobile: "",
      address: "",
      city: "",
      email: "",
      password: Math.random().toString().slice(2, 6),
      // password_confirmation: "",
      cities: [],
      user_types: [],
      user_type: {},
      otp: "",
      pass_generated: false,
      server_otp: "",
      otp_verified: false,
      org_name: "",
      org_type: "",
      education: "",
      // country_code: +880,
      reg_complete: false,
      profile_completed: false,
    };
  },

  created: function () {
    api.get("/cities").then(
      (res) =>
        (this.cities = res.data.map((city) => ({
          value: city.id,
          label: city.name,
        })))
    );

    api
      .get("/usertypes")
      .then((res) => {
        const user_types = res.data.map((user_type) => ({
          label: user_type.name,
          value: user_type.id,
        }));

        console.log(user_types);
        return user_types;
      })
      .then((user_types) => {
        this.user_type = user_types[0].value;
        this.user_types = user_types;
      });
  },
  // watch: {
  //   org_type(newVal, oldVal) {
  //     if (newVal !== oldVal) this.set_org_type(newVal);
  //   },
  // },
  methods: {
    set_education(education) {
      this.education = education;
    },
    set_org_name(name) {
      this.org_name = name;
    },
    set_org_type(type) {
      this.org_type = type;
    },

    check_mobile() {
      this.otp_verified = true;
      // if (this.otp === this.server_otp) {
      //   this.otp_verified = true;
      // }
    },
    set_user_type(event, label) {
      console.log(event);
      this.user_type = { label: label, value: event.target.value };
    },
    register() {
      var self = this;
      const data = {
        name: self.name,
        email: self.email,
        phone: this.mobile.replace("-", ""),
        address: self.address,
        country_code: self.country_code,
        city: self.city,
        user_type: self.user_type,
        password: self.password,
        password_confirmation: self.password_confirmation,
        reg_complete: false,
        profile_complete: false,
      };
      const institution_based_fields = {
        ...data,
        org_name: self.org_name,
        org_type: self.org_type,
      };
      const individual_based_fields = {
        ...data,
        education: self.education,
      };
      axios
        .post(
          "/api/users/",
          self.user_type.label === "individual"
            ? individual_based_fields
            : institution_based_fields
        )
        .then(function () {
          self.$store
            .dispatch("user/login", {
              phone: self.mobile.replace("-", ""),
              password: self.password,
            })
            .then(
              () => self.$router.push("/profile")
              // self.$store.getters["user/loggedIn"]
              //   ? self.$router.push("/complete")
              //   : null
            );
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
