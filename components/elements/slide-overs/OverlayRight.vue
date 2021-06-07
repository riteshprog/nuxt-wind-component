<template>
  <div v-if="open" class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute inset-0 transition-opacity bg-gray-800 bg-opacity-75"
      ></div>
      <section
        class="
          absolute
          inset-y-0
          right-0
          pl-10
          max-w-sm
          md:max-w-full
          lg:max-w-full
          flex
        "
      >
        <div class="relative w-screen max-w-2xl">
          <div
            class="
              absolute
              left-0
              top-0
              -ml-7
              md:-ml-8
              lg:-ml-8
              pr-2
              flex
              sm:-ml-10
              sm:pr-4
            "
          >
            <button
              aria-label="Close panel"
              class="
                mt-6
                text-gray-300
                hover:text-white
                transition
                ease-in-out
                duration-150
              "
              @click="toggleOpen"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="
              mt-0
              h-full
              flex flex-col
              bg-white
              shadow-xl
              overflow-y-scroll
              pb-20
            "
          >
            <header v-if="title" class="px-6 py-6 bg-primary-800 sm:px-6">
              <div class="flex items-start justify-between space-x-2">
                <div class="space-y-1">
                  <h2
                    class="
                      text-base
                      md:text-lg
                      lg:text-lg
                      leading-7
                      font-medium
                      text-primary-100
                    "
                  >
                    {{ title }}
                  </h2>
                  <slot name="subHeading" />
                  <p v-if="description" class="text-sm text-white leading-5">
                    Get started by filling in the information below to create
                    your new project.
                  </p>
                </div>
              </div>
            </header>
            <div class="text-white bg-concept-pattern px-6 py-6">
              <slot name="header" />
            </div>
            <div class="relative flex-1">
              <slot name="content" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      require: false,
      default: null,
    },
    description: {
      type: String,
      require: false,
      default: null,
    },
    side: {
      type: String,
      require: false,
      default: 'right-0',
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    },
  },
}
</script>
