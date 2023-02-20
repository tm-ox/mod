<template>
  <div>
    <Header />
    <main>
      <section>
        <h2 v-if="error.statusCode === 404">404 - Page Not Found</h2>
        <h2 v-else>Page Not Found</h2>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
useHead({
  title: "Mrs O'Donoghue - Home Made Foods",
});
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>
