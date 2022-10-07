import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicinaService } from 'src/app/core/service/medicina.service';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { TipoService } from 'src/app/core/service/tipo.service';

@Component({
  selector: 'app-crear-medicina',
  templateUrl: './crear-medicina.component.html',
  styleUrls: ['./crear-medicina.component.scss']
})
export class CrearMedicinaComponent implements OnInit {

  form: FormGroup;
  //para recibir el mensaje de otro componente

  @Input() titulo: string;
  @Input() id: string;
  @Input() estado: boolean;
  isLoading = false;
  imagen: any;
  url: any;
  tipos:any[];
  
  constructor(
    private basicService:MedicinaService,
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private tipoService: TipoService
  ) { }

  ngOnInit(): void {
    this.listaTipos();
    this.createForm();

      if(this.estado == true)
      {
        this.form = this.formBuilder.group({
          nombre: ['', Validators.required],
          foto: [''],
          tipo_id: ['', Validators.required],
          descripcion: ['', Validators.required],
          efectos: ['', Validators.required],
          preparados: ['', Validators.required],
          recomendaciones: ['', Validators.required],
        });

        this.basicService.getById(this.id).subscribe(data => {
          console.log(data);
          //pathvalue es para rellenar datos existentes al formulario
          this.form.patchValue({
            nombre: data.nombre,
            // foto: data.foto,
            tipo_id: data.tipo_id,
            descripcion: data.descripcion,
            efectos: data.efectos,
            preparados: data.preparados,
            recomendaciones: data.recomendaciones,
          });
          console.log(this.form.value);
        });
      }
  }



  registrarForm(form: any) {
    this.isLoading = true;
    const formData = new FormData();
   
    formData.append("nombre",this.form.value.nombre);
    formData.append("file",this.imagen);
    formData.append("tipo_id",this.form.value.tipo_id);
    formData.append("descripcion",this.form.value.descripcion);
    formData.append("efectos",this.form.value.efectos);
    formData.append("preparados",this.form.value.preparados);
    formData.append("recomendaciones",this.form.value.recomendaciones);

    if(this.estado == true)
    {
      formData.append("_method", "PUT");
      this.basicService
      .createWithFile(this.id, formData).pipe(
        finalize(() => {
          this.form.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        data => {
          this.toastr.success(data.succes, 'Su registro se actualizo satisfactoriamente!!!');
          this.activeModal.close(data);
        },
        (error: any) => {
          this.toastr.error(error.error, 'Error');
        }
      );
    } else {
      this.basicService.create(formData).pipe(
      finalize(() => {
        this.form.markAsPristine();
        this.isLoading = false;
      })
    )
    .subscribe(
        data => {
          this.toastr.success(data.succes, 'Su registro se guardo satisfactoriamente!!!');
          this.activeModal.close(data);
        },
        (error: any) => {
          this.toastr.error(error.error, 'Error');
        }
      );
    } 
  }

  createForm() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      foto: [''],
      tipo_id: ['', Validators.required],
      descripcion: ['', Validators.required],
      efectos: ['', Validators.required],
      preparados: ['', Validators.required],
      recomendaciones: ['', Validators.required],
    });
  }

  onSelectFile(event) {
    
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      this.imagen = event.target.files[0]
      reader.onload = (event) => {
        this.url = event.target.result;
      }
    }
  }
  listaTipos(){
    this.tipoService.getEnabledList().subscribe(
      data =>{
        this.tipos = data;
        console.log('tipos',this.tipos);
      },
      error => {
        console.log('Error' + error.error);
      }
    )
  }
}
