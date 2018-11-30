# Proyecto *"Data Dashboard"* del BootCamp 2018-1 de Laboratoria.

**Creado por *Francisca Velueta* y *Andrea Garcia*.**

## Preámbulo

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al progreso de las estudiantes para
apoyarlas en su aprendizaje.

 ![data](https://github.com/francisvelueta/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/ux/readme-images/demo-final.jpg)

La principal medida de progreso de una estudiante en Laboratoria es su avance
completando los proyectos de la [Ruta de Aprendizaje](https://docs.google.com/spreadsheets/d/1AoXQjZnZ5MTPwJPNEGDyvn5vksiOUoPr932TjAldTE4/edit#gid=536983970)
y su desempeño en función a la [Rúbrica de Niveles Esperados](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml).
Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos
de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que
llamamos LMS (Learning Management System). El LMS acumula data sobre quién
leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios
  completados, nota en quizzes, etc.) no impacta directamente en la evaluación
  de una estudiante, sí es una pieza de información relevante que las TMs
  quisieran visualizar para tener un mejor entendimiento de cómo va cada
  estudiante en su proceso de aprendizaje.

Así, el reto de este proyecto es crear una interfaz donde las TMs puedan
_ver_ y _usar_ la data de progreso del LMS. Para ello, proponemos crear un
**data dashboard** (_tablero de visualización de datos_).

## Objetivo

El objetivo de este producto es facilitar a las TMs una herramienta que les permita
 realizar su trabajo de una forma más sencilla, sin la necesidad de abrir múltiples
 archivos, y también poder visualizar los datos desde su celular.

## Planning

Nuestra organización fue mediante el tablero Kanban, haciendo _tareas épicas_ y dividiendo
 dichas tareas en _subtareas_. También implementamos el uso de **Trello** para tener una mejor
 organización del tiempo que se dedicaba a cada tarea.

## Desarrollo

Posteriormente, en equipo realizamos un diagrama de flujo para definir la circulación del programa y
 así evitar *código espagueti*.


Después de hacer la investigación de UX, empezamos a manipular la data mediante la función **fetch()** y **promises (then)**, tuvimos una
 dificultad al utilizar los datos en JSON de forma local, señalando que necesitaba utilizar un https, es decir,
 leer el .json desde un servidor. Lo solucionamos utilizando el archivo .json desde el repositorio de GitHub.

## Recomendaciones para utlizar el Data Dashboaard

1.- Contar con un explorador web como  Chrome, Safari, Mozilla, Edge u Opera
2.- Tener una conexión estable de Internet esto para no tener problemas al consultar la data en el servidor Web
3.- Al menos ser personal autorizado de Laboratoria para tener acceso a la página.

## Areas de Oportunidad

Proponemos algunas areas de Oportunidad:

* Crear un portal de login personalizado
* Filtrar de forma ascendente y decendente en estudiantes
* Realizar busqueda de estudiantes por nombre
* Mostrar de manera más gráfica la información

Si quieres colaborar en este repositorio puedes dejar un Issue para feedbacks y reportes de bugs.

El máster del repositorio es _Francisca_.
