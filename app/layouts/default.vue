<template>
    <UHeader class="border-b">
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
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Accueil',
  to: '/',
  icon: 'i-lucide-home',
  active: route.path.startsWith('/')
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