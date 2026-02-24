<template>
    <h2 class="text-4xl font-bold text-amber-400 text-center mb-8 light:text-shadow-sm text-shadow-black">🍕 Nos Pizzas</h2>
    <div class="flex justify-center gap-3 mb-8 flex-wrap">
      <button v-for="cat in categories" :key="cat" 
              @click="selectedCategory = cat"
              :class="[
                'px-5 py-2 rounded-full text-sm font-medium transition-all',
                selectedCategory === cat 
                  ? 'bg-amber-600 text-white shadow-lg' 
                  : 'light:bg-black dark:bg-white/10 text-gray-300 dark:hover:bg-white/20 border border-white/10'
              ]">
        {{ cat }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="pizza in filteredPizzas" :key="pizza.name" 
           class="group light:bg-black/5 bg-white/5 light:border light:border-orange-300 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all hover:shadow-2xl hover:shadow-amber-600/20">
        <div class="relative h-48 overflow-hidden">
          <img :src="pizza.image" :alt="pizza.name" 
               class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500">
          <span class="absolute top-3 right-3 bg-amber-600/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            {{ pizza.category }}
          </span>
        </div>
        
        <div class="p-5">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-bold dark:text-white">{{ pizza.name }}</h3>
            <span class="text-2xl font-bold text-amber-500 light:text-shadow-sm text-shadow-black">{{ pizza.price }}€</span>
          </div>
          
          
          <p class="dark:text-gray-400 text-gray-600 text-sm mb-4">{{ pizza.ingredients.join(' • ') }}</p>
          
          
          <NuxtLink to="/Order" class="w-full py-2 bg-amber-600/80 hover:bg-amber-700 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2">
              <span>Commander</span>
              <span class="text-lg">→</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Message si aucune pizza -->
    <div v-if="filteredPizzas.length === 0" class="text-center text-gray-400 py-12">
      Aucune pizza dans cette catégorie pour le moment.
    </div>
</template>

<script setup >
import { ref, computed, onMounted } from 'vue'
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

// Calcul des catégories uniques (basé sur pizzas.value)
const categories = computed(() => {
  if (!pizzas.value.length) return ['Toutes']
  const cats = ['Toutes', ...new Set(pizzas.value.map(p => p.category))]
  return cats
})

const selectedCategory = ref('Toutes')

const filteredPizzas = computed(() => {
  if (selectedCategory.value === 'Toutes') return pizzas.value
  return pizzas.value.filter(p => p.category === selectedCategory.value)
})
</script>