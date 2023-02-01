<template>
  <main>
    <h1>Страница 1</h1>
    <div>{$store1.name}</div>
    <div>
      <button onClick={this.doHandler}>нажми</button>
      <Select options={options} />
    </div>
  </main>
</template>
<script setup>
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
function doHandler () {
  const {$store1} = this.props;
  $store1.do();

}
</script>
