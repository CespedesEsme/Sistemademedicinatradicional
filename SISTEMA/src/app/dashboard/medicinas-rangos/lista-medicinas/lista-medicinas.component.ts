import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import * as Chart from 'chart.js';
import { data } from 'jquery';
import { debounceTime } from 'rxjs/operators';
import { ReportesService } from 'src/app/core/service/reportes.service';
import { environment } from 'src/environments/environment.prod';
import { ViewPdfComponent } from '../../view-pdf/view-pdf.component';

@Component({
  selector: 'app-lista-medicinas',
  templateUrl: './lista-medicinas.component.html',
  styleUrls: ['./lista-medicinas.component.scss']
})
export class ListaMedicinasComponent implements OnInit {
  medicinas: any;
  rangos: any;
  chartPie:any=[];
  modalOptionsPdf: NgbModalOptions = {
    size: 'lg'
  };

  Buscador=new FormControl('', []);
  rango=new FormControl('1', []);
  url=environment.imgUrl;
  label: any;
  data: any;
  constructor(private reportesService: ReportesService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.listarRango();
    this.listaMedicinas('',1);
    this.chart('',1);
    this.Buscador.valueChanges.pipe(
      debounceTime(300)
    )
    .subscribe(value => 
      this.listaMedicinas(value, this.rango.value));
  }

  listaMedicinas(term,rango) {
    this.reportesService.getMedicinaVisitas(term,rango).subscribe(data=>{
      this.medicinas = data;
      console.log(this.medicinas);
      
    })
  }

  listarRango(){
      this.reportesService.getRango().subscribe(data=>{
        this.rangos = data;
        console.log(this.rangos);
        
      })
  }

  Onrangos(item){
    this.listaMedicinas(this.Buscador.value,item.value);
    this.chart(this.Buscador.value,item.value);
    console.log('cahrt',item)
  }

  generatePDF() {
    //  this.isLoadingPdf = true;
      this.reportesService.getMedicinaVisitasPdf(this.Buscador.value,this.rango.value).subscribe((res: any) => {
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

    chart(term,rango){
      this.reportesService.getMedicinaVisitasChart(term,rango).subscribe(data=>{
        this.label = data.label;
        this.data = data.data;
        console.log(this.label);
        console.log(this.data);
        this.chartPie = new Chart('canvas',{
          type: 'pie',
          data:{
            labels: this.label,
            datasets: [{
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
