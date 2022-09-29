import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EnfermedadService } from 'src/app/core/service/enfermedad.service';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-enfermedades',
  templateUrl: './crear-enfermedades.component.html',
  styleUrls: ['./crear-enfermedades.component.scss']
})
export class CrearEnfermedadesComponent implements OnInit {

  form: FormGroup;
  //para recibir el mensaje de otro componente

  @Input() titulo: string;
  @Input() id: string;
  @Input() estado: boolean;
  isLoading = false;
  url: any;
  imagen: any;

  constructor(
    private basicService:EnfermedadService,
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {

    this.createForm();

      if(this.estado == true)
      {
        this.basicService.getById(this.id).subscribe(data => {
          // console.log(data);
          //pathvalue es para rellenar datos existentes al formulario
          this.form.patchValue({
            nombre: data.nombre,
            descripcion: data.descripcion,
            file: data.file,
            causas: data.causas
          });
        });
      }
  }

  registrarEnfermedad(form: any) {
    this.isLoading = true;
    const formData = new FormData();
    formData.append("nombre",this.form.value.nombre);
    formData.append("descripcion",this.form.value.descripcion);
    formData.append("file",this.imagen);
    formData.append("causas",this.form.value.causas);

    if(this.estado == true)
    {
      formData.append("_method", "PUT");
      this.basicService
      .createWithFile(this.id, formData)
      .pipe(
      finalize(() => {
        this.form.markAsPristine();
        this.isLoading = false;
      })
      )
      .subscribe(
      data => {
        this.toastr.success(data.succes, 'Su registro se actualizo satisfactoriamente!!');
        this.activeModal.close(data);
      },
      (error: any) => {
        this.toastr.error(error.error, 'Error');
      }
      );
      
    }
    else{
      this.basicService
      .create(formData)
    .pipe(
      finalize(() => {
        this.form.markAsPristine();
        this.isLoading = false;
      })
    )
    .subscribe(
      data => {
        this.toastr.success(data.succes, 'Su registro se guardo satisfactoriamente!!');
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
      descripcion: ['', Validators.required],
      foto: [''],
      causas: ['', Validators.required]
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
}
