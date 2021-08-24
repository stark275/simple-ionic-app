import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StudentMumbereService } from 'src/app/student-mumbere.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-show-mumbere',
  templateUrl: './show-mumbere.page.html',
  styleUrls: ['./show-mumbere.page.scss'],
})
export class ShowMumberePage implements OnInit {
  student: Student;
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentMumbereService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
    if(!paramMap.has('id')){
    //Redirection
      return;
    }
      const id = paramMap.get('id');
      this.student = this.studentService.findStudent(id);
    });

  }

  onDeleteStudent(){
    this.alertCtrl.create({
      header:'Etes-vous sûr ?',
      message:'Voulez-vous vraiment supprimer cet(te) étudiant(e)?',
      buttons:[{
          text:'Annuler',
          role:'cancel'
          },
          {
          text:'Supprimer',
          handler:()=>{
            this.studentService.deleteStudent(this.student.id);
            this.router.navigate(['']);
          }
        }
      ]
    }).then(alertEl=>{
      alertEl.present();
    });

    //
  }

}
