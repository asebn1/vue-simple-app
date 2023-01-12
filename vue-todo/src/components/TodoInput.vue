<template>
  <div class="inputBox shadow">
    <!-- 1. 입력 후 엔터하면 'addTodo' 메서드 실행 -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- 2. 'addContainer'라는 style 적용. 버튼 누를 시 'addTodo' 메서드 실행 -->
    <span class="addContainer" v-on:click="addTodo">
      <!-- 3. 아이콘 가져오기 -->
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: () => ({
    newTodoItem: "",
  }),
  methods: {
    addTodo() {
      // 1. 생성
      if (this.newTodoItem !== "") {
        this.$emit('addTodoItem', this.newTodoItem);    // 2. 보내기
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  height: 40px;

  width: 80%;

  border-style: none;

  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;

  width: 50px;

  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>