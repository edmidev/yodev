<template>
  <div class="max-w-md mx-auto overflow-hidden md:max-w-2xl m-5 flex-col">
    <Title text="Edgar Rojas" />
    <ul>
      <li>Github: <a href="https://github.com/edmidev" target="_blank" class="text-emerald-600">edmidev</a></li>
    </ul>
    <div class="md:flex-grow mt-5">
        <Title text="Aplicación Web Simple" />
        <Subtitle text="Objetivo:" />
        <Paragraph text="Desarrollar una aplicación web simple para gestionar una lista de tareas utilizando Vue.js (Versión 3) y otras tecnologías mencionadas." />
        
        <Title text="Requisitos:" :secondary="true" />
        <Subtitle text="Interfaz de Usuario:" />
        <Paragraph text="Utilizar Vue.js (Versión 3) con Nuxt, y utilizar JSX para crear componentes Vue, para crear una interfaz que permita al usuario:" />
        <ListItem text="Ver la lista de tareas" />
        <ListItem text="Añadir una nueva tarea." />
        <ListItem text="Marcar una tarea como completada." />
        <ListItem text="Eliminar una tarea." />
      
        <Subtitle text="Estilo:" />
        <ListItem text="Utilizar HTML y CSS para la maquetación y estilización de la aplicación." />
        <ListItem text="Emplear Sass como preprocesador de CSS." />

        <Subtitle text="Almacenamiento Local:" />
        <ListItem text="Utilizar Vuex para el manejo del estado de la aplicación." />

        <Subtitle text="Versionamiento:" />
        <ListItem text="Utilizar Git para el control de versiones." />

        <Subtitle text="Migraciones de Versiones:" />
        <ListItem text="Implementar cambios de versión en la aplicación (por ejemplo, actualización de Vue.js) y documentar el proceso de migración." />
        
        <Subtitle text="TypeScript:" />
        <ListItem text="Introducir TypeScript en el proyecto." />

        <Subtitle text="Tests:" />
        <ListItem text="Implementar pruebas unitarias con Jest." />
        <ListItem text="Realizar pruebas de extremo a extremo con Cypress." />

        <Subtitle text="Opcionales:" />
        <ListItem text="Integrar Pinia y Vite." />
        <ListItem text="Utilizar la Composition API de Vue.js." />

        <Subtitle text="Consideraciones adicionales:" />
        <ListItem text="La interfaz de usuario no necesita ser compleja." />
        <ListItem text="La aplicación debe ser segura contra ataques comunes (se valorará la implementación de medidas de seguridad)." />
        <ListItem text="Se valorará la claridad del código y la estructura." />

        <Subtitle text="Entrega:" />
        <ListItem text="Proporcionar el código fuente." />
        <ListItem text="Incluir instrucciones claras sobre cómo ejecutar la aplicación localmente." />
      </div>
  </div>
</template>

<script lang="ts" setup>

import Paragraph from '~/components/home/paragraph.vue';
import Title from '~/components/home/title.vue';
import Subtitle from '~/components/home/subtitle.vue';
import ListItem from '~/components/home/list-item.vue';

</script>

<style></style>
