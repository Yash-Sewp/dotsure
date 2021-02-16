<template>
    <div class="home">
        <Nav class="mb-6 fixed" />
        <header class="bg-gray-900 py-16 mx-auto w-full">
            <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <h1
                    class="font-semibold text-white text-left pt-10 pb-3 text-4xl mb-2"
                >
                    Posts
                </h1>
                <p class="text-lg text-white text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div class="mt-1 flex rounded-md shadow-sm">
                    <input
                        type="text"
                        name="Search"
                        id="search_something"
                        class="flex block w-full rounded-md sm:text-sm py-4 px-5 mt-8"
                        placeholder="Search"
                    />
                </div>
            </div>
        </header>
        <main class="bg-gray-100">
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div
                    class="large-post-card w-100 mb-6 bg-white rounded-md hover:shadow-lg"
                >
                    <router-link :to="`/post/${posts[0].id}`">
                        <div class="block xl:flex items-center justify-start">
                            <div v-if="posts.image">
                                <img
                                    src="`${posts.image}`"
                                    class="w-full max-h-96 xl:w-2/3 xl:h-1/5 p-3"
                                    alt=""
                                />
                            </div>
                            <div v-else>
                                <img
                                    src="https://dummyimage.com/1920x1080/#fff"
                                    class="w-full max-h-96 xl:w-2/3 xl:h-1/5 p-3"
                                    alt=""
                                />
                            </div>
                            <div
                                class="context-box w-full xl:w-1/3 pl-2 xl:pl-1 pb-6"
                            >
                                <div
                                    class="small-block p-1 w-20 text-xs ml-2 mb-3 rounded-md border-2 border-black"
                                >
                                    userId: {{ posts.userId }}
                                </div>
                                <div
                                    class="text-3xl font-semibold pl-2 text-left"
                                >
                                    {{ posts[0].title }}
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <!-- Grid blocks starts here  -->
                    <div
                        v-for="post in pageOfItems.slice(1)"
                        :key="post.id"
                        class="post-card rounded-md bg-white hover:shadow-lg"
                    >
                        <router-link :to="`/post/${post.id}`">
                            <div v-if="posts.image">
                                <img
                                    src="`${posts.image}`"
                                    class="w-full max-h-96 xl:w-2/3 xl:h-1/5 p-3"
                                    alt=""
                                />
                            </div>
                            <div v-else>
                                <img
                                    class="w-full p-3 rounded-md"
                                    src="https://dummyimage.com/1920x1080/#fff"
                                    alt="Workflow"
                                />
                            </div>
                            <div class="content-box">
                                <div
                                    class="small-block p-1 w-20 text-xs ml-4 mb-3 rounded-md border-2 border-black"
                                >
                                    userId: {{ posts.userId }}
                                </div>
                                <div
                                    class="text-2l font-semibold pl-4 h-20 text-left"
                                >
                                    {{ post.title }}
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <!-- /End replace -->
                <div class="pagination mt-10 flex justify-center">
                    <jw-pagination
                        :items="posts"
                        @changePage="onChangePage"
                        :labels="customLabels"
                        :disableDefaultStyles="true"
                        :styles="customStyles"
                    ></jw-pagination>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue';
const axios = require('axios').default;

const customLabels = {
    previous: '<',
    next: '>',
    first: '<<',
    last: '>>',
};

const customStyles = {
    ul: {
        display: 'flex',
    },
    li: {
        display: 'block',
        padding: '10px 15px ',
        margin: '20px 5px',
        border: '1px solid #bdc3ca',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    a: {
        color: 'black',
    },
};

export default {
    name: 'Home',
    components: {
        Nav,
    },
    data() {
        return {
            posts: [],
            pageOfItems: [],
            customLabels,
            customStyles,
        };
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => (this.posts = response.data))
            .catch((error) => console.log(error));
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
    },
};
</script>
