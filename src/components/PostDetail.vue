<template>
    <main class="col-md-8">
        <article class="post post-1">
            <header class="entry-header">
                <h1 class="entry-title">{{post.title}}</h1>
                <div class="entry-meta">
                    <span class="post-category"><a href="#">{{post.category.name}}</a></span>
                    <span class="post-date"><a href="#"><time class="entry-date">{{post.created_time}}</time></a></span>
                    <span class="post-author"><a href="#">{{post.author}}</a></span>
                    <span class="comments-link"><a href="#">{{post.comments_num}} 评论</a></span>
                    <span class="views-count"><a href="#">{{post.views}}阅读</a></span>
                </div>
            </header>
            <div class="entry-content">
              <span v-html="post.body_html"></span>
            </div>
        </article>
        <section class="comment-area" id="comment-area">
                    <hr>
                    <h3>发表评论</h3>
                    <form action="#" method="post" class="comment-form">
                        <div class="row">
                            <div class="col-md-4">
                                <label for="id_name">名字：</label>
                                <input type="text" id="id_name" name="name" required>
                            </div>
                            <div class="col-md-4">
                                <label for="id_email">邮箱：</label>
                                <input type="email" id="id_email" name="email" required>
                            </div>
                            <div class="col-md-12">
                                <label for="id_comment">评论：</label>
                                <textarea name="comment" id="id_comment" required></textarea>
                                <button type="submit" class="comment-btn">发表</button>
                            </div>
                        </div>    <!-- row -->
                    </form>
                    <div class="comment-list-panel">
                        <h3>评论列表，共 <span>{{post.comments_num}}</span> 条评论</h3>
                        <ul class="comment-list list-unstyled">
                            <li class="comment-item" v-for="comment in post.comments" :key=comment.name>
                                <span class="nickname">{{comment.name}}</span>
                                <time class="submit-date">{{comment.created_time}}</time>
                                <div class="text">
                                    {{comment.text}}
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
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
