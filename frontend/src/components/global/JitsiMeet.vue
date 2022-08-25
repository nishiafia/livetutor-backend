<template>
  <v-container fill-height fluid>
    <div ref="jitsiContainer" style="height: 100%; width: 100%"></div>
  </v-container>
</template>

<script>
export default {
  props: {
    roomName: {
      type: String,
      default: "openLounge",
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    this.loadJitsiScript().then(() => {
      this.loading = true;
      this.initJitsi();
      this.loading = false;
    });
  },
  methods: {
    loadJitsiScript() {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src =
          "https://" + process.env.VUE_APP_JITSI_BASEURL + "/external_api.js";
        document.head.appendChild(script);
        script.onload = () => {
          return resolve();
        };
        script.onerror = () => {
          return reject();
        };
      });
    },
    initJitsi() {
      const options = {
        roomName: this.roomName,
        parentNode: this.$refs.jitsiContainer,
        startWithAudioMuted: true,
        startWithVideoMuted: true,
      };

      this.meet = new window.JitsiMeetExternalAPI(
        process.env.VUE_APP_JITSI_BASEURL,
        options
      );
    },
  },
};
</script>

<style>
</style>
