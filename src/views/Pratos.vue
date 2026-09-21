<script setup>
import { ref, computed } from 'vue'
import { categories, getPratosByCategory } from '../data/pratos'

const active = ref(categories[0].id)

const activeItems = computed(() => getPratosByCategory(active.value))
</script>

<template>
  <div class="menu-page">
    <section class="menu-hero wrap">
      <p class="eyebrow">Gastronomia</p>
      <h1>A Carta</h1>
      <p class="menu-hero__lead">
        Um menu cuidadosamente pensado ao pormenor, entre sabores do mar e da
        terra — com a sazonalidade dos produtos como ponto de partida.
        Clica num prato para o veres em detalhe.
      </p>
    </section>

    <nav class="menu-tabs wrap">
      <button
        v-for="cat in categories"
        :key="cat.id"
        class="menu-tabs__item"
        :class="{ 'is-active': active === cat.id }"
        @click="active = cat.id"
      >
        {{ cat.label }}
      </button>
    </nav>

    <section class="menu-list wrap">
      <ul class="menu-list__group">
        <li v-for="item in activeItems" :key="item.slug" class="menu-list__row">
          <router-link :to="`/pratos/${item.slug}`" class="menu-list__link">
            <div class="menu-list__media">
              <img v-if="item.image" :src="item.image" :alt="item.name" loading="lazy" />
            </div>
            <div class="menu-list__text">
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
            </div>
            <span class="menu-list__arrow" aria-hidden="true">→</span>
          </router-link>
        </li>
      </ul>
    </section>

    <section class="menu-note wrap">
      <p>
        Também disponíveis: menu degustação, menu executivo de almoço e
        opção vegan completa. Consulte a equipa de sala para harmonização
        de vinhos.
      </p>
      <a href="#reservar" class="btn btn-solid">Reservar mesa</a>
    </section>
  </div>
</template>

<style scoped>
.menu-page {
  padding-top: 160px;
  padding-bottom: 120px;
}

.menu-hero {
  margin-bottom: 56px;
}

.menu-hero h1 {
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  margin: 10px 0 22px;
}

.menu-hero__lead {
  color: var(--ink-dim);
  max-width: 52ch;
}

.menu-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--line);
  padding-bottom: 20px;
  margin-bottom: 48px;
}

.menu-tabs__item {
  background: none;
  border: 1px solid var(--line);
  color: var(--ink-dim);
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.menu-tabs__item.is-active {
  border-color: var(--red);
  color: var(--ink);
  background: var(--red);
}

.menu-tabs__item:hover:not(.is-active) {
  border-color: var(--ink-dim);
  color: var(--ink);
}

.menu-list__group {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-list__row {
  border-bottom: 1px solid var(--line);
}

.menu-list__link {
  display: grid;
  grid-template-columns: 96px 1fr auto;
  gap: 24px;
  align-items: center;
  padding: 22px 4px;
  transition: background 0.2s ease;
}

.menu-list__link:hover {
  background: var(--bg-panel);
}

.menu-list__link:hover .menu-list__arrow {
  color: var(--ink);
  transform: translateX(4px);
}

.menu-list__media {
  width: 96px;
  height: 96px;
  border-radius: 2px;
  background: var(--bg-panel-raised);
  overflow: hidden;
}

.menu-list__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-list__text h3 {
  font-size: 1.2rem;
  margin-bottom: 6px;
}

.menu-list__text p {
  color: var(--ink-dim);
  font-size: 0.92rem;
  max-width: 56ch;
}

.menu-list__arrow {
  color: var(--ink-dim);
  font-size: 1.2rem;
  transition: transform 0.2s ease, color 0.2s ease;
}

.menu-note {
  margin-top: 64px;
  padding-top: 40px;
  border-top: 1px solid var(--line);
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
}

.menu-note p {
  color: var(--ink-dim);
  max-width: 52ch;
}

@media (max-width: 560px) {
  .menu-list__link {
    grid-template-columns: 64px 1fr;
  }
  .menu-list__arrow {
    display: none;
  }
  .menu-list__media {
    width: 64px;
    height: 64px;
  }
}
</style>
