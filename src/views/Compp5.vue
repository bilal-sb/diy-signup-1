<template>
  <div>
    <v-card  class="mx-auto mt-5" elevation="0">
      <p class="text-h4 text-center font-weight-bold">Get to know your team better!</p>
      <p class="text-center">
        Invite your team to take the free personality assessment. By taking the
        assessments, you will get access to a <br> more detailed profile report
        complete with energizers, weaknesses, stressors and more!
      </p>
      <v-row justify="center" >
        <v-col cols="4" >
            <p class="font-weight-medium mt-2 mb-2">Work email</p>
            <v-text-field
              label="arjun@superbeings.ai"
              solo
              class="rounded-lg mb-2 "
              elevation="0"
              flat
              background-color="#F3F3F3"
              append-icon="mdi-check"
              suffix="invited"
              hide-details
            ></v-text-field>
            <p class="font-weight-medium mb-2 ">Work email</p>
            <v-text-field
              label="arjun@superbeings.ai"
              solo
              class="rounded-lg mb-2"
              elevation="0"
              flat
              background-color="#F3F3F3"
              append-icon="mdi-check"
              suffix="invited"
              hide-details
            ></v-text-field>
            <p class="font-weight-medium mb-2 ">Work email</p>
            <v-text-field
              label="abc@gmail.com"
              solo
              class="rounded-lg mb-2 "
              elevation="0"
              flat
              background-color="#F3F3F3"
              hide-details
            ></v-text-field>
            <p class="font-weight-medium mb-2">Work email</p>
            <v-text-field
              label="abc@gmail.com"
              solo
              class="rounded-lg mb-2"
              elevation="0"
              flat
              background-color="#F3F3F3"
              hide-details
            ></v-text-field>
          <v-divider class="mb-4" ></v-divider>
          <div  class="input-div">
            <label for="file_input_id"  > or <span>Upload List(csv, xml, xlx)</span> </label>
            <input type="file" id="file_input_id"  >
          </div>
          

        </v-col>
      </v-row>
      <v-row justify="center" class="mt-5 ml-16">
        <v-col  class="d-flex flex-row justify-end" >
            <v-img src="../assets/imagelogo.svg" max-width="72" max-height="92" contain class=" mr-10" >  </v-img>
            <div class="mr-14" >
              <p class="mt-6 mr-16 ml-0 pl-0" >We follow a very strict data policy. Encrypted and not shared with any entity. </p>
              <p  class="text-center"> <a href="#" class="text-decoration-none" > Read our commitment to protecting your data </a> </p>
            </div>
            <div class="d-flex justify-space-around mr-16" >
              <a href="#" class="text-decoration-none mt-11 mr-4 grey--text"  >Skip</a>
              <v-btn color="grey" class="mt-10 white--text" depressed tile > Invite & Proceed </v-btn>
            </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<style>

.input-div{
  padding-left: 150px;
}

label span{
  color: #1976d2;
  cursor: pointer;
}

label span:hover{
  text-decoration: underline;
}

#file_input_id{
  display:none;
}


</style>