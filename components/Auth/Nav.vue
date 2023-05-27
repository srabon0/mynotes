<template>
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Services</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  </template>

  <style scoped>
.navbar {
  background-color: #333;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-nav {
  list-style-type: none;
  display: flex;
}

.nav-item {
  margin-right: 10px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 10px;
}

.nav-link:hover {
  background-color: #555;
}
</style>

  