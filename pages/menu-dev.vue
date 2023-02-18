<template>
  <main class="items-start">
    <section>
      <h3 class="w-full ml-9 mb-2">Café</h3>
      <template :data="menu" v-for="item of menu" :key="item.slug">
        <Accordion>
          <template v-slot:sectionName>
            <h2 class="pt-1">{{ item.title }}</h2>
          </template>
          <template v-slot:item>
            <ContentRenderer :value="item" />
          </template>
        </Accordion>
      </template>
      <h3 class="w-full ml-9 mb-2 mt-2">
        Bakery <span class="font-semibold">(By Order)</span>
      </h3>
      <template :data="bakery" v-for="item of order" :key="item.slug">
        <Accordion>
          <template v-slot:sectionName>
            <h2 class="pt-1">{{ item.title }}</h2>
          </template>
          <template v-slot:item>
            <ContentRenderer :value="item" />
          </template>
        </Accordion>
      </template>
    </section>
  </main>
</template>

<script setup>
const { data: menu } = await useAsyncData("menu", () =>
  queryContent("/cafe").sort({ order: 1 }).find()
);
const { data: order } = await useAsyncData("bakery", () =>
  queryContent("/bakery").sort({ order: 1 }).find()
);
</script>
