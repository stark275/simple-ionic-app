/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Student } from './student-mumbere/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentMumbereService {
  private students: Student[] = [
    {
      id: '1',
      name: 'Dany Batatabo',
      image: 'assets/img/5.jpg',
      description: 'Ce ga c\'est un genie.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, quod similique obcaecati incidunt velit? Mollitia illum architecto nisi quos commodi, facere consectetur, fugiat animi doloribus recusandae adipisci earum ab?',
      gallery:[
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg'
      ]
    },
    {
      id: '2',
      name: 'Aurore Mpona-minga ',
      image: 'assets/img/2.jpg',
      description: 'Cette fille c\'est un genie. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, quod similique obcaecati incidunt velit? Mollitia illum architecto nisi quos commodi, facere consectetur, fugiat animi doloribus recusandae adipisci earum ab?',
      gallery:[
        'assets/img/8.jpg',
        'assets/img/4.jpg',
        'assets/img/7.jpg',
        'assets/img/4.jpg',
        'assets/img/7.jpg',
        'assets/img/4.jpg',
        'assets/img/7.jpg',
        'assets/img/4.jpg',
        'assets/img/7.jpg',
        'assets/img/4.jpg',
        'assets/img/7.jpg',
        'assets/img/3.jpg'
      ]
    },
    {
      id: '3',
      name: 'Merveille Kikeni',
      image: 'assets/img/3.jpg',
      description: 'Cette fille c\'est un genie. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, quod similique obcaecati incidunt velit? Mollitia illum architecto nisi quos commodi, facere consectetur, fugiat animi doloribus recusandae adipisci earum ab?',
      gallery:[
        'assets/img/8.jpg',
        'assets/img/4.jpg',
        'assets/img/7.jpg',
        'assets/img/4.jpg',
        'assets/img/7.jpg',
        'assets/img/4.jpg',
        'assets/img/7.jpg',
        'assets/img/4.jpg',
        'assets/img/7.jpg',
        'assets/img/4.jpg',
        'assets/img/7.jpg',
        'assets/img/4.jpg',
        'assets/img/7.jpg',
        'assets/img/3.jpg'
      ]
    },
    {
      id: '4',
      name: 'Aimée Amisa',
      image: 'assets/img/4.jpg',
      description: 'Cette fille c\'est un genie. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, quod similique obcaecati incidunt velit? Mollitia illum architecto nisi quos commodi, facere consectetur, fugiat animi doloribus recusandae adipisci earum ab?',
      gallery:[
        'assets/img/8.jpg',
        'assets/img/4.jpg',
        'assets/img/7.jpg',
        'assets/img/3.jpg'
      ]
    },

    {
      id: '5',
      name: 'Dany Hamici',
      image: 'assets/img/5.jpg',
      description: 'Ce ga c\'est un genie.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, quod similique obcaecati incidunt velit? Mollitia illum architecto nisi quos commodi, facere consectetur, fugiat animi doloribus recusandae adipisci earum ab?',
      gallery:[
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg'
      ]
    },
    {
      id: '6',
      name: 'Happy Ngwala',
      image: 'assets/img/5.jpg',
      description: 'Ce ga c\'est un genie.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, quod similique obcaecati incidunt velit? Mollitia illum architecto nisi quos commodi, facere consectetur, fugiat animi doloribus recusandae adipisci earum ab?',
      gallery:[
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg'
      ]
    },
    {
      id: '7',
      name: 'Merveille Kitoga',
      image: 'assets/img/5.jpg',
      description: 'Ce ga c\'est un genie.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, quod similique obcaecati incidunt velit? Mollitia illum architecto nisi quos commodi, facere consectetur, fugiat animi doloribus recusandae adipisci earum ab?',
      gallery:[
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg'
      ]
    },
    {
      id: '8',
      name: 'Jonathan Kondoli',
      image: 'assets/img/1.jpg',
      description: 'Ce ga c\'est un genie.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, quod similique obcaecati incidunt velit? Mollitia illum architecto nisi quos commodi, facere consectetur, fugiat animi doloribus recusandae adipisci earum ab?',
      gallery:[
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg'
      ]
    },
    {
      id: '9',
      name: 'Stephane Piema',
      image: 'assets/img/5.jpg',
      description: 'Ce ga c\'est un genie.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, quod similique obcaecati incidunt velit? Mollitia illum architecto nisi quos commodi, facere consectetur, fugiat animi doloribus recusandae adipisci earum ab?',
      gallery:[
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg'
      ]
    },
    {
      id: '10',
      name: 'Mumbere Malule',
      image: 'assets/img/1.jpg',
      description: 'Ce ga c\'est un genie.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, quod similique obcaecati incidunt velit? Mollitia illum architecto nisi quos commodi, facere consectetur, fugiat animi doloribus recusandae adipisci earum ab?',
      gallery:[
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg'
      ]
    },
    {
      id: '11',
      name: 'Dieuleveut Kiala',
      image: 'assets/img/5.jpg',
      description: 'Ce ga c\'est un genie.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, quod similique obcaecati incidunt velit? Mollitia illum architecto nisi quos commodi, facere consectetur, fugiat animi doloribus recusandae adipisci earum ab?',
      gallery:[
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg'
      ]
    },
    {
      id: '12',
      name: 'jeremie Tshinyoka',
      image: 'assets/img/5.jpg',
      description: 'Ce ga c\'est un genie.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, quod similique obcaecati incidunt velit? Mollitia illum architecto nisi quos commodi, facere consectetur, fugiat animi doloribus recusandae adipisci earum ab?',
      gallery:[
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg'
      ]
    },
    {
      id: '13',
      name: 'Emmanuel Assokwama',
      image: 'assets/img/5.jpg',
      description: 'Ce ga c\'est un genie.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, quod similique obcaecati incidunt velit? Mollitia illum architecto nisi quos commodi, facere consectetur, fugiat animi doloribus recusandae adipisci earum ab?',
      gallery:[
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg',
        'assets/img/1.jpg',
        'assets/img/5.jpg'
      ]
    },
  ];
  constructor() { }

  getStudents(){
    return [...this.students];
  }

  findStudent(id: string){
    return{
      ...this.students.find(student => student.id === id)
    };
  }

  deleteStudent(id: string){
    this.students=this.students.filter(student =>student.id !== id);
  }
}
