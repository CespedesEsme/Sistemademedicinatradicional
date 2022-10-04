import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import {Chart} from 'chart.js';
import { debounceTime } from 'rxjs/operators';
import { ReportesService } from 'src/app/core/service/reportes.service';
import { environment } from 'src/environments/environment.prod';
import { ViewPdfComponent } from '../../view-pdf/view-pdf.component';

@Component({
  selector: 'app-medicinas',
  templateUrl: './medicinas.component.html',
  styleUrls: ['./medicinas.component.scss']
})
export class MedicinasComponent implements OnInit {
  populares: any;
  Buscador=new FormControl('', []);
  url= environment.imgUrl;
  charts: any;
  chartPie:any=[]
  label: any;
  data: any;

  modalOptions: NgbModalOptions = {
    // size: 'lg'
  };

  modalOptionsPdf: NgbModalOptions = {
    size: 'lg'
  };
  constructor(
    private reportesService: ReportesService,  private modalService: NgbModal

  ) { 
    
  }

  ngOnInit(): void {
    this.listarMedicinas(' ');
    this.chart();
    console.log(this.label);
    
    this.Buscador.valueChanges.pipe(
      debounceTime(300)
    )
    .subscribe(value => 
      this.listarMedicinas(value));  
  }

  listarMedicinas(term) {
    this.reportesService.getMedicinasPopulares(term).subscribe(data=>{
      this.populares = data;
      console.log(this.populares);
    })
  }
  generatePDF() {
    //  this.isLoadingPdf = true;
  
      this.reportesService.generatePdfPopulares().subscribe((res: any) => {
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

  chart(){
    this.reportesService.getChartMedicinas().subscribe(data=>{
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

}
