<template>
  <div>
    <!-- 2. 트랜지션 ul 태그로 사용 -->
    <transition-group name="list" tag="ul"> 
    <!-- div: 단순히 묶는 의미. 줄바꿈 O  -->
      <li v-for="(todoItem, index) in this.getTodoItems"  v-bind:key="todoItem.item" class="shadow">
        <i class="fa-solid fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }"> {{ todoItem.item }} </span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})"> <i class="fa-solid fa-trash"></i> </span>
      </li>
    </transition-group>
  </div>
</template>
 
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',     // 인자를 설정하지 않아도 호출하는 곳에서 인자를 넘기면 넘어감
      toggleComplete: 'toggleOneItem'
    })
  },
  computed: {
    ...mapGetters(['getTodoItems'])
  }
};
</script> 

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* transition-group name(list) key List에 trasition 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s; /* 1초 지속 */
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

/* 1. 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>