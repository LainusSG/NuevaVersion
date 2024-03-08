import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm } from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';





export interface PeriodicElement {
  id: number;
  Nombre: string;
  Descripcion: string;
  Marca: string;
  Cantidad:number;
  Caducidad: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, Nombre: 'Pinza Halsted',        Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:2, Caducidad:'14/11/2023'},
  {id: 2, Nombre: 'Pinza de Pean',        Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:3, Caducidad:'16/11/2023'},
  {id: 3, Nombre: 'Pinza Judo-Allis',     Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:4, Caducidad:'19/11/2023'},
  {id: 4, Nombre: 'Pinzas Kocher curvas', Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:1, Caducidad:'18/11/2023'},
];

const ELEMENT_DATA2: PeriodicElement[] = [
  {id: 1, Nombre: 'Pinza de Kocher',      Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:5, Caducidad:'20/11/2023'},
  {id: 2, Nombre: 'Pinza Mosquito',       Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:2, Caducidad:'13/11/2023'},
  {id: 3, Nombre: 'Pinza para campo ',    Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:7, Caducidad:'13/11/2023'},
  {id: 4, Nombre: 'Pinza para tubo',      Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:5, Caducidad:'18/11/2023'},
  {id: 5, Nombre: 'Grosmayer',            Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:7, Caducidad:'24/11/2023'},
];

const ELEMENT_DATA3: PeriodicElement[] = [
  {id: 1, Nombre: 'Pinza de Tubo',        Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:3, Caducidad:'23/11/2023'},
  {id: 2, Nombre: 'Pinza clamp',          Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:5, Caducidad:'30/11/2023'},
  {id: 3, Nombre: 'Grosmayer',            Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:7, Caducidad:'24/11/2023'},
  {id: 4, Nombre: 'Pinza Mosquito',       Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:2, Caducidad:'13/11/2023'},
  {id: 5, Nombre: 'Atraumático',          Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:7, Caducidad:'14/11/2023'},
  {id: 6, Nombre: 'Pinza Judo-Allis',     Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:4, Caducidad:'19/11/2023'},
  {id: 7, Nombre: 'Pinzas Kocher curvas', Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:1, Caducidad:'18/11/2023'},
];


const ELEMENT_DATA4: PeriodicElement[] = [
  {id: 1, Nombre: 'Pinza Halsted',        Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:3, Caducidad:'23/11/2023'},
  {id: 2, Nombre: 'Pinza de Pean',          Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:5, Caducidad:'30/11/2023'},
  {id: 3, Nombre: 'Pinza Judo-Allis',            Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:7, Caducidad:'24/11/2023'},
  {id: 4, Nombre: 'Pinzas Kocher curvas',       Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:2, Caducidad:'13/11/2023'},
  {id: 5, Nombre: 'Pinzas de Kocher',          Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:7, Caducidad:'14/11/2023'},
  {id: 6, Nombre: 'Pinza Mosquito',     Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:4, Caducidad:'19/11/2023'},
  {id: 7, Nombre: 'Pinza para campo', Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:1, Caducidad:'18/11/2023'},
  {id: 8, Nombre: 'Pinza para tubo', Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:1, Caducidad:'18/11/2023'},
  {id: 9, Nombre: 'Grosmayer', Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:1, Caducidad:'18/11/2023'},
  {id: 10, Nombre: 'Pinza clamp', Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:1, Caducidad:'18/11/2023'},
];

export interface User {
  name: string;
}


@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrl:'./componente1.component.css'
})
export class Componente1Component implements OnInit{
  myControl = new FormControl<string | User>('');
  options: User[] = [
    {name: 'Pinza Halsted'}, 
    {name: 'Pinza de Pean'}, 
    {name: 'Pinza Judo-Allis'},
    {name: 'Pinzas Kocher curvas'},
    {name: 'Pinzas Kocher rectas'},
    {name: 'Pinza de Koche'},
    {name: 'Pinza Mosquito'},
    {name: 'Pinza para campo'},
    {name: 'Pinza para tubo'},
    {name: 'Grosmayer'},
    {name: 'Pinza clamp'},
    
  ];



formaEdicion!: FormGroup<InstrumentoForma>;
  editarRegistro !: Instrumento/*Datosprog*/;
  borrarRegistro !: Instrumento/*Datosprog*/;
  verSegundaTabla = false;
  verTerceraTabla = false;
  instrumentos: Instrumento/*Datosprog*/[] = [];
  foto : string ="https://firebasestorage.googleapis.com/v0/b/tracy-nutricion.appspot.com/o/instrumento.png?alt=media&token=e73f04cf-b593-45da-ba73-202b5362fe63";
  ELEMENT_DATA: any[] = [];
  lista_familia: string[] = [];
  codigos: string[]=[];
  notification:any;

  filteredOptions!: Observable<User[]>;


  constructor(
    private fb: FormBuilder,
  ){};





  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );




    this.formaEdicion = this.fb.nonNullable.group({
      NombreSet:  [''],
      Elemento: [''],
      Cantidad:[0],
      Minimo:[0],
      Maximo:[0],
   });

  }




  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }




  value = 'Set 1';
  value2= this.value;

  value3 = '0';
  value3_1= this.value3;
  
  value4 = '1';
  value4_1= this.value4;
  panelOpenState = false;
  displayedColumns: string[] = ['id', 'Nombre', 'Descripcion', 'Marca', 'Cantidad', 'Caducidad'];
  
  
  dataSource = ELEMENT_DATA;

  dataSource2 = ELEMENT_DATA2;

  dataSource3 = ELEMENT_DATA3;

  dataSource4: any;

  


  editarFila(elemento: Instrumento) {
    this.editarRegistro=elemento;
    this.verTerceraTabla = true;
    this.formaEdicion?.get('NombreSet')?.setValue(elemento.nombreset);
    this.formaEdicion?.get('Elemento')?.setValue(elemento.elemento);
    this.formaEdicion?.get('Cantidad')?.setValue(elemento.cantidad);
    this.formaEdicion?.get('Minimo')?.setValue(elemento.minimo);  
    this.formaEdicion?.get('Maximo')?.setValue(elemento.maximo);
    this.foto = elemento.foto
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
              nombreset  : this.formaEdicion?.get('NombreSet')?.value!,
              elemento : this.formaEdicion?.get('Elemento')?.value!,
              cantidad : this.formaEdicion?.get('Cantidad')?.value!,
              minimo : this.formaEdicion?.get('Minimo')?.value!,
              maximo : this.formaEdicion?.get('Maximo')?.value!,
              foto: this.foto,
              created: Date.now.toString(),
              updated: Date.now.toString(),
            };
            this.instrumentoService.editarinstrumento(userInstrumento, userInstrumento.id).subscribe((response: Instrumento) => {
  
            });
  
          });
          const userInstrumentoRequest: InstrumentoRequest = {
            nombreset  : this.formaEdicion?.get('NombreSet')?.value!,
            elemento : this.formaEdicion?.get('Elemento')?.value!,
            cantidad : this.formaEdicion?.get('Cantidad')?.value!,
            minimo : this.formaEdicion?.get('Minimo')?.value!,
            maximo : this.formaEdicion?.get('Maximo')?.value!,
            foto: this.foto,
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
            nombreset  : this.formaEdicion?.get('NombreSet')?.value!,
            elemento : this.formaEdicion?.get('Elemento')?.value!,
            cantidad : this.formaEdicion?.get('Cantidad')?.value!,
            minimo : this.formaEdicion?.get('Minimo')?.value!,
            maximo : this.formaEdicion?.get('Maximo')?.value!,
            foto: this.foto,
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
     
      NombreSet: form.value.NombreSet,
      Elemento:  form.value.Elemento,
      Cantidad:  form.value.Cantidad,
      Minimo:    form.value.Minimo,
      Maximo:    form.value.Maximo,
      foto: this.foto,
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
  
  onFilesChanged(urls: string | string[]): void {
    this.foto=urls[0];
  }
  
  generadorQR(valor: number, instrumento: InstrumentoRequest) {
    for (let i = 1; i < valor+1; i++) {
      this.codigos.push(Buffer.from(instrumento.nombre+instrumento.tipo+instrumento.marca+instrumento.descripcion).toString('base64')+','+i.toString())
    }
    console.log(this.codigos)
  }




  
}






// **************** Form Control ***********
interface InstrumentoForma {
  NombreSet: FormControl<string>;
  Elemento:FormControl<string>;
  Cantidad: FormControl<number>;
  Minimo:FormControl<number>;
  Maximo:FormControl<number>;
}