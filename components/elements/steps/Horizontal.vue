<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <nav>
    <ul
      class="
        border border-gray-300
        rounded-md
        divide-y divide-gray-300
        md:flex
        justify-around
        md:divide-y-0
      "
    >
      <li
        v-for="(step, index) in steps"
        :key="index"
        class="relative"
        @click="changeStep(step)"
      >
        <!-- Current Step -->
        <div
          class="
            px-6
            py-4
            flex
            items-center
            text-sm
            leading-5
            font-medium
            space-x-4
            text-gray-300
          "
        >
          <div
            v-if="step.status === 'complete'"
            class="
              flex-shrink-0
              w-10
              h-10
              flex
              items-center
              justify-center
              bg-primary-600
              rounded-full
              group-hover:bg-primary-800
              transition
              ease-in-out
              duration-150
            "
          >
            <svg
              class="w-6 h-6 text-white"
              x-description="Heroicon name: check"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div
            v-else
            :class="[
              'flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full',
              {
                'border-primary-600':
                  step.status === 'current' || step.status === 'complete',
              },
            ]"
          >
            <p
              :class="{
                'text-primary-600':
                  step.status === 'current' || step.status === 'complete',
              }"
            >
              0{{ index + 1 }}
            </p>
          </div>

          <p
            :class="{
              'text-primary-600':
                step.status === 'current' || step.status === 'complete',
            }"
            class="text-sm leading-5 font-medium pr-8"
          >
            <span>
              {{ step.name }}
            </span>
            <span v-if="step.caption" class="block">{{ step.caption }}</span>
          </p>
        </div>

        <div
          :class="[
            'absolute top-0 right-0 h-full w-5 hidden md:block',
            { 'md:hidden': index == steps.length - 1 },
          ]"
        >
          <svg
            class="h-full w-full text-gray-300"
            viewBox="0 0 22 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 -2L20 40L0 82"
              vector-effect="non-scaling-stroke"
              stroke="currentcolor"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    steps: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    changeStep(step) {
      this.$emit('stepsUpdated', step)
    },
  },
}
</script>
