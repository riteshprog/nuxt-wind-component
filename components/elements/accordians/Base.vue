<template>
  <div class="bg-white border border-primary-300 rounded-lg shadow-md mb-4">
    <div
      :class="[isExpanded ? 'rounded-t-lg' : 'rounded-lg', 'cursor-pointer']"
      @click="isExpanded = !isExpanded"
    >
      {{ label }}
      <slot name="header" />
    </div>
    <div v-if="isExpanded" class="p-4 space-y-2">
      <slot name="content" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: null,
    },
    expandable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  watch: {
    expandable(value) {
      this.isExpanded = value
    },
  },
  mounted() {
    this.isExpanded = this.expandable
  },
}
</script>
