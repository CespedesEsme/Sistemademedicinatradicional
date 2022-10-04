import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import * as Chart from 'chart.js';
import { debounceTime } from 'rxjs/operators';
import { ReportesService } from 'src/app/core/service/reportes.service';
import { environment } from 'src/environments/environment.prod';
import { ViewPdfComponent } from '../../view-pdf/view-pdf.component';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  ratings: any;
  Buscador=new FormControl('', []);
  orden=new FormControl('', []);
  url= environment.imgUrl;
  label: any;
  data: any;
  chartPie:any=[];

  modalOptions: NgbModalOptions = {
    // size: 'lg'
  };

  modalOptionsPdf: NgbModalOptions = {
    size: 'lg'
  };

  constructor(
    private reportesService: ReportesService, private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.listarMedicinas(' ',' ');
    this.chart('');
    this.Buscador.valueChanges.pipe(
      debounceTime(300)
    )
    .subscribe(value => 
      this.listarMedicinas(value,this.orden.value));
  }
  listarMedicinas(term: string, orden: string) {
    this.reportesService.getMedicinas(term, orden).subscribe(data => {
      this.ratings = data;
      console.log(this.ratings)
    })
  }

  onChangeLike(){
    this.orden.setValue('like') 
    this.chart(this.orden.value);
    this.listarMedicinas(this.Buscador.value,this.orden.value);
  }
  onChangeComment(){
    this.orden.setValue('coment')
    this.chart(this.orden.value);
    this.listarMedicinas(this.Buscador.value,this.orden.value);
  }

  generatePDF() {
    //  this.isLoadingPdf = true;
      this.reportesService.generatePdfRating().subscribe((res: any) => {
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

  chart(orden){
    this.reportesService.getChartRatings(orden).subscribe(data=>{
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
