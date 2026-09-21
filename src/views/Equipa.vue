<script setup>
const team = [
  { name: 'Victor Jardim', role: 'Diretor do Restaurante' },
  { name: 'Diego Silva', role: 'Chef de Cozinha' },
  { name: 'Juliana Gontijo', role: 'Chefe de Sala' },
  { name: 'Gilberto Silva', role: 'Sous-Chef' },
  { name: 'Micheline Barbalho', role: 'Chef de Pastelaria' },
  { name: 'Telmo Santos', role: 'Chefe de Bar' },
  { name: 'Leonardo Teixeira', role: 'Host' }
]
</script>

<template>
  <div class="team-page">
    <section class="team-hero wrap">
      <p class="eyebrow">Kabuki Equipa</p>
      <h1>Uma equipa movida pela<br />criatividade e dedicação</h1>
      <p class="team-hero__lead">
        Tradição e inovação convergem no nosso dia a dia, guiadas por quem
        prepara e serve cada mesa. Convidamo-lo a experimentar a harmonia
        de sabores, serviço e hospitalidade que nos definem.
      </p>
    </section>

    <section class="team-grid wrap">
      <article v-for="member in team" :key="member.name" class="team-card">
        <div class="team-card__photo" aria-hidden="true"></div>
        <h3>{{ member.name }}</h3>
        <p>{{ member.role }}</p>
      </article>
    </section>
  </div>
</template>

<style scoped>
.team-page {
  padding-top: 160px;
  padding-bottom: 120px;
}

.team-hero {
  margin-bottom: 64px;
}

.team-hero h1 {
  font-size: clamp(2.2rem, 4.6vw, 3.4rem);
  margin: 10px 0 22px;
  max-width: 18ch;
}

.team-hero__lead {
  color: var(--ink-dim);
  max-width: 56ch;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 40px 28px;
}

.team-card__photo {
  aspect-ratio: 3 / 4;
  border-radius: 2px;
  margin-bottom: 18px;
  background:
    linear-gradient(135deg, transparent 48%, var(--line) 49%, var(--line) 51%, transparent 52%),
    var(--bg-panel-raised);
}

.team-card h3 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.team-card p {
  color: var(--brass);
  font-size: 0.85rem;
}
</style>
