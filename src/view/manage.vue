<template>
  <div>
    <v-card>
      <v-card-title>
        회원목록
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <userlist :search="search" :user-click="userClick"></userlist>
    </v-card>
    <v-btn fab dark color="indigo" @click="createUserBtn">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    <manageDialog v-model="dialog" :user-data="userData" :updateyn="updateYN"></manageDialog>
  </div>
</template>

<script>
import userlist from "../components/userlist";
import manageDialog from "../components/manageDialog";

export default {
  data() {
    return {
      search: "",
      dialog: false,
      userData: "",
      updateYN: false,
    };
  },
  components: {
    userlist,
    manageDialog,
  },
  methods: {
    createUserBtn: function () {
      this.userData = "";
      this.dialog = true;
      this.updateYN = false;
    },
    userClick: function (input) {
      this.userData = input;
      this.dialog = true;
      this.updateYN = true;
    },
  },
};
</script>

<style scoped>
.v-btn {
  margin: 20px;
}
</style>
