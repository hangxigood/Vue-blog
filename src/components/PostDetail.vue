<template>
    <main class="col-md-8">
        <article class="post post-1">
            <header class="entry-header">
                <h1 class="entry-title">{{post.title}}</h1>
                <div class="entry-meta">
                    <span class="post-category"><a href="#">{{post.category.name}}</a></span>
                    <span class="post-date"><a href="#"><time class="entry-date">{{post.created_time}}</time></a></span>
                    <span class="post-author"><a href="#">{{post.author}}</a></span>
                    <span class="comments-link"><a href="#">4 评论</a></span>
                    <span class="views-count"><a href="#">{{post.views}}阅读</a></span>
                </div>
            </header>
            <div class="entry-content">
              <span v-html="post.body_html"></span>
            </div>
        </article>
    </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PostDetail',
  data () {
    return {
      post: []
    }
  },
  mounted () {
    axios
      .get('https://blog.frankxiang.xyz/api/v1/Post/' + this.$route.params.id)
      .then(response => (this.post = response.data))
  }
}
</script>
