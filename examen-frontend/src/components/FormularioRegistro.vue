<script setup>
import { ref } from 'vue';

// Referencias y datos del formulario
const nombre = ref('');
const correo = ref('');
const contrasena = ref('');
const repetirContrasena = ref('');

// Manejo de errores
const errores = ref({
  nombre: '',
  correo: '',
  contrasena: '',
  repetirContrasena: '',
});

// Validar campos individualmente
const validarCampo = (campo) => {
  switch (campo) {
    case 'nombre':
      errores.value.nombre = nombre.value.trim() === '' ? 'El campo nombre es requerido' : ''; // Si el nomre esta vacio
      break;

    case 'correo':
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errores.value.correo = correo.value.trim() === '' // si el correo esta vacio 
        ? 'El campo correo es requerido'
        : !correoRegex.test(correo.value)  //si no coincide con el formato
          ? 'Debe ingresar un correo válido'
          : '';
      break;

    case 'contrasena':
      errores.value.contrasena = contrasena.value.trim() === '' ? 'El campo contraseña es requerido'
        : contrasena.value.length < 8
          ? 'La contraseña debe tener al menos 8 caracteres' : '';
      break;

    case 'repetirContrasena':
      errores.value.repetirContrasena = repetirContrasena.value.trim() === ''
        ? 'El campo repetir contraseña es requerido'
        : repetirContrasena.value !== contrasena.value  // comparamos la coincidencia de contraeñas 
          ? 'Las contraseñas no coinciden'
          : '';
      break;
  }
};

// Validar todos los campos al enviar el formulario
const validarFormulario = () => {
  validarCampo('nombre');
  validarCampo('correo');
  validarCampo('contrasena');
  validarCampo('repetirContrasena');

  // Verificar si todos los campos son validos
  return Object.values(errores.value).every((error) => error === '');
};

// Enviar el formulario
const enviarFormulario = () => {
  if (validarFormulario()) {
    alert('El registro se ha realizado correctamente.'); // Mensaje de alerta

    // Se limpia el formulario
    nombre.value = '';
    correo.value = '';
    contrasena.value = '';
    repetirContrasena.value = '';
    errores.value = {};
  }
};
</script>

<template>
  <h1 class="text-center mb-4">Formulario de Registro</h1>
  <div class="d-flex justify-content-center align-items-center">
    <div class="card p-4 shadow" style="width: 400px;">
      <form @submit.prevent="enviarFormulario">

        <!-- En todos los inputs se llama ala funcion validarCampo cada vez que se ingresa un dato y se aplica la clasee si hay algun error -->
        <!-- Campo Nombre -->
        <div class="mb-3 position-relative">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" id="nombre" class="form-control" v-model="nombre" @input="validarCampo('nombre')"
            :class="{ 'is-invalid': errores.nombre }" />
          <span v-if="errores.nombre" class="text-danger small">
            {{ errores.nombre }}
          </span>
        </div>

        <!-- Campo Correo -->
        <div class="mb-3 position-relative">
          <label for="correo" class="form-label">Correo</label>
          <input type="email" id="correo" class="form-control" v-model="correo" @input="validarCampo('correo')"
            :class="{ 'is-invalid': errores.correo }" />
          <span v-if="errores.correo" class="text-danger small">
            {{ errores.correo }}
          </span>
        </div>

        <!-- Campo Contraseña -->
        <div class="mb-3 position-relative">
          <label for="contrasena" class="form-label">Contraseña</label>
          <input type="password" id="contrasena" class="form-control" v-model="contrasena"
            @input="validarCampo('contrasena')" :class="{ 'is-invalid': errores.contrasena }" />
          <span v-if="errores.contrasena" class="text-danger small">
            {{ errores.contrasena }}
          </span>
        </div>

        <!-- Campo Repetir Contraseña -->
        <div class="mb-3 position-relative">
          <label for="repetirContrasena" class="form-label">Repetir Contraseña</label>
          <input type="password" id="repetirContrasena" class="form-control" v-model="repetirContrasena"
            @input="validarCampo('repetirContrasena')" :class="{ 'is-invalid': errores.repetirContrasena }" />
          <span v-if="errores.repetirContrasena" class="text-danger small">
            {{ errores.repetirContrasena }}
          </span>
        </div>

        <button type="submit" class="btn btn-success w-100">Enviar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.is-invalid {
  border-color: #dc3545 !important;
  /* Borde rojo para inputs inválidos (cuando se aplica la clase)*/
}
</style>
