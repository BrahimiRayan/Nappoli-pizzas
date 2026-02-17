<template>
    <UHeader class="border-b z-2000">
      <template #title>
        <h1 class="bg-[url('~/assets/pics/logo.png')] size-15 bg-no-repeat bg-cover text-[0px]">Napoli pizza </h1>
      </template>

      <UNavigationMenu :items="items" color="primary"/>

        <template #right>
            <UColorModeButton />
            <UButton
                icon="i-uiw-message"
                class="bg-orange-600 hover:bg-orange-500 transition-all duration-300 ease-in-out"
            >
                Commander maintenue
            </UButton>
        </template>

     <template #body >
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5 " />
      </template>

    </UHeader>
    <slot/>

  <footer class="border-t border-amber-600 mt-auto bg-black/20 backdrop-blur-sm">
  <div class="container mx-auto px-4 py-6">
    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-sm dark:text-gray-400 order-2 md:order-1">
        © 2026 Napoli Pizza. Tous droits réservés.
      </p>
      <div class="flex gap-4 text-sm order-1 md:order-2">
        <NuxtLink to="/mentions-legales" class="hover:text-amber-400 transition">
          Mentions légales
        </NuxtLink>
        <NuxtLink to="/confidentialite" class="hover:text-amber-400 transition">
          Confidentialité
        </NuxtLink>
        <NuxtLink to="/contact" class="hover:text-amber-400 transition">
          Contact
        </NuxtLink>
      </div>
      <!-- Réseaux sociaux -->
      <div class="flex gap-3 order-3">
        <a href="https://facebook.com/votrepage" target="_blank" rel="noopener noreferrer" 
           class="dark:text-gray-400 hover:text-amber-400 transition" aria-label="Facebook">
          <UIcon name="i-lucide-facebook" class=" w-5 h-5" />
        </a>
        <a href="https://instagram.com/votrecompte" target="_blank" rel="noopener noreferrer"
           class="dark:text-gray-400 hover:text-amber-400 transition" aria-label="Instagram">
          <UIcon name="i-lucide-instagram" class=" w-5 h-5" />
        </a>
        <a href="https://twitter.com/votrecompte" target="_blank" rel="noopener noreferrer"
           class="dark:text-gray-400 hover:text-amber-400 transition" aria-label="Twitter">
          <UIcon name="i-lucide-youtube" class=" w-5 h-5" />
        </a>
        
      </div>
    </div>
  </div>
</footer>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Accueil',
  to: '/',
  icon: 'i-lucide-home',
  active: route.path === '/'
}, {
  label: 'Menu',
  to: '/Menu',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/Menu')
}, {
  label: 'A propos',
  icon: 'i-ix-about',
  to: '/About-us',
  active: route.path.startsWith('/About-us')
}, {
  label: 'Contacts',
  icon: 'i-hugeicons-contact-01',
  to: '/Contacts',
  active: route.path.startsWith('/contacts')
}])
</script>