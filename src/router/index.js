import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import PostDetail from '@/components/PostDetail'
import PostArchive from '@/components/PostArchive'
import PostTag from '@/components/PostTag'
import PostCategory from '@/components/PostCategory'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PostList',
      component: PostList
    },
    {
      path: '/Archive',
      name: 'PostArchive',
      component: PostArchive
    },
    {
      path: '/Article/:id',
      name: 'PostDetail',
      component: PostDetail
    },
    {
      path: '/Tag/:id',
      name: 'PostTag',
      component: PostTag
    },
    {
      path: '/Category/:id',
      name: 'PostCategory',
      component: PostCategory
    }
  ]
})
