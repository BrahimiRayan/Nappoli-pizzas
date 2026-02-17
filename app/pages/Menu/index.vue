<template>
  <main class="w-[90%] mx-auto my-10">
    <div class="relative rounded-3xl overflow-hidden mb-12 h-[250px]">
      <div class="absolute inset-0 border border-white/20">
        <img src="~/assets/pics/p.jpeg" alt="Menu" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
      </div>
      <div class="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-2">Notre Menu</h1>
        <p class="text-xl text-amber-400">Des pizzas artisanales préparées avec amour</p>
        <div class="w-24 h-1 bg-amber-500 mt-4"></div>
      </div>
    </div>

    <section>
      <Pizzas />
    </section>

    <section class="mt-20">
      <Boissons />
    </section>
  </main>
</template>

<script setup>


// Pizzas spéciales (vous pouvez aussi les charger depuis Supabase si vous avez une colonne "coup de cœur")
const specials = [
  { name: 'Truffe & Champignons', description: 'Crémeuse à la truffe', image: '/images/pizzas/truffe.jpg' },
  { name: 'Burrata & Jambon', description: 'Burrata crémeuse et roquette', image: '/images/pizzas/burrata.jpg' }
]
</script>
