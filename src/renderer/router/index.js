import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/detection/step1',
      name: 'detection_step1',
      component: require('@/components/Detection/DetectionStep1').default
    },
    {
      path: '/detection/step2',
      name: 'detection_step2',
      component: require('@/components/Detection/DetectionStep2').default
    },
    {
      path: '/detection/step3',
      name: 'detection_step3',
      component: require('@/components/Detection/DetectionStep3').default
    },
    {
      path: '/detection/step4',
      name: 'detection_step4',
      component: require('@/components/Detection/DetectionStep4').default
    },
  ]
})
