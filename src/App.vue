<template>
  <div id="root">
    <div class="container-fluid">
      <div id="nav" class="col-sm-10 offset-1 py-4">
        <h1 class="text-center">
          <span class="font-weight-bold custom-blue">Package</span>
          <span class="custom-blue">Media</span>
        </h1>
      </div>
    </div>
    <div class="container-fluid content">
      <router-view />
    </div>
  </div>
</template>

<style>
  html, body, #app, #root, .content {
    height: 100%;
    width: 100%;
    font-family: Open Sans; 
  }
  .content {
    background-image: url("https://static.vecteezy.com/system/resources/thumbnails/000/134/475/small/free-vector-blue-grunge-background.jpg");
    background-color: #004781;
  }

  .custom-blue {
    color: #24B5BC;
  }
</style>

