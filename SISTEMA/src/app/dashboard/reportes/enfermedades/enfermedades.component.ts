import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { data } from 'jquery';
import { EnfermedadService } from 'src/app/core/service/enfermedad.service';
import { ReportesService } from 'src/app/core/service/reportes.service';
import { environment } from 'src/environments/environment.prod';
import { ViewPdfComponent } from '../../view-pdf/view-pdf.component';

@Component({
  selector: 'app-enfermedades',
  templateUrl: './enfermedades.component.html',
  styleUrls: ['./enfermedades.component.scss']
})
export class EnfermedadesComponent implements OnInit {
  enfermedades: any;
  enfermedad: any;
  medicina: any;
  url = environment.imgUrl;

  modalOptions: NgbModalOptions = {
    // size: 'lg'
  };

  modalOptionsPdf: NgbModalOptions = {
    size: 'lg'
  };
  isLoadingPdf = false;

  constructor(
    private reportesService: ReportesService,
    private enfermedadService: EnfermedadService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.listaEnfermedades();
  }

  listaEnfermedades() {
    this.enfermedadService.getAll().subscribe(data=>{
      this.enfermedades = data.data;
      console.log(this.enfermedades);
    })
  }

  OnEnfermedadesMedicina(item){
      this.enfermedad = item;
      this.mostrasMedicina();
  }

  generatePDF() {
  //  this.isLoadingPdf = true;

    console.log(this.enfermedad.enfermedad_id);
    this.reportesService.generatePdf(this.enfermedad.enfermedad_id).subscribe((res: any) => {
    //  this.isLoadingPdf = false;
      const file = new Blob([res], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);

      const modal = this.modalService.open(ViewPdfComponent, this.modalOptionsPdf);
      // modal.componentInstance.Id = id;
      modal.componentInstance.estado = true;
      modal.componentInstance.title = 'Vista previa del Reporte';
      modal.componentInstance.pdfRuta = fileURL;
      modal.result.then(result => {
        if (result) {
        //  this.list();
        }
      });
    });
  }

  mostrasMedicina(){
    this.reportesService.getEnfermedadMedicina(this.enfermedad.enfermedad_id).subscribe(data=>{
       this.medicina = data.medicinas;
       console.log(this.medicina);
    })
  }


}
