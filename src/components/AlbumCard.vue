<template>
	<div class="flex mb-3 mt-3 bg-gray-300 dark:bg-violet-300 hover:bg-lime-600 p-2 rounded-lg">
		<img :src="album.image[1]['#text']" alt="album" class="mr-3">
		<div class="flex flex-col justify-between p-2">
			<p class="dark:text-gray-700 flex font-bold">{{ album.name }}</p>
			<p class="dark:text-gray-600 flex">{{ album.artist }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AlbumCard',
	props: {
		album: Object,
	},
}
</script>

<style scoped>

</style>