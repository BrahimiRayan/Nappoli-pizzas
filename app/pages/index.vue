<template>
  <UBanner id="example" title="This is a closable banner." close />
  <Mhero />

  <main
    class=" mx-auto my-10 flex flex-col items-center rounded-xl bg-[url('~/assets/pics/wall.jpg')] bg-no-repeat bg-cover backdrop-blur-md text-white">
    <h1 class="text-6xl  text-shadow-lg text-shadow-black">Notre menu</h1>
    <p class="text-shadow-lg text-shadow-black">Préparez-vous pour une Expérience Ultra-Italienne !</p>

    <div class="carousel-container p-5">
      <div class="carousel-track">
        <div v-for="pizza in pizzas" :key="pizza.id" class="card">
          <div class="flex flex-col items-center">
            <img src="~/assets/pics/pizzas.png" alt="Pizza" class="w-40 h-40" />
            <span class="flex flex-col items-center max-w-40 text-center justify-center text-shadow-sm text-shadow-black">
              <h2 class="text-orange-600 text-xl">{{ pizza.name }}</h2>
              <p class="text-red-500">prix <span class="text-lg text-green-500">{{ pizza.price }}</span> <span class="text-white">€</span></p>

              <p>{{ pizza.ingredients.join(' • ') }}</p>
            </span>
          </div>
        </div>
      </div>
    </div>

    <NuxtLink to="/Menu" class="p-3 rounded-2xl bg-orange-600 shadow-2xl shadow-black text-white m-3 flex items-center gap-2" >
      <span class="ml-2">Découvrez notre menu !</span>
      <UIcon name="i-lucide-arrow-right" />
    </NuxtLink>
  </main>

  <Mshopinfo />
</template>

<script setup >
import { loadPizzas } from '~/supabase'

const pizzas = ref([])

onMounted(async () => {
  try {
    const data = await loadPizzas() // Attend les données
    pizzas.value = data.map(p => ({
      name: p.name,
      category: p.category,
      price: p.price,
      ingredients: p.ingrediant || [], // Assurez-vous que le champ existe
      image: p.image
    }))
  } catch (error) {
    console.error('Erreur chargement pizzas :', error)
  }
})
</script>


<style scoped>
.carousel-container {
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  gap: 0.75rem;
  width: fit-content;
  animation: scroll 100s linear infinite;
}

.card {
  padding: 2rem;
  min-width: 250px;
  flex-shrink: 0;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

/* Pause on hover */
.carousel-container:hover .carousel-track {
  animation-play-state: paused;
}
</style>