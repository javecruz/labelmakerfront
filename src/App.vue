<template>
  <div id="root">
    <div id="nav">
      <router-link to="/">Welcome</router-link> |
      <router-link to="/create">Create Label</router-link> |
      <router-link to="/done">Done</router-link>
    </div>
    <router-view />
  </div>
</template>