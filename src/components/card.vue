<template>
  <div>
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card {
  height: 40px;
  font-size: 20px;
  text-align: center;
}
</style>
