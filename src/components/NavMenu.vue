<script setup>
defineProps({
  open: { type: Boolean, default: false }
})
defineEmits(['close'])

const links = [
  { to: '/', label: 'Início', num: '01' },
  { to: '/pratos', label: 'Pratos', num: '02' },
  { to: '/equipa', label: 'Equipa', num: '03' },
]
</script>

<template>
  <transition name="fade">
    <div v-if="open" class="nav-overlay" id="site-nav">
      <div class="nav-overlay__inner wrap">
        <nav>
          <router-link
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="nav-overlay__link"
            @click="$emit('close')"
          >
            <span class="nav-overlay__num">{{ link.num }}</span>
            {{ link.label }}
          </router-link>
        </nav>

        <div class="nav-overlay__meta">
          <p class="eyebrow">Contacto</p>
          <p>geral@muralhadase.pt</p>
          <p>+351 212 000 000</p>
          <a href="#reservar" class="btn btn-solid" @click="$emit('close')">Reservar</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.nav-overlay {
  position: fixed;
  inset: 0;
  z-index: 30;
  background: var(--bg);
  display: flex;
  align-items: center;
}

.nav-overlay__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nav-overlay__link {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 7vw, 4.4rem);
  color: var(--ink-dim);
  display: flex;
  align-items: baseline;
  gap: 18px;
  transition: color 0.25s ease;
}

.nav-overlay__link:hover,
.nav-overlay__link.router-link-exact-active {
  color: var(--ink);
}

.nav-overlay__num {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--red);
}

.nav-overlay__meta {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--ink-dim);
  min-width: 220px;
}

.nav-overlay__meta .btn {
  margin-top: 18px;
  width: fit-content;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 720px) {
  .nav-overlay__inner {
    gap: 40px;
  }
}
</style>
