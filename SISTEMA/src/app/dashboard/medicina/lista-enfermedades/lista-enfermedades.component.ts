import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { EnfermedadService } from 'src/app/core/service/enfermedad.service';
import { MedicinaService } from 'src/app/core/service/medicina.service';

@Component({
  selector: 'app-lista-enfermedades',
  templateUrl: './lista-enfermedades.component.html',
  styleUrls: ['./lista-enfermedades.component.scss']
})
export class ListaEnfermedadesComponent implements OnInit {

  form: FormGroup;
  submitted=false;
  isLoading=false;
  loadingScroll: boolean;
  enfermedades1:any[];
  control:any;
  medicina_id:any;

  get enfermedades(): FormArray {
    return this.form.get('enfermedades') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public route: ActivatedRoute,
    private router: Router,
    private enfermedadService:EnfermedadService,
    private medicinaService:MedicinaService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((paramMap: any) => {        
        this.medicina_id = paramMap.get('id');
      }
    );

    this.listaEnfermedades();
    this.createForm();
  //  console.log(this.enfermedades.controls)
    this.control = <FormArray>this.form.controls['enfermedades']; 
  }
  
  onClienteSelect(item:any,i:any){  
    this.control.controls[i].get('causas').setValue(item.causas)
    this.control.controls[i].get('descripcion').setValue(item.descripcion)
    this.control.controls[i].get('foto').setValue(item.foto)
  }
  createForm(){
    this.form=this.formBuilder.group({
      // enfermedad:['',[Validators.required]],
      medicina_id:[this.medicina_id],
      enfermedades: this.formBuilder.array([]),   
    })    
  }
  createFormEnfermedad():FormGroup{
    return this.formBuilder.group({
      enfermedad_id: ['', Validators.required],
      descripcion: ['', Validators.required],
      foto: [''],
      causas: ['', Validators.required]
    })

  }
  register(form:any){
    this.isLoading=true;
    this.submitted=true;
    
      // if(this.ingreso_id){
      //   this.ingresoService.update(this.ingreso_id,this.form.value)
      //   .pipe(
      //     finalize(()=>{
      //       this.form.markAsPristine();
      //       this.isLoading = false;
      //     })
      //   )
      //   .subscribe(
      //     (data2:any)=>{
      //       this.toastr.success(data2.success,'Editado Exito'); 
      //     }
      //   )
      // }
      // else{      
        this.enfermedadService.postMedicina(form)
      .pipe(    
        finalize(() => {
      
          this.form.markAsPristine();
          this.isLoading=false;
        })
      )
      .subscribe(
        data => {
          this.toastr.success(data.success, 'Éxito');
        },
        (error: any) => {
          this.toastr.error(error.error, 'Error');
        }
      );
      // }
  }

  listaEnfermedades(){
    this.enfermedadService.getEnabledList().subscribe(
      data =>{
        this.enfermedades1 = data;
        console.log('enfermedades',this.enfermedades1);
        this.medicinaService.getById(this.medicina_id).subscribe(data=>{
          data.enfermedades.forEach((element,index) => {
            this.sumarUno();
            this.control.controls[index].patchValue({
              enfermedad_id : element.enfermedad_id,
              causas: element.causas,
              descripcion: element.descripcion,
              foto: element.foto
            })
          });
        })
        this.sumarUno();
      },
      error => {
        console.log('Error' + error.error);
        this.loadingScroll = false;
      }
    )
  }

  sumarUno(){
    this.control.push(this.createFormEnfermedad());
  }

  restarUno(item: any) {
    for (let i = 0; i < this.control.controls.length; i++) {
      if (item === i) {
        (<FormArray>this.form.controls['enfermedades']).removeAt(i);
      }
    }
    console.log('forms',this.form.value);
  }

}
