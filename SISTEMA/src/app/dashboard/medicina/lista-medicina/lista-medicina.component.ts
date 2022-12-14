import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MedicinaService } from 'src/app/core/service/medicina.service';
import { CrearMedicinaComponent } from '../crear-medicina/crear-medicina.component';
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment.prod';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-lista-medicina',
  templateUrl: './lista-medicina.component.html',
  styleUrls: ['./lista-medicina.component.scss']
})
export class ListaMedicinaComponent implements OnInit {

  Medicinas: any;
  url=environment.imgUrl;

  modalOptions: NgbModalOptions = {
    
  };
  BuscarForm = new FormControl('', []);


  constructor(
    private formBuilder: FormBuilder,// trabajar con formularios
    private modalService: NgbModal, // mostrar una ventana emergente modal
    private toastr: ToastrService, // mensajes de confirmacion
    private MedicinaService: MedicinaService) { }

  ngOnInit(): void {
   
    this.listarMedicinas();

    this.BuscarForm.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((res: any) => {

      this.listarMedicinas();

    });
  }

  listarMedicinas(){
    // console.log("Cargos");
    this.MedicinaService.getAll({'term':this.BuscarForm.value}).subscribe(
      data => {
        this.Medicinas= data.data;
        console.log(this.Medicinas);
      },
      error=> {
        console.log('Error'+error.error);
      }
    )
  }
  crearMedicina(){

    // abrimos un componente en forma de modal
    const modalRef = this.modalService.open(
     CrearMedicinaComponent,
      this.modalOptions
    );

    // mandamos un mensaje al componente llamado title
    modalRef.componentInstance.titulo = 'Crear Medicina Natural';

    //atrapamos el mensaje cuando se cierra el modal
    modalRef.result.then(result => {
      if (result) {
        this.listarMedicinas();
      }
    });

  }
  editModal(id)
  {
    const modalRef = this.modalService.open(
      CrearMedicinaComponent,
       this.modalOptions
     );
 
     // mandamos un mensaje al componente llamado title
     modalRef.componentInstance.id = id;
     modalRef.componentInstance.estado = true;
     modalRef.componentInstance.titulo = 'Editar Medicina Natural';
     //atrapamos el mensaje cuando se cierra el modal
     modalRef.result.then(result => {
       if (result) {
         this.listarMedicinas();
       }
     });

  }

  enableMedicina(id: any) {
    this.MedicinaService.enableMedicina(id).subscribe(
      (data: any) => {
        // console.log('rol', this.rolSelected, this.currentSearchTerm);
        this.toastr.success(data.succes, '??xito');
        this.listarMedicinas();
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
        title: '??Est?? seguro?',
        text: "??Esta acci??n no podr?? revertirce!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, b??rralo!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
        
          this.MedicinaService.delete(id).subscribe(
            data => {
              swalWithBootstrapButtons.fire(
                'Eliminado!',
                'Su registro ha sido eliminado.',
                'success'
              )
             this.listarMedicinas();
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
            'Operaci??n cancelada',
            'La informaci??n esta a salvo.',
            'error'
          )
        }
      })
    }

}
