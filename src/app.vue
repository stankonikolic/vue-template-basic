<template>
  <div id="app">
    {{ name }}
  </div>
</template>

<script>

const printDate = () => {
    return new Date().toDateString();
};

export default {
    name: "App",
    data(){
        return {
            name: printDate()
        };
    },
};
</script>