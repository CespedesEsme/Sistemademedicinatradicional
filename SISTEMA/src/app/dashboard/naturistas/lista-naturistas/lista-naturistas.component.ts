import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import * as Chart from 'chart.js';
import { debounceTime } from 'rxjs/operators';
import { ReportesService } from 'src/app/core/service/reportes.service';
import { ViewPdfComponent } from '../../view-pdf/view-pdf.component';

@Component({
  selector: 'app-lista-naturistas',
  templateUrl: './lista-naturistas.component.html',
  styleUrls: ['./lista-naturistas.component.scss']
})
export class ListaNaturistasComponent implements OnInit {
  naturistas: any;
  Buscador=new FormControl('', []);
  currentSearchTerm: string;
  label: any;
  data: any;
  chartPie: any=[];

  modalOptions: NgbModalOptions = {
    // size: 'lg'
  };

  modalOptionsPdf: NgbModalOptions = {
    size: 'lg'
  };
  isLoadingPdf = false;
  constructor(
    private reportesService: ReportesService,
    private modalService: NgbModal
  ) { 
    this.currentSearchTerm = ' ';
  }

  ngOnInit(): void {
    this.ListaAporteNaturistas(this.currentSearchTerm);
    this.chart();
    this.Buscador.valueChanges.pipe(
      debounceTime(300)
    )
    .subscribe(value => 
      this.ListaAporteNaturistas(value));
  }
  
  ListaAporteNaturistas(term) {
    this.reportesService.getAportes(term).subscribe(data => {
      this.naturistas = data;
      console.log(this.naturistas);
    })
  }

  chart(){
    this.reportesService.getChartAportes().subscribe(data=>{
      this.label = data.label;
      this.data = data.data;
      console.log(this.label);
      console.log(this.data);
      this.chartPie = new Chart('canvas',{
        type: 'pie',
        data:{
          labels: this.label,
          datasets: [{
            label: '# of Votes',
            data: this.data,
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ]
          }]
        }
      })
    })
  }
  generatePDF() {
    //  this.isLoadingPdf = true;
  
      this.reportesService.generatePdfAportes().subscribe((res: any) => {
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


}
