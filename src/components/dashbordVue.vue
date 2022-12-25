<template>
    <div id="selectVechile">
            Dashbord vue
      </div>
    </template>
    <script>
    export default {
      name: "dashbordVue",
      data() {
      return {
         
       
      };
    },
   
      components: {},
  
    };
    </script>
    <style scoped>
    #myList {
      width: 240px;
      height: 60px;
      border: 1px solid black;
      border-radius: 5px;
      margin-bottom: 15px;
      font-size: 20px;
      
      padding-left: 10px;
    }
    ::placeholder {
    color: black;
    opacity: 1; /* Firefox */
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: black;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
   color: black;
  }
    
    #formcombobox {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      width: 450px;
      height: auto;
      background-color:white;
      justify-content: center;
      align-items: center;
  
    }
    #selectVechile{
      width: 100%;
      height: 100vh;
      background-color: rgba(87, 20, 20, 0);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(243, 238, 238, 0.398)
  
    }
    #opt {
      font-size: 20px;
    }
    #hd1 {
      font-size: 26px;
    }
    #hd2 {
      font-size: 15px;
      margin-bottom: 20px;
    }
    
  
  
  
  
    
    </style>
    
    