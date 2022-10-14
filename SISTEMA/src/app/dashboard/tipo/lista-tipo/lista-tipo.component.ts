import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TipoService } from 'src/app/core/service/tipo.service';
import Swal from 'sweetalert2';
import { CrearTipoComponent } from '../crear-tipo/crear-tipo.component';

@Component({
  selector: 'app-lista-tipo',
  templateUrl: './lista-tipo.component.html',
  styleUrls: ['./lista-tipo.component.scss']
})
export class ListaTipoComponent implements OnInit {
  tipos: any;
  title = 'Tipo';
  modalOptions: NgbModalOptions = {};

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal, // mostrar una ventana emergente modal 
    private toastr: ToastrService, // mensajes de confirmacion
    private basicService: TipoService
  ) { }

  ngOnInit(): void {
    this.listData();
  }
  listData(){
    this.basicService.getAll().subscribe(
      data => {
        this.tipos= data.data;
        
      },
      error=> {
        console.log('Error'+error.error);
      }
    )
  }
  createModal(){
    const modalRef = this.modalService.open(
      CrearTipoComponent,
       this.modalOptions
     );
     modalRef.componentInstance.titulo = 'Crear ' + this.title;
     modalRef.result.then(result => {
       if (result) {
         this.listData();
       }
     });
  }
  editModal(id)
  {
    const modalRef = this.modalService.open(
      CrearTipoComponent,
       this.modalOptions
     );
 
     modalRef.componentInstance.id = id;
     modalRef.componentInstance.estado = true;
     modalRef.componentInstance.titulo = 'Editar ' + this.title;
     modalRef.result.then(result => {
       if (result) {
         this.listData();
       }
     });
  }
  delete(id: any) {
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
      
        this.basicService.delete(id).subscribe(
          data => {
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              'Su registro ha sido eliminado.',
              'success'
            )
           this.listData();
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
