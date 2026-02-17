<template>
  <main class=" mx-auto my-10">
    <div class="relative h-100 w-full border rounded-3xl overflow-hidden mb-16 group">
      <div class="absolute inset-0">
        <img src="~/assets/pics/shop.jpg" alt="Notre pizzeria" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>
      
      <!-- Contenu centré -->
      <div class="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg text-shadow-black">
          Napoli <span class="text-amber-400">Pizza</span>
        </h1>
        <p class="text-xl text-white/90 max-w-2xl mx-auto mb-8 text-shadow-lg text-shadow-black">
          Découvrez Napoli Pizza Champion de France, votre adresse incontournable pour déguster d'authentiques pizzas italiennes. Nous offrons des services de livraison rapide et de vente à emporter pour satisfaire toutes vos envies.
Savourez des ingrédients frais et de qualité, préparés selon des recettes traditionnelles.
Notre spécialité, la pizza romaine, est élaborée avec un levain ou un préféremment pour garantir une digestibilité optimale et un croustillant inégalé.
Que vous soyez en solo, en famille ou entre amis, Napoli Pizza est là pour régaler vos papilles à tout moment de la journée.
        </p>
        <div class="w-32 h-1 bg-amber-500 mx-auto"></div>
      </div>
    </div>

    <!-- Section "Notre histoire" avec cartes statistiques -->
    <div class="grid lg:grid-cols-2 gap-12 mb-20 items-center">
      <div class="space-y-6">
        <h2 class="text-4xl font-bold text-amber-600 relative inline-block">
          Notre histoire
          <span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-amber-500 rounded-full"></span>
        </h2>
        <p class="dark:text-gray-300 leading-relaxed text-lg">
          Tout a commencé avec une passion et un amour pour les pizzas. 
          En 2026, nous avons décidé d'ouvrir les portes de <span class="text-amber-400 font-semibold">Napoli Pizza</span> pour partager 
          notre passion de la pizza napolitaine. Ici, chaque pizza est préparée à la main, 
          avec des ingrédients frais et beaucoup d'amour.
        </p>
        <p class="dark:text-gray-300 leading-relaxed">
          Notre pâte à pizza est préparée quotidiennement dans notre laboratoire de Clermont-Ferrand avec une farine italienne que nous pétrissons avec un grand savoir-faire. Cela nous permet d'obtenir un produit unique, croustillant, avec un bel alvéolage, une bonne tenue et surtout une pizza digeste.

Nous cuisons nos pizzas dans un four électrique italien de très haute qualité.

Faites de sauce tomate fraîche, de mozzarella Fiordilatte de haute qualité et de garnitures délicieusement cuisinées par nos soins, elles sont parmi les meilleures. 
Venez les goûter, nous sommes certains que vous ne serez pas déçu ! 
        </p>
        
        <!-- Bouton de réservation (optionnel) -->
        <button class="mt-4 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-amber-600/50 text-shadow-xs text-shadow-black">
          Commander maintenue !
        </button>
      </div>
      
      <!-- Statistiques avec effet de verre -->
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white/5 light:bg-black/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-500/50 transition-all">
          <span class="text-4xl font-bold text-amber-500">15+</span>
          <p class="dark:text-gray-400">Pizzas artisanales</p>
        </div>
        <div class="bg-white/5 light:bg-black/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-500/50 transition-all">
          <span class="text-4xl font-bold text-amber-500">100%</span>
          <p class="dark:text-gray-400">Fait maison</p>
        </div>
        <div class="bg-white/5 light:bg-black/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-500/50 transition-all">
          <span class="text-4xl font-bold text-amber-500">4.6★</span>
          <p class="dark:text-gray-400">Avis clients</p>
        </div>
        <div class="bg-white/5 light:bg-black/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-500/50 transition-all">
          <span class="text-4xl font-bold text-amber-500">5000+</span>
          <p class="dark:text-gray-400">Pizzas servies</p>
        </div>
      </div>
    </div>

    <!-- Section "Nos valeurs" avec icônes -->
    <div class="mb-20">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-amber-600">Nos valeurs</h2>
        <p class="dark:text-gray-400 mt-2">Ce qui rend nos pizzas si spéciales</p>
      </div>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="value in values" :key="value.title" 
             class="bg-linear-to-b dark:from-amber-500/10 from-amber-600/30 to-transparent rounded-2xl p-6 text-center border border-amber-500/20 hover:border-amber-500/50 transition-all group">
          <div class="text-5xl mb-4 group-hover:scale-110 transition-transform">{{ value.icon }}</div>
          <h3 class="text-xl font-semibold dark:text-white mb-2">{{ value.title }}</h3>
          <p class="dark:text-gray-400 text-gray-600 text-sm">{{ value.description }}</p>
        </div>
      </div>
    </div>

    <!-- Section "L'équipe" avec cartes -->
    <div class="mb-20">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-amber-600">Notre équipe</h2>
        <p class="dark:text-gray-400 mt-2">Des passionnés au service de vos papilles</p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="member in team" :key="member.name" 
             class="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all">
          <div class="aspect-square overflow-hidden">
            <img :src="member.image.toString()" :alt="member.name" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
            
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold dark:text-white">{{ member.name }}</h3>
            <p class="text-amber-400 mb-3">{{ member.role }}</p>
            <p class="dark:text-gray-400 text-sm">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>

<!-- Section "Notre engagement" avec fond en verre -->
<div class="relative rounded-3xl overflow-hidden mb-16">
  <div class="absolute inset-0">
    <img src="~/assets/pics/pizzabg.jpg" alt="Notre équipe en action" class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
  </div>
  
  <div class="relative z-10 p-12 text-center">
    <h2 class="text-4xl font-bold text-white mb-4">Notre engagement</h2>
    <p class="text-xl text-amber-400 max-w-3xl mx-auto">
      Un service rapide, une équipe souriante et des pizzas préparées avec soin, sous vos yeux.
    </p>
    <div class="flex flex-wrap justify-center gap-3 mt-8">
      <span class="px-4 py-2 bg-amber-600/80 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-amber-400/30">
        ⏱️ Service en 15 min max
      </span>
      <span class="px-4 py-2 bg-amber-600/80 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-amber-400/30">
        😊 Accueil chaleureux
      </span>
      <span class="px-4 py-2 bg-amber-600/80 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-amber-400/30">
        🚀 Livraison rapide
      </span>
      <span class="px-4 py-2 bg-amber-600/80 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-amber-400/30">
        👨‍🍳 Cuisine ouverte
      </span>
      <span class="px-4 py-2 bg-amber-600/80 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-amber-400/30">
        📦 Emballages éco-responsables
      </span>
    </div>
    <p class="text-white/70 text-sm mt-6 max-w-2xl mx-auto">
      Chez Napoli Pizza, nous mettons un point d'honneur à vous servir rapidement sans jamais compromettre la qualité. 
      Notre équipe est là pour vous accueillir le sourire aux lèvres et vous faire vivre un moment convivial.
    </p>
  </div>
</div>

  </main>
</template>

<script setup>
// Données modifiables selon votre pizzeria
const values = [
  { icon: '🍅', title: 'Qualité', description: 'Des ingrédients soigneusement sélectionnés' },
  { icon: '🔥', title: 'Tradition', description: 'Des recettes transmises depuis des générations' },
  { icon: '❤️', title: 'Passion', description: "L'amour du métier dans chaque pizza" },
  { icon: '🤝', title: 'Partage', description: 'Créer des moments conviviaux autour d\'une pizza' }
]

const team = [
  { 
    name: 'Yoan GARCIN', 
    role: 'Fondateur & Chef pizzaiolo', 
    image: '/team/ownerPic.jpg',
    bio: "Le Chef Yoan GARCIN Vice Champion d'Europe de la pizza 2023 Champion de France de la Pizza 2017 L\’Homme derrière nos délicieuses pizzas"
  },
  { 
    name: 'Sofia Conti', 
    role: 'Maître fromagère', 
    image: '/team/emp1.jpeg',
    bio: 'Experte en fromages italiens, elle sélectionne les meilleures mozzarellas.'
  },
  { 
    name: 'Luca Ferrara', 
    role: 'Pizzaiolo', 
    image: '/team/emp2.jpeg',
    bio: 'Jeune talent formé dans les meilleures pizzerias de Rome.'
  }
]
</script>
