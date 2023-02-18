<template>
  <div class="relative rounded w-full">
    <input
      type="checkbox"
      class="peer absolute top-0 inset-x-0 w-full h-10 opacity-0 z-10 cursor-pointer"
    />
    <!-- <div class="h-12 w-full flex items-center rounded"> -->
    <div
      class="absolute top-0.5 left-4 transition-transform rotate-0 peer-checked:rotate-180"
    >
      <Icon name="ph:arrow-circle-down-fill" class="icon w-8" />
    </div>
    <div class="ml-16">
      <slot name="sectionName" />
    </div>
    <!-- Content -->
    <div
      class="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-fit rounded-b ml-5 trans"
    >
      <slot name="item" />
    </div>
  </div>
</template>
