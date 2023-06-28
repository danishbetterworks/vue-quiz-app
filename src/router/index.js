import {createRouter, createWebHistory} from 'vue-router'
import QuizView from '../views/QuizView.vue'
import SingleQuizView from '../views/SingleQuizView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'quiz',
			component: QuizView,
		},
		{
			path: '/quiz/:name',
			name: 'single quiz',
			component: SingleQuizView,
		}
	]
})

export default router