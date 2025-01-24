<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand">Programación Front End</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- Pestaña Calificiaciones -->
          <li class="nav-item">
            <router-link to="/calificaciones" class="nav-link" active-class="active">

              Cálculo de Calificaciones
            </router-link>
          </li>
          <!-- Pestaña Formulario de registro -->
          <li class="nav-item">
            <router-link to="/registro" class="nav-link" active-class="active">

              Formulario de Registro
            </router-link>
          </li>

          <!-- Pestaña en construcion -->
          <li class="nav-item">
            <router-link to="/enconstruccion" class="nav-link" active-class="active">

              En construcion
            </router-link>
          </li>
        </ul>

        <!-- Barra de busqueda -->
        <form class="d-flex" >
          <div class="input-group">
            <input class="form-control" type="search" placeholder="Search" aria-label="Buscar" />
          </div>
          <button class="btn btn-outline-success ms-2 d-flex align-items-center" type="submit">Búsqueda
            <i class="bi bi-search ms-2"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link.active {
  font-weight: bold;
  color: #007bff !important;
}
</style>