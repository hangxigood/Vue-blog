<template>
    <aside class="col-md-4" id=aside>
                <!-- 最新的五篇文章 -->
                <div class="widget widget-recent-posts">
                        <h3 class="widget-title">最新文章</h3>
                        <ul>
                            <div v-for="post in posts.slice(0, 5)" :key=post.title>
                                <li>
                                    <a :href="'/Article/' + post.id">{{post.title}}</a>
                                </li>
                            </div>
                        </ul>
                    </div>

                <!-- 文章按时间年月归档 -->
                    <div class="widget widget-archives">
                        <h3 class="widget-title">归档</h3>
                        <ul>
                            <span v-for='archive in archives' :key=archive.month>
                                <li>
                                    <a :href="getArchiveHref(archive.year, archive.month)">{{archive.year}} 年 {{archive.month}} 月</a>
                                </li>
                            </span>
                        </ul>
                    </div>

                <!-- 文章分类 Category -->
                <div class="widget widget-category">
                        <h3 class="widget-title">分类</h3>
                        <ul>
                            <div v-for='category in categories' :key=category.id>
                                <li>
                                    <a :href="'/Category/' + category.id">{{category.name}}</a>
                                </li>
                            </div>
                        </ul>
                    </div>

                <!-- 标签分类 Tag -->
                <div class="widget widget-tag-cloud">
                        <h3 class="widget-title">标签云</h3>
                        <ul>
                            <span v-for='tag in tags' :key=tag.id>
                                <li>
                                    <a :href="'/Tag/' + tag.id">{{tag.name}}</a>
                                </li>
                            </span>
                        </ul>
                    </div>
            </aside>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PostAside',
  data () {
    return {
      posts: [],
      archives: [],
      tags: [],
      categories: []
    }
  },
  mounted () {
    axios
      .get('https://blog.frankxiang.xyz/api/v1/Post/')
      .then(response => (this.posts = response.data.results))
    axios
      .get('https://blog.frankxiang.xyz/api/v1/Archive/')
      .then(response => (this.archives = response.data))
    axios
      .get('https://blog.frankxiang.xyz/api/v1/Tag/')
      .then(response => (this.tags = response.data))
    axios
      .get('https://blog.frankxiang.xyz/api/v1/Category/')
      .then(response => (this.categories = response.data))
  },
  methods: {
    getArchiveHref: function (year, month) {
      return '/Archive/?year=' + year + '&month=' + month
    }
  }
}
</script>
