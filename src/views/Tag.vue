<template>
  <div class="tag">
      <div v-if="error">
      {{ error }}
    </div>
    <div v-if="postsWithTag.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts"/>
    </div>
    <div v-else>
      <Snipper/>
    </div>
  </div>  
</template>

<script setup>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import Snipper from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue';

const route = useRoute()
const { posts, error, load } = getPosts()
load()

const postsWithTag = computed(() => {
      return posts.value.filter(p => p.tags.includes(route.params.tag))
    })


</script>

<style>
.tag{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>