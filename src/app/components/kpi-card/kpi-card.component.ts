import { Component, input } from '@angular/core';
import { kpiDataModel } from '../../models/kpidata.model';

@Component({
  selector: 'app-kpi-card',
  imports: [],
  templateUrl: './kpi-card.component.html',
  styleUrl: './kpi-card.component.css',
})
export class KpiCardComponent {
  kpiData = input.required<kpiDataModel>();
  index = input.required<number>();
}
