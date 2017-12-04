import App from '../App'

const home = r => require.ensure([], () => r(require('pages/home/home')), 'home');
const selfStudy = r => require.ensure([], () => r(require('pages/selfStudy/selfStudy')), 'selfStudy');
const homeworkRecord = r => require.ensure([], () => r(require('pages/homeworkRecord/homeworkRecord')),'homeworkRecord');

export default  [
    {
      path: '/',
      component: App,
      children:[
        {
          path:'',
          redirect:'/home'
        },
        {
          path:'/home',
          name:'home',
          component:home,
        },
        {
          path:'/selfStudy/:title',
          name:'selfStudy',
          component:selfStudy
        },
        {
          path:'/homeworkRecord/:title',
          name:'homeworkRecord',
          component:homeworkRecord
        }
      ]
    }
]
