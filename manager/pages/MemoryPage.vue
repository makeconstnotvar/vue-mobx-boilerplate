<template>
  <main className="app">
    <div className="controls">
      <button onClick={makeHandler}>Добавь еще неможко</button>
    </div>
    <div className="nums">{list.map((x, i) => <span key={i}>{x}</span>)}</div>

  </main>
</template>

<script setup>
const min = 10000;
const max = 100000;
const len = 10000;

function make(max, min, len) {
  let list = new Array(len);
  for (let i = 0; i < len; i++) {
    list[i] = rnd(min, max)
  }
  return list;
}

function rnd(min, max) {
  return Math.trunc(Math.random() * (max - min) + min + 1);
}
function makeHandler() {
  setList(prev => [rnd(min, max), ...prev])
}

</script>
