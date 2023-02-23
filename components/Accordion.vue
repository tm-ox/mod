<template>
  <div class="relative rounded w-full">
    <input
      type="checkbox"
      class="peer absolute top-0 inset-x-0 w-full h-10 opacity-0 z-10 cursor-pointer"
    />
    <div class="absolute top-0.5">
      <Icon
        name="bi:arrow-down-right-circle-fill"
        class="icon w-5 md:w-[24px] mt-1.5 md:mt-0 bg-background rounded-full"
      />
    </div>
    <div class="ml-9 md:ml-10">
      <slot name="sectionName" />
    </div>
    <div
      class="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-fit rounded-b ml-5 trans"
    >
      <slot name="item" />
    </div>
  </div>
</template>
