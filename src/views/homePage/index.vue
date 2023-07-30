<template>
  <div class="homePage">
    <div class="block">
      <button class="createString" @click="test = !test">
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
            <span class="bold">Номе</span>
          </td>
          <td class="gl">
            <span class="bold">Д</span>
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
          <tableLine v-for="(item, index) in data"
                     :num="item.num"
                     :textTovar='item.textTovar'
                     :prise="item.prise"
                     :quantity="item.quantity"
                     :description="item.description"
                     :result="item.result"
                     :movedIndex="movedIndex"
                     :index="index"
                     @lineMoved = "lineMoved"
          />
        <div class="footer">
          <createNewBlock :visible="test"/>
          <div>
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