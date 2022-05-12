<template>
	<div>
		<div class="bg-white dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen fixed"></div>
		<div class="max-w-xl mx-auto pt-10 text-center relative z-100">
			<h1 class="title text-lime-600 dark:text-white">Music Search App 🎧</h1>
			<SearchForm/>
			<AlbumList/>
			<DarkModeButton/>
		</div>
	</div>
</template>

<script>
import AlbumList from '@/components/AlbumList'
import SearchForm from '@/components/SearchForm'
import DarkModeButton from '@/components/DarkModeButton'

export default {
	name: 'App',
	components: {
		AlbumList,
		SearchForm,
		DarkModeButton,
	}
}
</script>

<style>
	.title {
		font-size: 55px;
		text-align: center;
	}
</style>