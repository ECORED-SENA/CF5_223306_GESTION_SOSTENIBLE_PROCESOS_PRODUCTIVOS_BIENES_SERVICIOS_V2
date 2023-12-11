export default {
  global: {
    componenteFormativo: 'Diagnosticar y promover actividades de innovación',
    descripcionCurso:
      'La innovación es una de las herramientas metodológicas para desarrollar nuevos productos o servicios con enfoques sostenibles, por lo que su conocimiento generará empresas competitivas en entornos globalizados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diagnosticar capacidades de innovación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de innovación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Diagnóstico, recolección y análisis de información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Modelos de negocio',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Mercadeo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Tipo de madurez tecnológica',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Actividades de innovación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Gestión del conocimiento y conciencia del conflicto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Bases de datos y prospectiva',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Vigilancia tecnológica y su aplicación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Metodología de la innovación e I+D+i',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Divulgación',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/223306_CF05_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Diagnosticar capacidades de innovación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021a). <em>Conceptos de Innovación y caracterización de usuario: introducción [Video]</em>. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cbXePG3x5R8',
    },
    {
      tema: 'Diagnóstico, Recolección y análisis de información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021b). <em>Recolección de datos [Video]</em>. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TinhDQv6UH8',
    },
    {
      tema: 'Mercadeo',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021c). <em>¿Qué es mercadeo verde (Green Marketing)? Ejemplos de mercadeo verde en el mundo [Video]</em>. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PbdVwChb71Q',
    },
    {
      tema: 'Tipo de madurez tecnológica',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021d). <em>Concepto de tecnología [Video]</em>. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cPVTGKrwZu8',
    },
    {
      tema: 'Bases de datos y prospectiva',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021e). <em>Prospectiva de la educación en Colombia [Video]</em>. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Go3Ak2UFH6k',
    },
  ],
  glosario: [
    {
      termino: 'Biodegradable',
      significado:
        'son sustancias o materiales que pueden descomponerse por organismos vivos, como el sol, el agua, las bacterias, las plantas o animales. Este tipo de materiales está reemplazando a los plásticos, ya que generan una contribución al medio ambiente.',
    },
    {
      termino: 'Computación en la nube <em>(cloud computing)</em>',
      significado:
        'es conocida por ser la alternativa que brinda, por medio de la red, servicios de computación con almacenamiento en la <em>web</em>. Principalmente, está tecnología logra evitar que el ordenador asuma toda la carga del trabajo en el momento de usar las aplicaciones necesarias, además de permitir que el almacenamiento en la nube acelere el trabajo, haciéndolo más accesible para los usuarios.',
    },
    {
      termino: 'Colciencias',
      significado:
        'es el Departamento Administrativo de Ciencia, Tecnología e Innovación, que se encarga de formular, diseñar y coordinar la implementación de la política de Estado en materia de fomento a la investigación y la innovación. Su misión es liderar el diseño, orientación y evaluación de la política nacional de ciencia, tecnología e innovación, y su respectiva ejecución por parte de los actores que contribuyen al desarrollo competitivo y equitativo del país, en los ámbitos ambiental, económico y social.',
    },
    {
      termino: 'DANE',
      significado:
        'es el Departamento Administrativo Nacional de Estadística, que se encarga de planear, diseñar, producir, analizar y difundir las estadísticas oficiales del país. Gracias a estas estadísticas, el gobierno puede tomar decisiones para el desarrollo económico, social, agropecuario y ambiental de los colombianos. El DANE presenta datos relacionados con el sector industrial, económico y agropecuario de la población y su calidad de vida, entre otros.',
    },
    {
      termino: 'Eco amigable',
      significado:
        'se refiere a la ayuda para proteger el medio ambiente. Algunos ejemplos son reciclar, cuidar el agua o reutilizar las cosas.',
    },
    {
      termino: '<em>Hardware</em>',
      significado:
        'es el conjunto de elementos físicos que conforman un equipo de cómputo, aquella parte que se puede ver y tocar.',
    },
    {
      termino: 'Icopor',
      significado:
        'es un material compuesto por aire y partículas de petróleo que son calentadas y expandidas.',
    },
    {
      termino: '<em>Lean Manufacturing</em>',
      significado:
        'es un método de gestión que mejora los sistemas de producción, enfocándose en reducir los desperdicios para maximizar la creación para los clientes.',
    },
    {
      termino: 'Nichos de mercado',
      significado:
        'es la parte específica de empresas o personas que coinciden en las mismas necesidades y características con respecto a un segmento del mercado.',
    },
    {
      termino: 'PET',
      significado:
        'Poli Etilén Tereftalato, es un polímero plástico elaborado mediante un proceso de polimerización de ácido tereftálico y monoetilenglicol.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'es el conjunto de programas y aplicaciones intangibles que tienen diferentes funciones dentro de un sistema, permitiéndoles a los dispositivos (computadores, celulares o tabletas) un buen funcionamiento.',
    },
    {
      termino: 'Tecnología',
      significado:
        'es la mezcla de conocimientos y técnicas aplicadas para resolver problemas o lograr un objetivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chan, W. y Mauborgne, R. (2005). <em>La estrategia del océano azul. Cómo desarrollar un nuevo mercado donde la competencia no tiene ninguna importancia</em>. Editorial Norma. ',
      link: 'http://biblioteca.udgvirtual.udg.mx/jspui/handle/123456789/3008',
    },
    {
      referencia:
        'Enríquez, J., Duce, C. y González, L. (2020). <em>Repensar la sostenibilidad</em>. UNED - Universidad Nacional de Educación a Distancia. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/172252',
    },
    {
      referencia:
        'Instituto Andaluz de Tecnología [IAT]. (2012). <em>La respuesta está en la innovación</em>. AENOR - Asociación Española de Normalización y Certificación. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53578',
    },
    {
      referencia:
        'Mantilla, E. (2006). <em>Medición de la sostenibilidad ambiental</em>. Fondo Editorial Universidad Cooperativa de Colombia. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/35874',
    },
    {
      referencia:
        'Suárez, R. (2009). <em>El desafío de la innovación</em>. Editorial Universitaria. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/71381',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Éric Daniel Moreno Muñoz',
          cargo: 'Experto temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Luz Aída Quintero Velásquez',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
