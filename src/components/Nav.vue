<template>
  <div class="w-full">
    <nav class="bg-white py-2 items-center shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link :to="`/`">
              <img
                class="w-24 md:w-auto"
                src="../assets/images/logo_light.39e67d5a.svg"
                alt="Workflow"
              />
              </router-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="#" class="text-black font-bold px-2 text-sm"
                  >About Us</a
                >

                <a href="#" class="text-black font-bold px-2 text-sm">Pet</a>

                <a href="#" class="text-black font-bold px-2 text-sm">Car</a>

                <a href="#" class="text-black font-bold px-2 text-sm"
                  >Business</a
                >

                <a href="#" class="text-black font-bold px-2 text-sm">Blog</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
      <div class="hidden md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            >Dashboard</a
          >

          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Team</a
          >

          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Projects</a
          >

          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Calendar</a
          >

          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Reports</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav'
};
</script>
