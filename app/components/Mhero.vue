<script setup lang="ts">
import type { highlight } from '@nuxt/ui/runtime/utils/fuse.js';

</script>

<template>
<UPageCard
    icon="i-mingcute-pizza-line"
    orientation="horizontal"
    spotlight
    spotlight-color="primary"
    class="mt-10 w-[90%] mx-auto overflow-hidden border-2 border-orange-400"
    :ui="{
        spotlight : 'dark:opacity-60 opacity-20',
        leadingIcon : 'size-10 text-orange-500'
    }"
  >
    <template #body>
        <div class="relative ">
            <h1 class="text-5xl md:w-90 max-md:w-[85%]">
                Des Slice d'Exception, Un Code d'Honneur !
            </h1>
            <p class="my-5">Bienvenue dans notre univers. Un site aussi épuré que nos recettes, une expérience aussi fluide que notre service. Ici, la qualité ne se discute pas, elle se code. Plongez dans une carte pensée pour les puristes et les gourmands, où l'âme de l'Italie se déguste à chaque bouchée.</p>

            <NuxtLink to="/Menu" class="p-3 bg-linear-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center gap-3 w-max">
                <span>
                    Commander maintenue
                </span>
                <UIcon name="i-lucide-arrow-right"/>
            </NuxtLink>
            <div class="absolute w-40 -top-25 z-0 right-0 -rotate-45">
                <img src="~/assets/pics/tomatos1.png" alt="tomatos" class="w-max" />
            </div>
        </div>
    </template>

  <div class="flex gap-1">
      <img src="~/assets/pics/pizzas.png" alt="Pizza" class="w-max" />
      <div class="bg-linear-to-b from-orange-500 to-orange-700 w-full rounded-b-full flex items-center justify-baseline overflow-x-hidden">
        <ul class=" rotate-90 flex gap-4 items-center">
            <p class="w-max text-white/80">Suivie nous</p>
            <span class="w-8 h-0.5 bg-amber-50"></span>
            <li class="rotate-270 ">
                <UIcon name="i-logos-facebook" class="size-5"/>
            </li>
            
            <li class="rotate-270 ">
                <UIcon name="i-skill-icons-instagram" class="size-5"/>
            </li>
            
            <li class="rotate-270 ">
                <UIcon name="i-logos-tiktok-icon" class="size-5"/>
            </li>
        </ul>
      </div>
  </div>
  </UPageCard>
</template>