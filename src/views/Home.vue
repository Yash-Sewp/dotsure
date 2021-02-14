<template>
  <div class="home">
    <Nav class="mb-6" />
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Posts
        </h1>
      </div>
    </header>
    <main class="bg-gray-100">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="post in info" :key="post.id" class="rounded-md bg-white">
            <img
              class="w-24 md:w-auto p-3"
              src="https://dummyimage.com/1920x1080/#fff"
              alt="Workflow"
            />
            <div class="px-10 h-20 text-left">
              {{ post.title }}
            </div>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue';

const axios = require('axios').default;

export default {
  name: 'Home',
  components: {
    Nav
  },
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => (this.info = response.data))
      .catch(error => console.log(error));
  }
};
</script>
