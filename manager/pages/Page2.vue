<template>
  <main>
    <h1>Страница 2</h1>
    <div>{$store2.name}</div>
    <div>
      <button @click="doHandler">нажми</button>
    </div>
  </main>
</template>
<script setup>

function doHandler() {
  const {$store2} = this.props;
  $store2.do();
}
</script>
