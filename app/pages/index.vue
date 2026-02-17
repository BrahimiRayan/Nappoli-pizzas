<template>
  <UBanner id="example" title="This is a closable banner." close />
  <Mhero />

  <main
    class=" mx-auto my-10 flex flex-col items-center rounded-xl bg-[url('~/assets/pics/wall.jpg')] bg-no-repeat bg-cover backdrop-blur-md text-white">
    <h1 class="text-6xl  text-shadow-lg text-shadow-black">Notre menu</h1>
    <p class="text-shadow-lg text-shadow-black">Préparez-vous pour une Expérience Ultra-Italienne !</p>

    <div class="carousel-container p-5">
      <div class="carousel-track">
        <div v-for="n in 20" :key="n" class="card">
          <div class="flex flex-col items-center">
            <img src="~/assets/pics/pizzas.png" alt="Pizza" class="w-40 h-40" />
            <span class="flex flex-col items-center">
              <h2>Pizza name {{ n }}</h2>
              <p>Price: $10.{{ n }}</p>

              <p>ingrediant: tomates , olive , mozarilla.</p>
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