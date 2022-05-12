<template>
	<div>
		<div v-for="num in 10" :key="num" class="flex mb-3 mt-3 bg-gray-300 dark:bg-violet-300 hover:bg-lime-600 p-2 rounded-lg">
			<img src="https://via.placeholder.com/64x64.png" alt="album" class="mr-3">
			<div class="flex flex-col justify-between p-2">
				<p class="dark:text-gray-700 flex font-bold"></p>
				<p class="dark:text-gray-600 flex"></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AlbumLoader"

}
</script>

<style scoped>

	.search-result--loadingList {
		display: none;
	}

	.search-result--loading-card {
		display: flex;
		height: 88px;
		padding: 12px;
		margin-bottom: 12px;
		border-radius: 12px;
		background-color: #F9FAFB;
	}

	.search-result--loading-img {
		width: 64px;
		min-width: 64px;
		height: 64px;
		margin-right: 24px;
		background-color: #E5E7EB;
	}

	.search-result--loading-text {
		width: 100%;
	}

	.search-result--loading-artistName {
		width: 74%;
		height: 24px;
		margin-bottom: 12px;
		background: #E5E7EB;
		animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite;
	}

	.search-result--loading-albumName {
		width: 47%;
		height: 18px;
		background: #E5E7EB;
		animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite;
	}

</style>