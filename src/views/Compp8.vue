<template>
  <v-row justify="center">
    <v-btn color="primary mt-4" dark @click.stop="dialog = true">
      Open Dialog
    </v-btn>

    <v-dialog v-model="dialog" max-width="680" max-height="697">
      <v-card>
        <v-img
          src="../assets/demo-page-img.svg"
          max-width="219"
          max-height="361"
          class="justify-center mx-auto"
        ></v-img>
        <p class="text-center mx-16">
          Feel free to explore our demo dashboard. You may choose to exit the
          demo at any time & start onboarding your team.
        </p>
        <p class="text-caption text-center">
          (Note: You have been granted admin privilages, both HR & Manager
          dashboards are accessible)
        </p>
        <div class="text-center">
          <v-btn
            class="primary justify-center mx-"
            large
            text
            
          >
            Try our demo account
          </v-btn>
        </div>
        <p class="text-center mb-0">or</p>
        <p class="text-center pb-6 mb-0">
          <a class="text-decoration-none">Start Your Free 15-Day Trial</a>
        </p>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>