<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import NavMenu from './components/NavMenu.vue'

const menuOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

watch(route, () => {
  menuOpen.value = false
})

function handleScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="site">
    <header
      class="site-header"
      :class="{ 'is-home': route.name === 'home', 'is-scrolled': scrolled }"
    >
      <div class="site-header__inner wrap">
        <router-link to="/" class="brand">Muralhas da Sé<span>Restaurante</span></router-link>

        <button
          class="menu-toggle"
          :class="{ 'is-open': menuOpen }"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen"
          aria-controls="site-nav"
        >
          <span class="menu-toggle__label">{{ menuOpen ? 'Fechar' : 'Menu' }}</span>
          <span class="menu-toggle__icon">
            <i></i><i></i>
          </span>
        </button>
      </div>
    </header>

    <NavMenu :open="menuOpen" @close="menuOpen = false" />

    <main>
      <router-view />
    </main>

    <footer class="site-footer">
      <div class="wrap site-footer__inner">
        <div>
          <p class="eyebrow">Muralhas da Sé</p>
          <p class="site-footer__address">
            Galerias Ritz · Rua Castilho, Lisboa<br />
            geral@muralhasdase.pt · +351 212 000 000
          </p>
        </div>
        <div class="site-footer__links">
          <router-link to="/pratos">Pratos</router-link>
          <router-link to="/equipa">Equipa</router-link>
          <a href="#reservar">Reservar</a>
        </div>
        <p class="site-footer__legal">© {{ new Date().getFullYear() }} Muralhas da Sé</p>
      </div>
    </footer>
  </div>
</template>

<style>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  padding: 22px 0;
  background: transparent;
  box-shadow: none;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.site-header.is-scrolled {
  background: rgba(12, 12, 10, 0.92);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 var(--line);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-family: var(--font-display);
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  color: var(--ink);
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand span {
  font-family: var(--font-body);
  font-size: 0.6rem;
  color: var(--brass);
  margin-top: 4px;
}

.menu-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  background: none;
  border: none;
  color: var(--ink);
  font-size: 0.9rem;
}

.menu-toggle__icon {
  width: 30px;
  height: 18px;
  position: relative;
}

.menu-toggle__icon i {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--ink);
  transition: transform 0.3s ease, opacity 0.3s ease, top 0.3s ease;
}

.menu-toggle__icon i:first-child {
  top: 4px;
}

.menu-toggle__icon i:last-child {
  top: 14px;
}

.menu-toggle.is-open .menu-toggle__icon i:first-child {
  top: 9px;
  transform: rotate(45deg);
}

.menu-toggle.is-open .menu-toggle__icon i:last-child {
  top: 9px;
  transform: rotate(-45deg);
}

main {
  min-height: 100vh;
}

.site-footer {
  border-top: 1px solid var(--line);
  background: var(--bg-panel);
  padding: 56px 0 32px;
}

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
}

.site-footer__address {
  color: var(--ink-dim);
  margin-top: 10px;
  font-size: 0.95rem;
}

.site-footer__links {
  display: flex;
  gap: 24px;
  align-self: flex-start;
}

.site-footer__links a:hover {
  color: var(--brass);
}

.site-footer__legal {
  width: 100%;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  font-size: 0.8rem;
  color: var(--ink-dim);
}
</style>