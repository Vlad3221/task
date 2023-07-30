<template>
  <div class="homePage">
    <div class="block">
      <button class="createString" @click="getVisible = !getVisible">
        <span>+</span>
        Добавить строку
      </button>
    </div>
    <div class="block blockPad10">
      <button class="buttonSettings">
        <img src="@/images/combined-shape.svg" alt="">
      </button>
      <table>
        <tr>
          <td class="gl">
            <span class="bold">Номер</span>
          </td>
          <td class="gl">
            <span class="bold">Действие</span>
          </td>
          <td class="gl">
            <span class="bold">Наименование еденицы</span>
          </td>
          <td class="gl">
            <span class="bold">Цена</span>
          </td>
          <td class="gl">
            <span class="bold">Кол-во</span>
          </td>
          <td class="gl">
            <span class="bold">Название товара</span>
          </td>
          <td class="gl">
            <span class="bold">Итого</span>
          </td>
        </tr>
        <draggable v-model="data" tag="ul" :animation="300">
          <template #item="{ element: data }">
            <li>
              <tableLine
                  :num="data.num"
                  :textTovar='data.textTovar'
                  :prise="data.prise"
                  :quantity="data.quantity"
                  :description="data.description"
                  :result="data.result"
              />
            </li>
          </template>
        </draggable>
        <div class="footer">
          <createNewBlock :visible="getVisible"/>
          <div class="result__block">
            <div class="blockResultAll">
              <div>
                <span class="name__L">Сумма:</span>
                <span class="name__R">152 212 руб</span>
              </div>
              <div>
                <span class="name__L">Кол-во:</span>
                <span class="name__R">24 шт</span>
              </div>
              <div>
                <span class="name__L">Общий вес:</span>
                <span class="name__R">2 322 кг</span>
              </div>
            </div>
            <div class="blockResultAll resultation">
              <div>
                <span class="name__L">Общая сумма:</span>
                <span class="name__R">152 212 руб</span>
              </div>
            </div>
          </div>
        </div>
      </table>
    </div>
  </div>
</template>

<style src="./index.scss" lang="scss"></style>
<script src="./index.ts"></script>