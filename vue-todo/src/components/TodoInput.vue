<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
    <!-- 1. 모달실행 = true, 닫는조건 = false -->
    <AlertModal v-if="showModal" @close="showModal = false">
      <!-- 2. 모달 오버라이딩  -->
      <h3 slot="header">
        경고! <i class="closeModalBtn fa-solid fa-x" @click="showModal = false"></i>
      </h3>
      <div slot="body">
        무언가를 입력하세요
      </div>
      <div slot="footer">
        copy right
      </div>
    </AlertModal>
  </div>
</template>

<script>
// 1. import
import AlertModal from "./common/AlertModal.vue";

// 2. AlertModal에 대한 설정
export default {
  data: () => ({
    newTodoItem: "",
    showModal: false,
  }),
  components: {
    AlertModal
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        // this.$emit("addTodoItem", this.newTodoItem);
        this.$store.commit('addOneItem', this.newTodoItem)
        this.clearInput();
      } 
      // [1]. 없다면 true
      else {
        this.showModal = !this.showModal;
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