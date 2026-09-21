<script setup>
import { RouterLink } from 'vue-router'
import DishCard from '../components/DishCard.vue'

const dishes = [
  {
    num: '01',
    slug: 'cabrito-assado',
    name: 'Cabrito Assado no Forno',
    description:
      'Assado lentamente com batata a murro, cenoura e laranja, até se desfazer à primeira garfada.',
    image: '/media/pratos/cabrito-assado.jpg'
  },
  {
    num: '02',
    slug: 'lagostins-grelhados',
    name: 'Lagostins Grelhados',
    description:
      'Lagostins inteiros grelhados na brasa, servidos simplesmente com limão.',
    image: '/media/pratos/lagostins-grelhados.jpg'
  },
  {
    num: '03',
    slug: 'ameijoas-bulhao-pato',
    name: 'Amêijoas à Bulhão Pato',
    description:
      'Salteadas em azeite, alho, vinho branco e coentros — um clássico português.',
    image: '/media/pratos/ameijoas-bulhao-pato.jpg'
  },
  {
    num: '04',
    slug: 'bacalhau-a-bras',
    name: 'Bacalhau à Brás',
    description:
      'Bacalhau desfiado com batata palha e ovo, finalizado com azeitona preta.',
    image: '/media/pratos/bacalhau-a-bras.jpg'
  },
  {
    num: '05',
    slug: 'arroz-cabidela',
    name: 'Arroz de Cabidela',
    description:
      'Arroz malandrinho de carne, cozinhado à moda tradicional com couve.',
    image: '/media/pratos/arroz-cabidela.jpg'
  },
  {
    num: '06',
    slug: 'cheesecake-frutos-vermelhos',
    name: 'Cheesecake de Frutos Vermelhos',
    description:
      'Base amanteigada, recheio cremoso e uma calda generosa de frutos vermelhos.',
    image: '/media/pratos/cheesecake-frutos-vermelhos.jpg'
  }
]
</script>

<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <video
        class="hero__video"
        autoplay
        muted
        loop
        playsinline
        poster="/media/hero-poster.jpg"
      >
        <source src="/media/muralhas 16_9.mp4" type="video/mp4" />
      </video>
      <div class="hero__scrim"></div>

      <div class="hero__content wrap">
        <p class="eyebrow">Cozinha Nacional &amp; Portuguesa · Viseu</p>
        <h1>Um ponto de encontro<br />de Portugal</h1>
        <div class="hero__actions">
          <a href="#reservar" class="btn btn-solid">Reservar mesa</a>
          <router-link to="/pratos" class="btn">Ver os pratos</router-link>
        </div>
      </div>

      <span class="hero__scroll">Deslize</span>
    </section>

    <!-- INTRO / CONCEITO -->
    <section class="concept">
      <div class="wrap concept__grid">
        <div class="concept__text">
          <p class="eyebrow">O Conceito</p>
          <h2>Produto, rigor e elegância, em cada prato</h2>
          <p class="concept__lead">
            A nossa cozinha nasce com os sabores do Atlântico português. 
            Cada prato é pensado ao pormenor
            para expressar a pureza dos seus ingredientes, sem artifícios.
          </p>
          <router-link to="/pratos" class="btn">Conhecer a carta</router-link>
        </div>
        <div class="concept__media">
          <img
            src="/media/Carta.jpeg"
            alt="Preparação de um prato na cozinha do restaurante"
          />
        </div>
      </div>
    </section>

    <!-- PRATOS -->
    <section class="dishes">
      <div class="wrap dishes__head">
        <p class="eyebrow">Uma viagem gastronómica</p>
        <h2>Os pratos que nos definem</h2>
        <router-link to="/pratos" class="dishes__link">Ver carta completa →</router-link>
      </div>

      <div class="dishes__rail wrap">
        <DishCard
          v-for="dish in dishes"
          :key="dish.num"
          :num="dish.num"
          :name="dish.name"
          :description="dish.description"
          :image="dish.image"
          :slug="dish.slug"
        />
      </div>
    </section>

    <!-- EQUIPA TEASER -->
    <section class="team-teaser">
      <img src="/media/team.jpg" alt="Equipa do restaurante" class="team-teaser__media" />
      <div class="team-teaser__scrim"></div>
      <div class="wrap team-teaser__content">
        <p class="eyebrow">A Equipa</p>
        <h2>Uma equipa movida pela<br />criatividade e dedicação</h2>
        <p class="team-teaser__lead">
          Tradição e inovação convergem, guiadas por quem prepara e serve
          cada mesa todos os dias.
        </p>
        <router-link to="/equipa" class="btn btn-solid">Conhecer a equipa</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 560px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: var(--bg-panel);
}

.hero__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(12, 12, 10, 0.95) 0%,
    rgba(12, 12, 10, 0.35) 45%,
    rgba(12, 12, 10, 0.55) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 2;
  padding-bottom: 96px;
}

.hero h1 {
  font-size: clamp(2.4rem, 6vw, 4.6rem);
  margin: 14px 0 32px;
  max-width: 16ch;
}

.hero__actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero__scroll {
  position: absolute;
  bottom: 28px;
  right: var(--gutter);
  z-index: 2;
  color: var(--ink-dim);
  font-size: 0.8rem;
  writing-mode: vertical-rl;
}

/* CONCEPT */
.concept {
  padding: 120px 0;
}

.concept__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

.concept__text h2 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  margin: 10px 0 22px;
  max-width: 14ch;
}

.concept__lead {
  color: var(--ink-dim);
  max-width: 46ch;
  margin-bottom: 32px;
}

.concept__media img {
  border-radius: 2px;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

/* DISHES */
.dishes {
  padding: 60px 0 120px;
}

.dishes__head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 16px 32px;
  margin-bottom: 40px;
}

.dishes__head h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  flex: 1 1 auto;
}

.dishes__link {
  color: var(--brass);
  font-size: 0.9rem;
  white-space: nowrap;
}

.dishes__rail {
  display: flex;
  gap: 28px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 12px;
}

/* TEAM TEASER */
.team-teaser {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.team-teaser__media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-teaser__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(12, 12, 10, 0.92) 0%,
    rgba(12, 12, 10, 0.55) 55%,
    rgba(12, 12, 10, 0.3) 100%
  );
}

.team-teaser__content {
  position: relative;
  z-index: 1;
  padding: 80px 0;
}

.team-teaser h2 {
  font-size: clamp(1.9rem, 3.4vw, 2.8rem);
  margin: 12px 0 20px;
}

.team-teaser__lead {
  color: var(--ink-dim);
  max-width: 40ch;
  margin-bottom: 28px;
}

@media (max-width: 860px) {
  .concept__grid {
    grid-template-columns: 1fr;
  }
  .concept__media {
    order: -1;
  }
}
</style>
