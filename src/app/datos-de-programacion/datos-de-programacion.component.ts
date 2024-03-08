import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm } from '@angular/forms';




export interface PeriodicElement {
  Elemento: string;
  Cantidad: number;
  Descripcion: string;
}




const ELEMENT_DATA: PeriodicElement[] = [
  {Elemento: 'Set 1', Cantidad:1, Descripcion: 'Set 1 para quirófano'},
  {Elemento: 'Set 2', Cantidad:1, Descripcion: 'Set 2 para quirófano'},
  {Elemento: 'Set 3', Cantidad:1, Descripcion: 'Set 3 para quirófano'},
  {Elemento: 'Set 4', Cantidad:1, Descripcion: 'Set 4 para quirófano'},
  {Elemento: 'Set 5', Cantidad:1, Descripcion: 'Set 4 para quirófano'},
  {Elemento: 'Set 6', Cantidad:1, Descripcion: 'Set 4 para quirófano'},
];


@Component({
  selector: 'app-datos-de-programacion',
  templateUrl: './datos-de-programacion.component.html',
  styleUrl: './datos-de-programacion.component.css'
})

export class DatosDeProgramacionComponent {

  formaEdicion!: FormGroup<InstrumentoForma>;
  editarRegistro !: Instrumento/*Datosprog*/;
  borrarRegistro !: Instrumento/*Datosprog*/;
  verSegundaTabla = false;
  verTerceraTabla = false;
  instrumentos: Instrumento/*Datosprog*/[] = [];
  ELEMENT_DATA: any[] = [];
  lista_familia: string[] = [];
  codigos: string[]=[];
  notification:any;
  

  constructor(
    private fb: FormBuilder,
  ){};

 ngOnInit() {  
	 this.formaEdicion = this.fb.nonNullable.group({

       Paciente:  [''],
       Registro: [''],
       Edad: [0],
       FechaNacimiento:  [''],
       NoHabitacion:[0],
       Sala:[0],
       Turno:[0],
       Diagnostico: [''],
       
       ProgCirugia: [''],
       Solicita: [''],
       MedCirujano: [''],
       MedAnestesiologo: [''],
       TipoAnestesia: [''],
       Ayudante: [''],
       AreaRegistro: [''],
       Enfermero: [''],
       NotasAdicionales: [''],
       Prioridad: [''],

    });

 
    
}



editarFila(elemento: Instrumento) {
  this.editarRegistro=elemento;
  this.verTerceraTabla = true;
  this.formaEdicion?.get('Paciente')?.setValue(elemento.paciente);
  this.formaEdicion?.get('Registro')?.setValue(elemento.registro);
  this.formaEdicion?.get('Edad')?.setValue(elemento.edad);
  this.formaEdicion?.get('FechaNacimiento')?.setValue(elemento.fechanacimiento);
  this.formaEdicion?.get('NoHabitacion')?.setValue(elemento.nohabitacion);
  this.formaEdicion?.get('Sala')?.setValue(elemento.sala);
  this.formaEdicion?.get('Turno')?.setValue(elemento.turno);
  this.formaEdicion?.get('Diagnostico')?.setValue(elemento.diagnostico);
  this.formaEdicion?.get('ProgCirugia')?.setValue(elemento.progcirugia);
  this.formaEdicion?.get('Solicita')?.setValue(elemento.solicita);
  this.formaEdicion?.get('MedCirujano')?.setValue(elemento.medcirujano);
  this.formaEdicion?.get('MedAnestesiologo')?.setValue(elemento.medanestesiologo);
  this.formaEdicion?.get('TipoAnestesia')?.setValue(elemento.tipoanestesia);
  this.formaEdicion?.get('Ayudante')?.setValue(elemento.ayudante);
  this.formaEdicion?.get('AreaRegistro')?.setValue(elemento.arearegistro);
  this.formaEdicion?.get('Enfermero')?.setValue(elemento.enfermero);
  this.formaEdicion?.get('NotasAdicionales')?.setValue(elemento.notasadicionales);
  this.formaEdicion?.get('Prioridad')?.setValue(elemento.prioridad);

};
eliminarFila(element: Instrumento) {
  this.borrarRegistro=element;
}
editarInstrumento( ) {
  
  this.instrumentoService.traerUNinstrumentos(this.editarRegistro.id).subscribe((datos) => {
    let retornoInstrumento: Instrumento = datos[0]
    console.log('****** Revisando Fila +++++++++++')
    console.log(this.formaEdicion?.get('Cantidad')?.value)
    console.log('+++++++++++++++++++++++++++++++++++')
    if (this.formaEdicion?.get('Cantidad')?.value != retornoInstrumento.cantidad) {
      // ***************************** Se altera el valor de la cantidad *******************
      if (this.formaEdicion?.get('Cantidad')?.value! > retornoInstrumento.cantidad) {

        let nuevos = this.formaEdicion?.get('Cantidad')?.value! - datos[0].cantidad
        let instrumentos_fam = this.instrumentos.filter((valor) => valor.familia == retornoInstrumento.familia )
        // ******** Encontrar Mayor **************
        let mayor=0
        instrumentos_fam.forEach((valor) => {
          if (valor.individuo > mayor) {
            mayor = valor.individuo
          }
        });
        instrumentos_fam.forEach((instrumentoExistente) => {
          const userInstrumento: Instrumento = {
            paciente  : this.formaEdicion?.get('Paciente')?.value!,
            registro : this.formaEdicion?.get('Registro')?.value!,
            edad : this.formaEdicion?.get('Edad')?.value!,
            fechanacimiento : this.formaEdicion?.get('FechaNacimiento')?.value!,
            nohabitacion : this.formaEdicion?.get('NoHabitacion')?.value!,
            sala : this.formaEdicion?.get('Sala')?.value!,
            turno : this.formaEdicion?.get('Turno')?.value!,
            diagnostico : this.formaEdicion?.get('Diagnostico')?.value!,
            progcirugia : this.formaEdicion?.get('ProgCirugia')?.value!,
            solicita : this.formaEdicion?.get('Solicita')?.value!,
            medcirujano : this.formaEdicion?.get('MedCirujano')?.value!,
            medanestesiologo : this.formaEdicion?.get('MedAnestesiologo')?.value!,
            tipoanestesia : this.formaEdicion?.get('TipoAnestesia')?.value!,
            ayudante : this.formaEdicion?.get('Ayudante')?.value!,
            arearegistro : this.formaEdicion?.get('AreaRegistro')?.value!,
            enfermero : this.formaEdicion?.get('Enfermero')?.value!,
            notasadicionales : this.formaEdicion?.get('NotasAdicionales')?.value!,
            prioridad : this.formaEdicion?.get('Prioridad')?.value!,
      
            created: Date.now.toString(),
            updated: Date.now.toString(),
          };
          this.instrumentoService.editarinstrumento(userInstrumento, userInstrumento.id).subscribe((response: Instrumento) => {

          });

        });
        const userInstrumentoRequest: InstrumentoRequest = {
          paciente  : this.formaEdicion?.get('Paciente')?.value!,
          registro : this.formaEdicion?.get('Registro')?.value!,
          edad : this.formaEdicion?.get('Edad')?.value!,
          fechanacimiento : this.formaEdicion?.get('FechaNacimiento')?.value!,
          nohabitacion : this.formaEdicion?.get('NoHabitacion')?.value!,
          sala : this.formaEdicion?.get('Sala')?.value!,
          turno : this.formaEdicion?.get('Turno')?.value!,
          diagnostico : this.formaEdicion?.get('Diagnostico')?.value!,
          progcirugia : this.formaEdicion?.get('ProgCirugia')?.value!,
          solicita : this.formaEdicion?.get('Solicita')?.value!,
          medcirujano : this.formaEdicion?.get('MedCirujano')?.value!,
          medanestesiologo : this.formaEdicion?.get('MedAnestesiologo')?.value!,
          tipoanestesia : this.formaEdicion?.get('TipoAnestesia')?.value!,
          ayudante : this.formaEdicion?.get('Ayudante')?.value!,
          arearegistro : this.formaEdicion?.get('AreaRegistro')?.value!,
          enfermero : this.formaEdicion?.get('Enfermero')?.value!,
          notasadicionales : this.formaEdicion?.get('NotasAdicionales')?.value!,
          prioridad : this.formaEdicion?.get('Prioridad')?.value!,
          created: Date.now.toString(),
          updated: Date.now.toString(),
        };
        userInstrumentoRequest.familia = Buffer.from(userInstrumentoRequest.nombre+
                                          userInstrumentoRequest.tipo+
                                          userInstrumentoRequest.marca+
                                          userInstrumentoRequest.descripcion).toString('base64')
        console.log(userInstrumentoRequest);
        
        this.generadorQR(nuevos,userInstrumentoRequest );

        for (var i=mayor; i<nuevos+mayor; i++) {
          userInstrumentoRequest.codigo_qr=this.codigos[i-mayor]
          userInstrumentoRequest.individuo = i                              
          
          this.instrumentoService.altainstrumento(userInstrumentoRequest).subscribe((response: Instrumento) => {
            console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
            console.log(response);
            if (i==(mayor+mayor-1)) {
                this.instrumentoService.traerinstrumentos().subscribe(datos => {
                  this.instrumentos = datos;
                  this.instrumentos.forEach((name, index) => {
                    let indice = this.lista_familia.findIndex(u => u === name.familia);
                    //console.log(indice)
                    if (indice == -1) {
                      this.lista_familia.push(name.familia);
                      this.ELEMENT_DATA.push(name)
                      
                    }
                  })
                  this.dataSource.data = this.ELEMENT_DATA;
                  console.log(this.lista_familia)
                  console.log('********************************************');
          
                });
            }

            //this.temporal =JSON.parse(JSON.stringify(response))
            //this.instrumentos.push(response)
          });
        }
          //console.log(this.temporal);
          //this.ELEMENT_DATA.push(JSON.parse(JSON.stringify(this.temporal)))
          this.notification.success('El instrumento se editó exitosamente')
          this.codigos=[]
          this.verTerceraTabla=false

      }
      else {
        let nuevos = datos[0].cantidad - this.formaEdicion?.get('Cantidad')?.value!
        let instrumentos_fam = this.instrumentos.filter((valor) => valor.familia == retornoInstrumento.familia )
        for (let iy = 0; iy < nuevos; iy++) {
          this.instrumentoService.borrarinstrumento(instrumentos_fam[iy].id).subscribe(respuesta => {})
        }
      }
    }
    else {
      // ********************** NO se altera la cantidad del instrumento *****************
      let instrumentos_fam = this.instrumentos.filter((valor) => valor.familia == retornoInstrumento.familia )
      instrumentos_fam.forEach((instrumentoExistente) => {
        const userInstrumento: Instrumento = {
          paciente  : this.formaEdicion?.get('Paciente')?.value!,
          registro : this.formaEdicion?.get('Registro')?.value!,
          edad : this.formaEdicion?.get('Edad')?.value!,
          fechanacimiento : this.formaEdicion?.get('FechaNacimiento')?.value!,
          nohabitacion : this.formaEdicion?.get('NoHabitacion')?.value!,
          sala : this.formaEdicion?.get('Sala')?.value!,
          turno : this.formaEdicion?.get('Turno')?.value!,
          diagnostico : this.formaEdicion?.get('Diagnostico')?.value!,
          progcirugia : this.formaEdicion?.get('ProgCirugia')?.value!,
          solicita : this.formaEdicion?.get('Solicita')?.value!,
          medcirujano : this.formaEdicion?.get('MedCirujano')?.value!,
          medanestesiologo : this.formaEdicion?.get('MedAnestesiologo')?.value!,
          tipoanestesia : this.formaEdicion?.get('TipoAnestesia')?.value!,
          ayudante : this.formaEdicion?.get('Ayudante')?.value!,
          arearegistro : this.formaEdicion?.get('AreaRegistro')?.value!,
          enfermero : this.formaEdicion?.get('Enfermero')?.value!,
          notasadicionales : this.formaEdicion?.get('NotasAdicionales')?.value!,
          prioridad: this.formaEdicion?.get('Prioridad')?.value!,
          created: Date.now.toString(),
          updated: Date.now.toString(),
        };
        this.instrumentoService.editarinstrumento(userInstrumento, userInstrumento.id).subscribe((response: Instrumento) => {

        });
      })

    }


  });

  
  
  
  


  
  this.instrumentoService.editarinstrumento(this.editarRegistro, this.editarRegistro.id).subscribe((response: Instrumento) => {

  });


}
crearInstrumento(valor: number) {
  if (valor === 1) {
    
  }
  switch(valor) { 
    case 1: { 
      this.verSegundaTabla = true;
      this.notification.success('Se puede crear el instrumento')
       //statements; 
       break; 
    } 
    case 2: { 

      this.notification.success('El instrumento ha sido creado')
      this.verSegundaTabla = false;
       //statements; 
       break; 
    } 
    case 3: { 
      this.verSegundaTabla = false;
      this.notification.error('Se canceló la creación del instrumento')
      //statements; 
      break; 
   } 
    default: { 
       //statements; 
       break; 
    } 
 } 
}




registrarInstrumento(form: NgForm){
  console.log('inicio');
  const userInstrumentoRequest: InstrumentoRequest = {
   
    Paciente: form.value.Paciente,
    Registro: form.value.Registro,
    Edad: form.value.Edad,
    FechaNacimiento:  form.value.FechaNacimiento,
    NoHabitacion:form.value.NoHabitacion,
    Sala:form.value.Sala,
    Turno:form.value.Turno,
    Diagnostico: form.value.Diagnostico,
    ProgCirugia: form.value.ProgCirugia,
    Solicita: form.value.Solicita,
    MedCirujano: form.value.MedCirujano,
    MedAnestesiologo: form.value.MedAnestesiologo,
    TipoAnestesia: form.value.TipoAnestesia,
    Ayudante: form.value.Ayudante,
    AreaRegistro: form.value.AreaRegistro,
    Enfermero: form.value.Enfermero,
    NotasAdicionales: form.value.NotasAdicionales,
    Prioridad:form.value.Prioridad,
    

  };
  userInstrumentoRequest.familia = Buffer.from(userInstrumentoRequest.nombre+
                                    userInstrumentoRequest.tipo+
                                    userInstrumentoRequest.marca+
                                    userInstrumentoRequest.descripcion).toString('base64')
  console.log(userInstrumentoRequest);
 
  this.generadorQR(userInstrumentoRequest.cantidad,userInstrumentoRequest );
  for (var i=0; i<userInstrumentoRequest.cantidad; i++) {
    userInstrumentoRequest.codigo_qr=this.codigos[i]
    userInstrumentoRequest.individuo = i                              

    this.instrumentoService.altainstrumento(userInstrumentoRequest).subscribe((response: Instrumento) => {
      console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
      console.log(response);
      this.instrumentoService.traerinstrumentos().subscribe(datos => {
        this.instrumentos = datos;
        this.instrumentos.forEach((name, index) => {
          let indice = this.lista_familia.findIndex(u => u === name.familia);
          //console.log(indice)
          if (indice == -1) {
            this.lista_familia.push(name.familia);
            this.ELEMENT_DATA.push(name)
            
          }
        })
        this.dataSource.data = this.ELEMENT_DATA;
        console.log(this.lista_familia)
        console.log('********************************************');

  });
      //this.temporal =JSON.parse(JSON.stringify(response))
      //this.instrumentos.push(response)
    });
  }
  //console.log(this.temporal);
  //this.ELEMENT_DATA.push(JSON.parse(JSON.stringify(this.temporal)))
  this.notification.success('El instrumento se registró exitosamente')
  this.codigos=[]
  form.reset();
  this.verSegundaTabla=false

}



generadorQR(valor: number, instrumento: InstrumentoRequest) {
  for (let i = 1; i < valor+1; i++) {
    this.codigos.push(Buffer.from(instrumento.nombre+instrumento.tipo+instrumento.marca+instrumento.descripcion).toString('base64')+','+i.toString())
  }
  console.log(this.codigos)
}







  labelPosition: 'media' | 'alta' = 'alta';
  value = 'Clear me';


  displayedColumns: string[] = ['Elemento', 'Cantidad', 'Descripcion', 'icon'];
  dataSource = ELEMENT_DATA;


  

}




  // **************** Form Control ***********
  interface InstrumentoForma {
    Paciente: FormControl<string>;
    Registro:FormControl<string>;
    Edad: FormControl<number>;
    FechaNacimiento: FormControl<string>;
    NoHabitacion:FormControl<number>;
    Sala:FormControl<number>;
    Turno: FormControl<number>;
    Diagnostico:FormControl<string>;
    ProgCirugia:FormControl<string>;
    Solicita:FormControl<string>;
    MedCirujano:FormControl<string>;
    MedAnestesiologo:FormControl<string>;
    TipoAnestesia:FormControl<string>;
    Ayudante:FormControl<string>;
    AreaRegistro:FormControl<string>;
    Enfermero:FormControl<string>;
    NotasAdicionales:FormControl<string>;
    Prioridad:FormControl<string>;
  }