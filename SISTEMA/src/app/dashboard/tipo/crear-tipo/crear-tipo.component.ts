import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { TipoService } from 'src/app/core/service/tipo.service';

@Component({
  selector: 'app-crear-tipo',
  templateUrl: './crear-tipo.component.html',
  styleUrls: ['./crear-tipo.component.scss']
})
export class CrearTipoComponent implements OnInit {
  form: FormGroup;

  @Input() titulo: string;
  @Input() id: string;
  @Input() estado: boolean;
  isLoading = false;

  constructor(
    private basicService:TipoService,
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.createForm();

    if(this.estado == true)
    {
      this.basicService.getById(this.id).subscribe(data => {
        this.form.patchValue({
          nombre: data.nombre,
        });
      });
    }
  }
  createForm() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
    });
  }
  registrarForm() {
    this.isLoading = true;
    if(this.estado == true)
    {
      this.basicService.update(this.id, this.form.value).pipe(
        finalize(() => {
          this.form.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        data => {
          this.toastr.success(data.success, 'Su registro se actualizo satisfactoriamente!!');
          this.activeModal.close(data);
        },
        (error: any) => {
          this.toastr.error(error.error, 'Error');
        }
      );
    }
    else{
      this.basicService.create(this.form.value).pipe(
        finalize(() => {
          this.form.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        data => {
          this.toastr.success(data.success, 'Su registro se guardo satisfactoriamente!!');
          this.activeModal.close(data);
        },
        (error: any) => {
          this.toastr.error(error.error, 'Error');
        }
      );
    }
  }
}
