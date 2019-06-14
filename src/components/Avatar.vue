<template>
  <v-container>
    <v-flex
    xs12
    align-center
    justify-center
    text-xs-center
    >
    <v-avatar
        @click="changeAvatar"
        :tile="tile"
        :size="avatarSize"
        color="grey lighten-4"
    >
        <img src="https://cdn1.iconfinder.com/data/icons/smashicons-interactions-flat-vol-6/59/360_-_Add_Profile_interaction_communication_interface-512.png" alt="avatar">
    </v-avatar>
    </v-flex>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      tile: false,
      avatarSize: 120
    }),
    methods: {
        changeAvatar() {

        }
    }
  }
</script>