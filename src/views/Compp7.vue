<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-img
          src="../assets/sb-logo-bg.svg"
          width="321"
          height="321"
          class="img1"
        ></v-img>
      </v-col>
      <v-col cols="4">
          <p class="text-center text-h6 mt-12">Hi Kunal,</p>
          <p class="text-center text-h4 font-weight-bold mt-4 mb-10 pb-10">
            Welcome to Superbeings!
          </p>
          <p class="text-center text-h6 mt-16 pt-16">
            “Congrats on taking the first steps towards <br />
            making work fulfilling for everyone”
          </p>

          <v-list width="40%" class="mx-auto">
            <v-list-item class="justify-center">
              <v-list-item-avatar>
                <v-img src="../assets/avatar-img.svg"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title> -Master Lao </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        <div class="text-center">
          <v-btn class="primary justify-center mx-" large text>
            Try our demo account
          </v-btn>
        </div>
      </v-col>
      <v-col cols="4">
        <v-img
          src="../assets/sb-logo-bg.svg"
          width="321"
          height="321"
          class="ml-16 img2"

        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>


<style>
.img1 {
  position: absolute;
  bottom: 60px;
  left: 100px;
}
.img2 {
  position: absolute;
  right: 80px;
  top: 60px;
}
</style>


