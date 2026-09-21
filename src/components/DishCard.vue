<script setup>
defineProps({
  num: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: '' },
  slug: { type: String, default: '' }
})
</script>

<template>
  <component
    :is="slug ? 'router-link' : 'article'"
    :to="slug ? `/pratos/${slug}` : undefined"
    class="dish-card"
  >
    <div class="dish-card__media">
      <img v-if="image" :src="image" :alt="name" />
      <div v-else class="dish-card__placeholder" aria-hidden="true"></div>
    </div>
    <div class="dish-card__body">
      <span class="dish-card__num">{{ num }}</span>
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
    </div>
  </component>
</template>

<style scoped>
.dish-card {
  display: block;
  flex: 0 0 clamp(240px, 28vw, 320px);
  scroll-snap-align: start;
  cursor: pointer;
}

.dish-card__media {
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 2px;
  background: var(--bg-panel-raised);
}

.dish-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.dish-card:hover .dish-card__media img {
  transform: scale(1.04);
}

.dish-card__placeholder {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(135deg, transparent 48%, var(--line) 49%, var(--line) 51%, transparent 52%),
    var(--bg-panel-raised);
}

.dish-card__body {
  padding-top: 18px;
}

.dish-card__num {
  font-size: 0.78rem;
  color: var(--red);
  font-family: var(--font-body);
}

.dish-card__body h3 {
  font-size: 1.25rem;
  margin: 8px 0 8px;
}

.dish-card__body p {
  color: var(--ink-dim);
  font-size: 0.92rem;
  line-height: 1.55;
}
</style>
