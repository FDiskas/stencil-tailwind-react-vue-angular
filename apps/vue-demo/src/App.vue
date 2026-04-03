<script setup lang="ts">
import { MyComponent } from '@mq/vue-library'
</script>

<template>
  <main class="container">
    <h1>Vue Demo with Stencil Wrapper</h1>
    <p>
      This component is authored in Stencil and consumed through the generated
      Vue wrapper package.
    </p>
    <MyComponent first="mq" middle="UI" last="Team" />
  </main>
</template>
