<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Información del Proyecto
      <i class="bi bi-info-circle text-info ms-2"></i>
    </h1>
    
    <div class="card mx-auto shadow fondo" style="max-width: 500px;">

      <img
        src="https://img.freepik.com/vector-gratis/hombre-que-trabaja-computadora-portatil-cafe-e-ilustracion-vector-dibujos-animados-inmovil_138676-2206.jpg?t=st=1737691440~exp=1737695040~hmac=32e8b500c5c0f259476280adf07b3dfb1d30332470272dd344ae94f1a3043bcf&w=826"
        class="img-fluid" style=" height: 250px; object-fit: cover; border-radius: 10px 10px 0px 0px;" />

      <div class="card-body">
        <h5 class="card-title text-primary fw-bold">Nombre Estudiante:</h5>
        <p class="card-text">Debye Igor</p>

        <h5 class="card-title text-primary fw-bold">Asignatura:</h5>
        <p class="card-text">Programación Front End</p>

        <h5 class="card-title text-primary fw-bold">Profesor:</h5>
        <p class="card-text">Felipe Flores</p>

        <h5 class="card-title text-primary fw-bold">Repositorio GitHub Proyecto:</h5>
        <a href="https://github.com/Debye-Igor/frontend_VueJs.git" class="btn btn-outline-dark" target="_blank">
          Ver Repositorio <i class="bi bi-github ms-2"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fondo {
  background: linear-gradient(135deg, #4cd83f, #65e6f7); 
  color: #444444; 
  overflow: hidden; 
}

.card {
  border-radius: 10px;
}
h1 i {
  font-size: 2.5rem;
}
</style>