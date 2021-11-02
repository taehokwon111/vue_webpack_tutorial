<template>
  <div>
    <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
      <div>  
          <div> 평균 시간 : {{ result.reduce((a, c) => a + c , 0)+"ms" }}</div>
          <button @click="onReset">리셋</button>
    </div>
  </div>
</template>

<script>
  let startTime = 0;
  let endTime = 0;
  let timeout = null;
  export default {
    data() {
      return {
        result: [],
        state: 'waiting',
        message: '클릭해서 시작하세요'
      };
    },
    methods: {
      onReset() {
          this.result = [];
      }, onClickScreen(){
        if(this.state == 'waiting'){
          this.state = 'ready';
          this.message = '초록색이 되면 클릭하시오';
          console.log(`${this.message} / ${this.state}`)
          timeout = setTimeout(() => {
          this.state = 'now';
          this.message = '지금 누르시오'
          startTime = new Date();
                    console.log(`${this.message} / ${this.state}`)
          }, Math.floor(Math.random() * 1000) + 2000)// 2~3초
        }else if(this.state === 'ready'){
          clearTimeout(timeout);
          this.state = 'waitingv';
          this.message = '빠릅니다. 초록색이 되면 클릭하시오'
                    console.log(`${this.message} / ${this.state}`)
        }else if(this.state === 'now'){
          endTime = new Date();
        this.state = 'waiting'
        this.message = "클릭해서 시작하세요"
        this.result.push(endTime - startTime);
          sconsole.log(`${this.message} / ${this.state}`)
        }
      }
    },
  };
</script>

<style scoped>
  #screen {
     width: 300px;
     height: 200px;
     text-align: center;
     user-select: none;
    
   }
  #screen.waiting {
    background-color: aqua;
  }
  #screen.ready {
    background-color: red;
    color: white;
  }
  #screen.now {
    background-color: greenyellow;
  }
</style>
