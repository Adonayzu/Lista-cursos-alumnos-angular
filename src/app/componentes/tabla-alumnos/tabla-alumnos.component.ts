import { Component, OnInit } from '@angular/core';
import { alumnos } from './mock';
import { alumno } from 'src/app/models/alumno-to';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {

public alumnos?: alumno[]

ngOnInit(): void{
  this.alumnos = alumnos
}

}
