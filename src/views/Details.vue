<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">delete post</button>
  </div>
  <div v-else>
    <Snipper/>
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Snipper from '../components/Spinner.vue'
import { useRoute , useRouter } from 'vue-router';
import { projectFirestore } from '@/firebase/config';
export default {
  props:['id'],
  components: { Snipper},
  setup(props){
    const route = useRoute()
    const router = useRouter()
    // const {post, error, load} = getPost(props.id)
    const {post, error, load} = getPost(route.params.id)
    load()
    const handleClick = async () => {
      await projectFirestore.collection('posts').doc(props.id).delete()
      router.push({name:'home'})

    }

    return { post, error , handleClick }
  }
}
</script>

<style scoped>
.tags a {
    margin-right: 10px;
  }
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  button.delete {
    margin: 10px auto;
  }
</style>