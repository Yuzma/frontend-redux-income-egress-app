import {Routes} from '@angular/router';
import {StatisticComponent} from '../income-egress/statistic/statistic.component';
import {IncomeEgressComponent} from '../income-egress/income-egress.component';
import {DetalleComponent} from '../income-egress/detalle/detalle.component';

export const dashboardRoutes: Routes = [
  {path: '', component: StatisticComponent},
  {path: 'income-egress', component: IncomeEgressComponent},
  {path: 'detalle', component: DetalleComponent}
];
