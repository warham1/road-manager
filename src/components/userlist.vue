<template>
	<div>
		{{ users }}
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
		};
	},
	created() {
		console.log("hi");
		const url = "https://rm-graphql-server.herokuapp.com/User";

		this.$http.get(url).then((result) => {
			this.users = result.data;
		});
	},
};
</script>

<style></style>
