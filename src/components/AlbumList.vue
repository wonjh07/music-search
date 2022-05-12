<template>
	<div>
		<AlbumCard
			v-for="album in albums"
			:key="album.url"
			:album="album"
		/>
		<AlbumLoader v-if="isFetching" class="animate-pulse"/>
	</div>

</template>

<script>
import AlbumCard from '@/components/AlbumCard'
import AlbumLoader from '@/components/AlbumLoader'

export default {
	name: 'AlbumList',
	components: {
		AlbumCard,
		AlbumLoader,
	},
	computed: {
		albums() {
			return this.$store.state.albums
		},
		isFetching() {
			return this.$store.state.isFetching
		}
	}

}
</script>

<style>

</style>