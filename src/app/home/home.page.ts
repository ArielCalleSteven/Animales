import { Component } from '@angular/core';
import { Animal } from '../animales';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  animales: Animal[] = [
    {
      nombre: 'Perro',
      tipo: 'Mamífero',
      alimentacion: 'Carnívoro',
      descripcion: 'Llamamos perro a un conjunto de especies de cánidos domésticos, emparentados con el lobo salvaje, que hace alrededor de 10.000 años emprendió un modo de vida próximo al ser humano, probablemente entendiendo que una asociación con nuestra especie podía resultarle benéfico en términos de fácil acceso a la comida, calor y techo, a cambio de protección y asistencia en la cacería.',
      tama: 'Pequeño, mediano y grande',
      adaptabilidad: 'Alta',
      longevidad: '8-15 años',
       salud: 'Suelen tener buena salud, pero pueden padecer enfermedades como displasia de cadera, alergias y obesidad si no se les cuida adecuadamente.',
       imagen: 'assets/img/perro.jpg'
    },
    {
      nombre: 'Gato',
      tipo: 'Mamífero',
      alimentacion: 'Carnívoro',
      descripcion: 'Otro de los animales de compañía más comunes es el gato, aunque de una domesticación menos completa, en apariencia, que la del perro, dado que conserva una buena parte de sus instintos de cacería intactos. Se piensa que se lo introdujo a la civilización humana como una forma de dar cacería a los roedores que infestaban los depósitos de alimento de la civilización del Antiguo Egipto.',
      tama: 'Pequeño y mediano',
      adaptabilidad: 'Alta',
      longevidad: '12-16 años',
      salud: 'Suelen tener buena salud, pero pueden padecer enfermedades como enfermedad renal crónica, diabetes y problemas dentales si no se les cuida adecuadamente.',
      imagen: 'assets/img/gato.jpg'
    },
    {
    nombre: 'Conejo',
    tipo: 'Mamífero',
    alimentacion: 'Herbívoro',
    descripcion: 'El conejo es un animal doméstico popular como mascota por su aspecto adorable y suave pelaje. Es un animal social y puede ser entrenado para usar la caja de arena.',
    tama: 'Pequeño y mediano',
    adaptabilidad: 'Media',
    longevidad: '8-12 años',
    salud: 'Suelen tener buena salud, pero pueden padecer enfermedades como el síndrome respiratorio del conejo, problemas dentales y enfermedades del tracto gastrointestinal si no se les cuida adecuadamente.',
    imagen: 'assets/img/conejo.jpg'
    },
    {
      nombre: 'Hamster',
      tipo: 'Mamífero',
      alimentacion: 'Herbívoro',
      descripcion: 'El hámster es un animal pequeño y popular como mascota por su tamaño y bajo costo. Es fácil de cuidar y puede ser una buena opción para los niños.',
      tama: 'Pequeño',
      adaptabilidad: 'Alta',
      longevidad: '2-3 años',
      salud: 'Suelen tener buena salud, pero pueden padecer enfermedades como la infección de bolsas de abazones, diabetes y enfermedades del corazón si no se les cuida adecuadamente.',
      imagen: 'assets/img/hamster.jpg'
    },
    {
      nombre: 'Pez',
      tipo: 'Pez',
      alimentacion: 'Omnívoro',
      descripcion: 'Los peces son animales acuáticos populares como mascotas por su belleza y tranquilidad. Existen muchas especies diferentes y algunos pueden ser entrenados para realizar trucos.',
      tama: 'Pequeño, mediano y grande',
      adaptabilidad: 'Alta',
      longevidad: '2-10 años',
      salud: 'Suelen tener buena salud.',
      imagen: 'assets/img/pez.jpg'
    }
  ];
}
