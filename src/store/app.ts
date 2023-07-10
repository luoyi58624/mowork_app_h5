import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
	state: () => ({
		count: 0
	}),
	getters: {
		doubleCount: state => state.count * 2
	},
	actions: {
		initApp() {},
		increment() {
			this.count++
		}
	}
})
