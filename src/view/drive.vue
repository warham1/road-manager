<template>
	<v-container class="fill-height" align-start fluid>
		<v-container class="header d-flex" justify-center align-center>
			<v-btn icon class="arrow-btn" @click="changeHour('left')">
				<v-icon x-large>keyboard_arrow_left </v-icon>
			</v-btn>
			<h2>{{ hourText }}</h2>
			<v-btn icon class="arrow-btn" @click="changeHour('right')">
				<v-icon x-large>keyboard_arrow_right</v-icon>
			</v-btn>
		</v-container>
		<v-container class="content d-flex" justify-center align-start flex-wrap fluid>
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
				height: "140px",
			},
			users: [],
			curTimeUsers: [],
			currentHour: 0,
		};
	},
	components: {
		userBtn,
	},
	methods: {
		changeHour: function(direct) {
			if (direct === "left") {
				this.currentHour--;
			} else this.currentHour++;
		},
	},
	mounted() {
		this.currentHour = new Date(Date.now()).getHours();
		const today = new Date(Date.now()).getDay();

		this.$http
			.get("/User", {
				params: {
					rideDays: today,
				},
			})
			.then((result) => {
				let temp = new Map();
				result.data.forEach((user) => {
					if (temp.has(user.address)) {
						temp.get(user.address).push(user);
					} else {
						temp.set(user.address, [user]);
					}
				});
				this.users = Array.from(temp);
			});
	},
	computed: {
		hourText: function() {
			let nextHour = this.currentHour + 1;

			return this.currentHour + "시 ~ " + nextHour + "시";
		},
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

.v-btn {
	margin: 10px;
	width: 44%;
}

.v-btn__content {
	white-space: normal;
	width: 100%;
	height: 100%;
}

@media (max-width: 420px) {
	h2 {
		font-size: 20px;
	}
	.v-btn {
		margin: 5px;
	}
}
</style>
