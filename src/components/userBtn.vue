<template>
  <v-btn :color="color" @click="btnOnClick">
    {{ address }}
    <v-dialog v-model="dialog">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>{{ address }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list subheader>
          <v-list-item-group multiple v-model="selected" color="green">
            <v-list-item
              v-for="(item, index) in userData[1]"
              :key="index"
              color="'green'"
              @click="listsOnClick(item, index)"
            >
              <v-list-item-icon>
                <v-icon v-text="'account_circle'"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      color: "white",
      dialog: false,
      selected: [],
    };
  },
  props: ["click", "userData"],
  methods: {
    btnOnClick: function () {
      this.dialog = true;
    },
    listsOnClick: function (item, id) {
      const rideYN = !item.rideYN;

      this.$http.put("/ride", {
        id: item.id,
        rideYN: rideYN,
      });
      if (
        !this.selected.includes(id) &&
        this.selected.length + 1 === this.userData[1].length
      )
        this.color = "green";
      else this.color = "yellow";
    },
  },
  computed: {
    address: function () {
      return this.userData[0];
    },
  },
  mounted() {
    for (const [key, value] of Object.entries(this.userData[1])) {
      if (value.rideYN && !this.selected.includes(key)) {
        this.selected.push(Number(key));
        if (this.selected.length === this.userData[1].length)
          this.color = "green";
        else this.color = "yellow";
      }
    }
  },
};
</script>

<style scoped></style>
