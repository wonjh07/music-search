<template>
	<form @submit.prevent>
		<input 
		type="text"
		class="border border-lime-600 rounded-lg w-full px-2 py-2 mt-5 focus:outline-none"
		placeholder="검색하고 싶은 앨범을 입력하세요"
		@input='onSearchDebounce'
		>
	</form>
</template>

<script>
import _ from 'lodash'

export default {
	name: 'SearchForm',
	methods: {
		onSearchDebounce: _.debounce(function(event) {
			const keyword = event.target.value
			this.$store.dispatch('fetchAlbums', keyword)
		}, 1000),
		// onSearch(event) {
		// 	const keyword = event.target.value
		// 	this.$store.dispatch('fetchAlbums', keyword)
		// }
	}
}
</script>

<style scoped>

</style>