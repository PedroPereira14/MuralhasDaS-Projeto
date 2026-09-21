<script setup>
import { computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { getPratoBySlug, categories } from '../data/pratos'

const route = useRoute()
const router = useRouter()

const prato = computed(() => getPratoBySlug(route.params.slug))

const categoryLabel = computed(() => {
  const cat = categories.find((c) => c.id === prato.value?.category)
  return cat ? cat.label : ''
})

function goBack() {
  // Se veio de outra página desta app, volta a ela; caso contrário vai para a carta.
  if (window.history.state?.back) {
    router.back()
  } else {
    router.push('/pratos')
  }
}
</script>

<template>
  <div v-if="prato" class="prato-page">
    <div class="prato-page__media">
      <img :src="prato.image" :alt="prato.name" />
      <div class="prato-page__scrim"></div>
      <button class="back-btn" @click="goBack">
        <span aria-hidden="true">←</span> Voltar
      </button>
    </div>

    <div class="wrap prato-page__body">
      <p class="eyebrow">{{ categoryLabel }}</p>
      <h1>{{ prato.name }}</h1>
      <p class="prato-page__desc">{{ prato.longDescription || prato.description }}</p>

      <router-link to="/pratos" class="btn">Ver a carta completa</router-link>
    </div>
  </div>

  <div v-else class="prato-page prato-page--empty wrap">
    <p class="eyebrow">Ups</p>
    <h1>Não encontrámos este prato</h1>
    <p class="prato-page__desc">Pode já não estar disponível na carta.</p>
    <router-link to="/pratos" class="btn btn-solid">Ver a carta completa</router-link>
  </div>
</template>

<style scoped>
.prato-page {
  padding-bottom: 100px;
}

.prato-page--empty {
  padding-top: 180px;
}

.prato-page--empty h1 {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  margin: 10px 0 18px;
}

.prato-page--empty .prato-page__desc {
  margin-bottom: 28px;
}

.prato-page__media {
  position: relative;
  height: 60vh;
  min-height: 360px;
  max-height: 640px;
  overflow: hidden;
}

.prato-page__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.prato-page__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(12, 12, 10, 0.75) 0%,
    rgba(12, 12, 10, 0) 35%
  );
}

.back-btn {
  position: absolute;
  top: 104px;
  left: var(--gutter);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(12, 12, 10, 0.55);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(243, 237, 225, 0.35);
  color: var(--ink);
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 0.9rem;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.back-btn:hover {
  background: rgba(12, 12, 10, 0.8);
  border-color: var(--ink);
}

.prato-page__body {
  padding-top: 48px;
  max-width: 780px;
}

.prato-page__body h1 {
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  margin: 10px 0 24px;
}

.prato-page__desc {
  color: var(--ink-dim);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 36px;
  max-width: 60ch;
}
</style>
