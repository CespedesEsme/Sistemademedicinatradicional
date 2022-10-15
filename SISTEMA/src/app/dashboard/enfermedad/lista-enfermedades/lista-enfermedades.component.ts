import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { EnfermedadService } from 'src/app/core/service/enfermedad.service';
import { CrearEnfermedadesComponent } from '../crear-enfermedades/crear-enfermedades.component';
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment.prod';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-lista-enfermedades',
  templateUrl: './lista-enfermedades.component.html',
  styleUrls: ['./lista-enfermedades.component.scss']
})
export class ListaEnfermedadesComponent implements OnInit {

  Enfermedades: any;
  url=environment.imgUrl;
  
  modalOptions: NgbModalOptions = {
    
  };

  BuscarForm = new FormControl('', []);

  constructor(
    private formBuilder: FormBuilder,// trabajar con formularios 
    private modalService: NgbModal, // mostrar una ventana emergente modal
    private toastr: ToastrService, // mensajes de confirmacion
    private EnfermedadService: EnfermedadService) { }

  ngOnInit(): void {
    this.listarEnfermedades();

    this.BuscarForm.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((res: any) => {
      this.listarEnfermedades();
    });
  }

  listarEnfermedades(){
    // console.log("Cargos");
    this.EnfermedadService.getAll({'term':this.BuscarForm.value}).subscribe(
      data => {
        this.Enfermedades= data.data;
        console.log(this.Enfermedades);
      },
      error=> {
        console.log('Error'+error.error);
      }
    )
  }
  crearEnfermedad(){

    // abrimos un componente en forma de modal
    const modalRef = this.modalService.open(
     CrearEnfermedadesComponent,
      this.modalOptions
    );

    // mandamos un mensaje al componente llamado title
    modalRef.componentInstance.titulo = 'Crear Enfermedad';

    //atrapamos el mensaje cuando se cierra el modal
    modalRef.result.then(result => {
      if (result) {
        this.listarEnfermedades();
      }
    });

  }
  editModal(id)
  {
    const modalRef = this.modalService.open(
      CrearEnfermedadesComponent,
       this.modalOptions
     );
 
     // mandamos un mensaje al componente llamado title
     modalRef.componentInstance.id = id;
     modalRef.componentInstance.estado = true;
     modalRef.componentInstance.titulo = 'Editar Serie';
     //atrapamos el mensaje cuando se cierra el modal
     modalRef.result.then(result => {
       if (result) {
         this.listarEnfermedades();
       }
     });

  }

  enableEnfermedad(id: any) {
    this.EnfermedadService.enableEnfermedad(id).subscribe(
      (data: any) => {
        // console.log('rol', this.rolSelected, this.currentSearchTerm);
        this.toastr.success(data.succes, 'Éxito');
        this.listarEnfermedades();
        // this.disableScroll = true;
      },
      error => {
        console.log('error ' + error);
        this.toastr.error(error.error, 'Error');
      }
    );
  }
  delete(id: any) {
    console.log(id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: "¡Esta acción no podrá revertirce!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, bórralo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
      
        this.EnfermedadService.delete(id).subscribe(
          data => {
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              'Su registro ha sido eliminado.',
              'success'
            )
           this.listarEnfermedades();
          },
          error=> {
            console.log('Error'+error.error);
          }
        )

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Operación cancelada',
          'La información esta a salvo.',
          'error'
        )
      }
    })
  }

}
