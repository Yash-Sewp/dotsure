<template>
  <main class="bg-white">
    <Nav class="mb-6 fixed" />
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="post-container py-20 my-10">
        <h1 class="text-4xl text-left mb-10 capitalize">{{ post.title }}</h1>
        <div class="img-container w-full">
          <img src="https://dummyimage.com/1920x1080/#fff" alt="placeholder" />
        </div>
        <p class="text-lg mt-10 text-lg text-left">{{ post.body }}</p>
      </div>
    </div>
  </main>
</template>

<script>
const axios = require('axios').default;
import Nav from '@/components/Nav.vue';

export default {
  name: 'Post',
  components: {
    Nav
  },
  data() {
    return {
      post: {}
    };
  },
  created() {
    axios
      .get('http://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
      .then(response => (this.post = response.data))
      .catch(error => console.log(error));
  }
};
</script>
