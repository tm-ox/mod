<template>
  <main class="items-start">
    <section class="grid grid-cols-1 md:grid-cols-2 items-start">
      <div>
        <h3 class="w-full ml-5 mb-4">Café</h3>
        <template :data="menu" v-for="item of menu" :key="item.slug">
          <Accordion>
            <template v-slot:sectionName>
              <h2 class="pt-[5.25px] md:pt-0.5">{{ item.title }}</h2>
            </template>
            <template v-slot:item>
              <ContentRenderer :value="item" />
            </template>
          </Accordion>
        </template>
      </div>
      <div>
        <h3 class="w-full ml-5 mb-4 mt-2 md:mt-0">
          Bakery <span class="font-semibold">(By Order)</span>
        </h3>
        <template :data="bakery" v-for="item of order" :key="item.slug">
          <Accordion>
            <template v-slot:sectionName>
              <h2 class="pt-[5.25px] md:pt-0.5">{{ item.title }}</h2>
            </template>
            <template v-slot:item>
              <ContentRenderer :value="item" />
            </template>
          </Accordion>
        </template>
      </div>
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
