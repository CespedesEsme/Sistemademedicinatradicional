import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { User } from 'src/app/core/model/authentication.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.scss']
})
export class CreateUsuarioComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  selectedRols: any[];
  usuario: User;
  rolesAll: any;
  @Input() roles3: any;
  @Input() user: any;
  @Input() title: string;
  @Input() userId: string;
  @Input() estado: boolean;
  isLoading = false;
  modalOptions: NgbModalOptions = {};

  constructor(
    private formBuilder: FormBuilder,
    private basicService: UserService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService
  ) {
    this.selectedRols = new Array();
    this.modalOptions = {
      size: 'lg',
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit(): void {
    this.createForm();
    this.llenarRoles();

    if (this.estado === true) {
      console.log('User id', this.userId);
      this.basicService.getById(this.userId).subscribe(data => {
        // console.log(data);
        this.form.patchValue({
          nombreUsuario: data.nombreUsuario,
          cargo: data.cargo,
          password: '',
          email: data.email,
          nombres: data.nombres,
          primerApellido: data.primerApellido,
          segundoApellido: data.segundoApellido,
          fechaNacimiento: data.fechaNacimiento,
          roles: data.roles
        });
      });
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  createForm() {
    this.form = this.formBuilder.group({
      nombreUsuario: ['', Validators.required],
      cargo: ['', Validators.required],
      password: [''],
      // email: ['', [Validators.required, Validators.email]],
      nombres: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z???????????????????????? ]*')]
      ],
      primerApellido: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z???????????????????????? ]*')]
      ],
      segundoApellido: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z???????????????????????? ]*')]
      ],
      fechaNacimiento: ['', Validators.required],
      roles: this.formBuilder.array([this.crearRol()])
    });
  }

  crearRol(): FormGroup {
    return this.formBuilder.group({
      id: '',
      name: '',
      display_name: '',
      selected: false
    });
  }

  llenarRoles() {
    this.basicService.getAllRoles().subscribe(
      data => {
        this.rolesAll = data;
        const control = <FormArray>this.form.controls['roles'];
        for (let i = 1; i < this.rolesAll.length; i++) {
          control.push(this.crearRol());
        }

        this.form.patchValue({ roles: this.rolesAll });
      },
      (error: any) => {
        alert('error');
      }
    );
  }

  get roles(): FormArray {
    return this.form.get('roles') as FormArray;
  }

  registerUser(form: any) {
    this.submitted = true;
    // console.log(this.userId);
    this.isLoading = true;
    if (this.estado === true) {
      this.basicService
        .update(this.userId, form)
        .pipe(
          finalize(() => {
            this.form.markAsPristine();
            this.isLoading = false;
          })
        )
        .subscribe(
          data3 => {
            this.toastr.success(data3.succes, '??xito');
            this.activeModal.close(data3);
          },
          (error: any) => {
            this.toastr.error(error.error, 'Error');
          }
        );
    } else {
      this.basicService
        .create(form)
        .pipe(
          finalize(() => {
            this.form.markAsPristine();
            this.isLoading = false;
          })
        )
        .subscribe(
          data => {
            this.toastr.success(data.succes, '??xito');
            this.activeModal.close(data);
          },
          (error: any) => {
            this.toastr.error(error.error, 'Error');
          }
        );
    }
  }
}
