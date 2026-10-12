import { Component } from '@angular/core';
import { KpiCardComponent } from '../../../components/kpi-card/kpi-card.component';
import { KPI_CARD_CONSTANTS } from '../../../constants';

@Component({
  selector: 'app-dashboard',
  imports: [KpiCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  cardConstants = KPI_CARD_CONSTANTS;
}
