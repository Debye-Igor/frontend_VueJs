<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" >Calculo de calificaciones</a>
       
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <!-- Pestaña Calificiaciones -->
            <li class="nav-item">
              <router-link
                to="/calificaciones"
                class="nav-link"
                active-class="active"
              >
                Cálculo de Calificaciones
              </router-link>
            </li>
            <!-- Pestaña Formulario de registro -->
            <li class="nav-item">
              <router-link
                to="/registro"
                class="nav-link"
                active-class="active"
              >
                Formulario de Registro
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  // Este componente no necesita lógica adicional por ahora
  </script>
  
  <style scoped>
  .nav-link.active {
    font-weight: bold;
    color: #007bff !important;
  }
  </style>