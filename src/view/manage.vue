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
      <userlist :search="search" :user-click="userClick" :update-select="updateSelect"></userlist>
    </v-card>
    <v-btn fab dark color="indigo" @click="createUserBtn">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    <v-btn fab dark color="red" @click="removeUserBtn">
      <v-icon dark>mdi-window-close</v-icon>
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
      selected: [],
    };
  },
  components: {
    userlist,
    manageDialog,
  },
  methods: {
    userClick: function (input) {
      this.userData = input;
      this.dialog = true;
      this.updateYN = true;
    },
    createUserBtn: function () {
      this.userData = "";
      this.dialog = true;
      this.updateYN = false;
    },
    removeUserBtn: function () {
      var ret = confirm("정말 삭제하시겠습니까?");
      console.log(this.selected);
      if (ret) {
        this.$http
          .delete("/User", {
            params: {
              ids: this.selected,
            },
          })
          .then((res) => {
            alert(res.data.count + "명이 삭제 되었습니다.");
            this.$router.go();
          });
      }
    },
    updateSelect: function (data) {
      this.selected = data;
    },
  },
};
</script>

<style scoped>
.v-btn {
  margin: 20px;
}
</style>
