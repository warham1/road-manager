<template>
	<v-data-table :search="search" :items="users" :headers="headers" item-key="id" show-select>
		<template v-slot:body="{ items }">
			<tbody>
				<tr v-for="(item, i) in items" :key="i" @click="userClick(item)">
					<td>
						<v-checkbox
							color="green"
							v-model="selected"
							:value="item.id"
							@click.stop
							hide-details
						></v-checkbox>
					</td>
					<td>{{ item.name }}</td>
					<td>{{ item.address }}</td>
					<td>{{ item.age }}</td>
					<td>{{ textConverter(item.sex) }}</td>
					<td>{{ textConverter(item.rideDays) }}</td>
				</tr>
			</tbody>
		</template>
	</v-data-table>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			selected: [],
			headers: [
				{
					text: "이름",
					value: "name",
				},
				{
					text: "주소",
					value: "address",
				},
				{
					text: "나이",
					value: "age",
				},
				{
					text: "성별",
					value: "sex",
				},
				{
					text: "요일",
					value: "rideDays",
				},
			],
			days: ["일", "월", "화", "수", "목", "금", "토"],
		};
	},
	props: ["search", "userClick", "updateSelect"],
	created() {
		this.$http.get("/User").then((result) => {
			this.users = result.data;
			console.log(this.users);
		});
	},
	methods: {
		textConverter: function(input) {
			if (input === "M" || input === "F") {
				return input === "M" ? "남" : "여";
			} else {
				return input.map((item) => {
					return this.days[Number(item)];
				});
			}
		},
	},
	watch: {
		selected: function(val) {
			this.updateSelect(val);
		},
	},
};
</script>

<style scoped>
.v-input--selection-controls {
	margin-top: 0px;
}
</style>
