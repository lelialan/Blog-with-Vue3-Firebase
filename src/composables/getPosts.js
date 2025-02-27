import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

const getPosts = () => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
       const res =await projectFirestore.collection('posts')
        .orderBy('createdAt','desc') //按照新增時間降序排列
        .get()
      //  console.log(res.docs);
       
       posts.value = res.docs.map(doc=>{
        return { ...doc.data(), id:doc.id}
       })
       
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts