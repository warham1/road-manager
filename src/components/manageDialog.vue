<template>
  <div>
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field label="이름*" v-model="user.name" required outlined clearable></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-select
                  label="성별*"
                  :items="[{state: '남', abbr: 'M'},{state: '여', abbr: 'F'}]"
                  item-text="state"
                  item-value="abbr"
                  v-model="user.sex"
                  outlined
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="나이*" v-model="user.age" required outlined clearable></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="주소*" v-model="user.address" required outlined clearable></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-btn color="success" class="mr-4" @click="confirm">확인</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: "",
        name: "",
        sex: "",
        age: "",
        address: "",
      },
      dialog: this.value,
    };
  },
  props: ["userData", "value", "updateyn"],
  methods: {
    confirm: function () {
      if (this.updateyn) {
        this.$http.put("/User", {
          id: this.user.id,
          name: this.user.name,
          address: this.user.address,
          sex: this.user.sex,
          age: Number(this.user.age),
        });
      } else {
        console.log(this.user);
        console.log(Number(this.user.age));
        this.$http.post("/createUser", {
          name: this.user.name,
          address: this.user.address,
          sex: this.user.sex,
          age: Number(this.user.age),
          time: "1800",
          rideDays: [4],
        });
      }
      this.dialog = false;
    },
  },
  computed: {
    title: function () {
      if (this.updateyn) {
        return "회원수정";
      } else {
        return "회원추가";
      }
    },
  },
  watch: {
    dialog: function (val) {
      console.log(val);
      this.$emit("input", val);
    },
    value: function (val) {
      this.dialog = val;
      if (this.updateyn) {
        for (var item in this.userData) {
          this.user[item] = this.userData[item];
        }
        console.log(this.user);
      } else {
        this.user = { id: "", name: "", address: "", age: "", sex: "" };
      }
    },
  },
};
</script>

<style>
</style>