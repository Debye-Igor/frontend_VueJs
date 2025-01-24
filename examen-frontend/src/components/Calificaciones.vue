<script setup>
import { ref } from 'vue';

// Referencia al formulario
const formulario = ref(null);

// Variables del formulario
const nota1 = ref(null);
const nota2 = ref(null);
const nota3 = ref(null);
const asistencia = ref(null);

// VAariables para el resultado
const promedio = ref(0);
const estado = ref(''); // Estado de aprobación
const mensajePromedio = ref(''); // Mensaje del promedio si aprubea o no 

// Función de cálculo
const calcularResultado = () => {
  // Validar el formulario con reportValidity
  const esValido = formulario.value.reportValidity();

  if (!esValido) {
    mensajePromedio.value = 'Por favor, corrija los valores inválidos en el formulario.';
    estado.value = '';
    return;
  }

  // Calculo de promedio
  promedio.value =
    nota1.value * 0.35 + nota2.value * 0.35 + nota3.value * 0.3;

  // Evaluar si cumple con los requisitos
  if (promedio.value >= 40 && asistencia.value >= 80) {
    estado.value = 'Aprobado';
  } else {
    estado.value = 'Reprobado';
  }

  // Mostrar los resultados
  mensajePromedio.value = `El promedio es: ${promedio.value.toFixed(2)}`; // Redondeado con 2 decimales 
};
</script>

<template>
  <h1 class="text-center mb-4 d-flex align-items-center justify-content-center">
  Cálculo de Calificaciones 
  <i class="bi bi-calculator-fill text-primary ms-2"></i>
</h1>

  <div class="d-flex justify-content-center align-items-center">
    <div class="card p-4 shadow" style="width: 400px;">

      <form ref="formulario" @submit.prevent="calcularResultado" novalidate>
      
        <!-- Input  Nota 1 -->
        <div class="mb-3">
          <label for="nota1" class="form-label">Nota 1</label>
          <input type="number" id="nota1" class="form-control" min="10" max="70" required v-model.number="nota1" />
        </div>

        <!-- Input Nota 2 -->
        <div class="mb-3">
          <label for="nota2" class="form-label">Nota 2</label>
          <input type="number" id="nota2" class="form-control" min="10" max="70" required v-model.number="nota2" />
        </div>

        <!-- Input Nota 3 -->
        <div class="mb-3">
          <label for="nota3" class="form-label">Nota 3</label>
          <input type="number" id="nota3" class="form-control" min="10" max="70" required v-model.number="nota3" />
        </div>

        <!-- Input Asistencia -->
        <div class="mb-3">
          <label for="asistencia" class="form-label">Asistencia (%)</label>
          <input type="number" id="asistencia" class="form-control" min="0" max="100" required
            v-model.number="asistencia" />
        </div>

        <button type="submit" class="btn btn-primary w-100">Calcular</button>
      </form>

      <!-- Resultado -->
      <div class="mt-4 text-center">
        <p v-if="mensajePromedio" class="fw-bold">{{ mensajePromedio }}</p>
        <p v-if="estado" class="fw-bold">
          Tu estado es:
          <span :class="{ 'text-success': estado === 'Aprobado', 'text-danger': estado === 'Reprobado' }">
            {{ estado }}
          </span>
          <i v-if="estado === 'Aprobado'" class="bi bi-check-circle-fill text-success ms-2"></i>
          <i v-else class="bi bi-x-circle-fill text-danger ms-2"></i>
          
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.fw-bold {
  font-weight: bold;
}
h1 i {
  font-size: 2.5rem; /* Tamaño del ícono */
}

</style>
