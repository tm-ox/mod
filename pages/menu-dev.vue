<template>
  <main class="items-start">
    <section class="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
      <div>
        <h3 class="w-full mb-2 md:mb-4">Café</h3>
        <hr />
        <template :data="menu" v-for="item of menu" :key="item.slug">
          <Accordion>
            <template v-slot:sectionName>
              <h2 class="pt-[5.25px] md:pt-0.5">{{ item.title }}</h2>
              <hr />
            </template>
            <template v-slot:item>
              <ContentRenderer :value="item" class="menu-item" />
              <hr />
            </template>
          </Accordion>
        </template>
      </div>
      <div>
        <h3 class="w-full mb-2 md:mb-4 mt-2 md:mt-0">
          Bakery <span class="font-semibold">(By Order)</span>
        </h3>
        <hr />
        <template :data="bakery" v-for="item of order" :key="item.slug">
          <Accordion>
            <template v-slot:sectionName>
              <h2 class="pt-[5.25px] md:pt-0.5">{{ item.title }}</h2>
              <hr />
            </template>
            <template v-slot:item>
              <ContentRenderer :value="item" class="menu-item md:mr-6" />
              <hr />
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
