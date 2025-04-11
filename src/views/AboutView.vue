<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    justify-content: center;
  }
}
</style>
