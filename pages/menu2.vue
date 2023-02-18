<template>
  <main class="items-start">
    <section>
      <ContentDoc path="/snacks" v-slot="{ doc }">
        <Accordion>
          <template v-slot:sectionName>
            <h2 class="pt-1">{{ doc.title }}</h2>
          </template>
          <template v-slot:item>
            <ContentRenderer :value="doc" />
          </template>
        </Accordion>
      </ContentDoc>
      <ContentDoc path="/main" v-slot="{ doc }">
        <Accordion>
          <template v-slot:sectionName>
            <h2 class="pt-1">{{ doc.title }}</h2>
          </template>
          <template v-slot:item>
            <ContentRenderer :value="doc" />
          </template>
        </Accordion>
      </ContentDoc>
      <ContentDoc path="/dessert" v-slot="{ doc }">
        <Accordion>
          <template v-slot:sectionName>
            <h2 class="pt-1">{{ doc.title }}</h2>
          </template>
          <template v-slot:item>
            <ContentRenderer :value="doc" />
          </template>
        </Accordion>
      </ContentDoc>
      <ContentDoc path="/drinks" v-slot="{ doc }">
        <Accordion>
          <template v-slot:sectionName>
            <h2 class="pt-1">{{ doc.title }}</h2>
          </template>
          <template v-slot:item>
            <ContentRenderer :value="doc" />
          </template>
        </Accordion>
      </ContentDoc>
      <ContentDoc path="/bread" v-slot="{ doc }">
        <Accordion>
          <template v-slot:sectionName>
            <h2 class="pt-1">{{ doc.title }}</h2>
          </template>
          <template v-slot:item>
            <ContentRenderer :value="doc" />
          </template>
        </Accordion>
      </ContentDoc>
    </section>
  </main>
</template>
