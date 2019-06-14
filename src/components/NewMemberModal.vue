<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Member Info</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout class="justify-center">
                <avatar></avatar>
            </v-layout>
            <v-layout wrap>
              <v-flex xs6>
                <v-text-field label="first name" required></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field label="last name"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import Avatar from '@/components/Avatar'
  export default {
    data: () => ({
      dialog: false
    }),
    methods: {
        toggle: function(){
            this.dialog = !this.dialog;
        }
    },
    components: {
        Avatar
    }
  }
</script>
