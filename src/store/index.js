import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		albums: [],
		isFetching: false,
  },
  getters: {
  },
  mutations: {
		updateAlbums(state, albums) {
			state.albums = albums
		},
		toggleFetchingStatus(state) {
			state.isFetching = !state.isFetching
		}
  },
  actions: {
		async fetchAlbums(context, keyword) {
			context.commit('toggleFetchingStatus')
			if (!keyword) {
				context.commit('toggleFetchingStatus')
				return context.commit('updateAlbums', [])
			}

			const LAST_FM_ALBUM_SEARCH_URL = 'https://ws.audioscrobbler.com/2.0/'
			const API_KEY = '70eb18b6a4cd46d7d6847b075883b096'

			const params = {
				api_key: API_KEY,
				album: keyword,
				method: 'album.search',
				format: 'json',
			}
			
			let response = await axios.get(LAST_FM_ALBUM_SEARCH_URL, { params })
			context.commit('toggleFetchingStatus')

			let albums = response.data.results.albummatches.album
			context.commit('updateAlbums', albums)

		}
  },
  modules: {
  }
})
