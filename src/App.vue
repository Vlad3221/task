<template>
  <nav>
    <div class="navigationElements">
      <div class="navigationsLeftBlock"></div>
      <div class="rightBlocksElements">
        <h1>Проведение ТО и мелкий ремонт</h1>
        <div class="linkBlock">
          <router-link class="linkHeader" to="/All">Общее</router-link>
          <router-link class="linkHeader" to="/">Товар списания</router-link>
          <router-link class="linkHeader" to="/test2">Доп. расходы</router-link>
        </div>
        <router-view/>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" src="./reset.scss"></style>
<style lang="scss" src="./App.scss"></style>