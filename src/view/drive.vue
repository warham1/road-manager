<template>
	<v-container class="fill-height" align-start>
		<v-container class="header d-flex" justify-center align-center>
			<v-btn icon class="arrow-btn">
				<v-icon x-large>keyboard_arrow_left </v-icon>
			</v-btn>
			<h2>오후 3:00 ~ 오후 4:00</h2>
			<v-btn icon class="arrow-btn">
				<v-icon x-large>keyboard_arrow_right</v-icon>
			</v-btn>
		</v-container>
		<v-container class="content d-flex" justify-center align-start flex-wrap>
			<userBtn v-for="(user, index) in users" :key="index" :user-data="user" :style="btnStyle"> </userBtn>
			<p>{{ users }}</p>
		</v-container>
	</v-container>
</template>

<script>
import userBtn from "../components/userBtn";

export default {
	data() {
		return {
			btnStyle: {
				width: "40%",
				height: "140px",
				margin: "10px",
			},
			users: [],
			dialog: false,
			dialogData: {
				title: "title",
				users: [],
			},
		};
	},
	components: {
		userBtn,
	},
	methods: {},
	mounted() {
		const url = "https://rm-graphql-server.herokuapp.com/User";

		this.$http.get(url).then((result) => {
			let temp = new Map();
			result.data.forEach((user) => {
				if (temp.has(user.address)) {
					temp.get(user.address).push(user);
				} else {
					temp.set(user.address, [user]);
				}
			});
			this.users = Array.from(temp);
			console.table(this.users);
		});
	},
};
</script>

<style>
.header {
	height: 50px;
}

.arrow-btn {
	margin: 10px;
}

@media (max-width: 420px) {
	h2 {
		font-size: 20px;
	}
}
</style>
