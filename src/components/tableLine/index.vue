<template>
  <div>
    <tr :class="`line${index}`">
      <td>
        <div class="burger burgers"
             v-on:mousedown="$emit('lineMoved', index)"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>{{ num }}</span>
      </td>
      <td>
        <span class="bold phone">Действие</span>
        <div class="burger circles" v-on:mouseenter="opened" v-on:mouseleave="opened">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="delete" :class="{active: isOpened}" v-on:mouseenter="opened" v-on:mouseleave="opened">
          <button>Удалить</button>
        </div>
      </td>
      <td>
        <span class="bold phone">Наименование еденицы</span>
        <div class="informationBlock">
          <span>{{ textTovar }}</span>
        </div>
      </td>
      <td>
        <span class="bold phone">Цена</span>
        <div class="informationBlock">
          <span>{{ prise }}</span>
        </div>
      </td>
      <td>
        <span class="bold phone">Кол-во</span>
        <div class="informationBlock">
          <span>{{ quantity }}</span>
        </div>
      </td>
      <td>
        <span class="bold phone">Название товара</span>
        <div class="informationBlock">
          <span>{{ description }}</span>
        </div>
      </td>
      <td>
        <span class="bold phone">Итого</span>
        <div class="informationBlock">
          <span>{{ result }}</span>
        </div>
      </td>
    </tr>
    <tr v-if="movedIndex === index" class="mouseEnter"></tr>
  </div>
</template>

<style src="./index.scss" lang="scss"></style>
<script src="./index.ts"></script>
