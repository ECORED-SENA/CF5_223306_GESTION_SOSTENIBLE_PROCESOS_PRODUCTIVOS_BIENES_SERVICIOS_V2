<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/intro/img1.png', style="width: 400px").m-auto
      .col-lg-8
        p Las empresas altamente competitivas en entornos globalizados, enfrentan grandes retos económicos, debido a que productos y servicios son creados constantemente en cualquier lugar del mundo para ser comercializados por diferentes competidores, posicionados en múltiples sitios. Es por ello que las empresas deben poseer una capacidad de innovación constante, con el fin de poder anticipar, prever y responder ante los nuevos requerimientos del mercado y del consumidor.
        p En este componente formativo, aprenderá, en la producción de bienes y servicios sostenibles, a conocer los diferentes tipos de innovación existentes, así como también la forma de diagnosticarlos, para establecer modelos de negocio en mercados cambiantes, teniendo en cuenta el conocimiento, las bases de datos, la prospectiva, la vigilancia tecnológica y las principales metodologías de innovación.
        p.mb-0 #[b Para conocer las temáticas a desarrollar, observe el video a continuación:]
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption.mb-5 Video.
    p.mb-0 La metodología del componente es teórico-práctica, porque se contextualiza al lector con definiciones y explicaciones de casos prácticos, a los cuales se les profundizará con videos multimedia como material complementario, culminando con actividades didácticas para validar el conocimiento y un trabajo práctico, a través del desarrollo de una guía de aprendizaje.    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
