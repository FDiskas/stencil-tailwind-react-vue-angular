<script setup lang="ts">
import { MyComponent, PocButton } from '@fdiskas/vue-library'
</script>

<template>
  <main class="container">
    <h1>Vue Demo with Stencil Wrapper</h1>
    <p>
      This component is authored in Stencil and consumed through the generated
      Vue wrapper package.
    </p>
    <MyComponent first="fdiskas" middle="UI" last="Team" />

    <section className="card">
        <h2>Button variants</h2>
        <div className="actions">
          <PocButton variant="primary" size="md">Primary Action</PocButton>
          <PocButton variant="secondary" size="md">Secondary Action</PocButton>
        </div>

        <h2>Button sizes</h2>
        <div className="actions">
          <PocButton variant="primary" size="sm">Small</PocButton>
          <PocButton variant="primary" size="md">Medium</PocButton>
          <PocButton variant="primary" size="lg">Large</PocButton>
        </div>

        <h2>Disabled state</h2>
        <div className="actions">
          <PocButton variant="primary" size="md" disabled>Disabled Primary</PocButton>
          <PocButton variant="secondary" size="md" disabled>Disabled Secondary</PocButton>
        </div>
      </section>
  </main>
</template>
