<template>
    <main class="col-md-8">
        <span v-for="post in posts" :key=post.title>
                <article class="post post-1">
                    <header class="entry-header">
                        <h1 class="entry-title">
                            <router-link :to="'/Article/' + post.id">{{post.title}}</router-link>
                        </h1>
                        <div class="entry-meta">
                            <span class="post-category"><a href="#">{{post.category.name}}</a></span>
                            <span class="post-date"><a href="#"><time class="entry-date"
                                                                      >{{post.created_time}}</time></a></span>
                            <span class="post-author"><a href="#">{{post.author}}</a></span>
                            <span class="comments-link"><a href="#">{{post.comments_num}} 评论</a></span>
                            <span class="views-count"><a href="#">{{post.views}}阅读</a></span>
                        </div>
                    </header>
                    <div class="entry-content clearfix">
                        <p>{{post.excerpt}}</p>
                        <div class="read-more cl-effect-14">
                            <a :href="'/posts/' + post.id" class="more-link">继续阅读 <span class="meta-nav">→</span></a>
                        </div>
                    </div>
                </article>
        </span>

                <!-- 简单分页效果
                <div class="pagination-simple">
                    <a href="#">上一页</a>
                    <span class="current">第 6 页 / 共 11 页</span>
                    <a href="#">下一页</a>
                </div>
                -->
                <div class="pagination">
                    <ul>
                        <li><a href="">1</a></li>
                        <li><a href="">...</a></li>
                        <li><a href="">4</a></li>
                        <li><a href="">5</a></li>
                        <li class="current"><a href="">6</a></li>
                        <li><a href="">7</a></li>
                        <li><a href="">8</a></li>
                        <li><a href="">...</a></li>
                        <li><a href="">11</a></li>
                    </ul>
                </div>
    </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PostCatagory',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    axios
      .get('https://blog.frankxiang.xyz/api/v1/Post/', {params: {category: this.$route.params.id}})
      .then(response => (this.posts = response.data.results))
  }
}
</script>
