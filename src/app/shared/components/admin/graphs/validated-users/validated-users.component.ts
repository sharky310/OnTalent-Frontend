import { Component} from '@angular/core';

@Component({
  selector: 'ot-validated-users',
  templateUrl: './validated-users.component.html',
  styleUrls: ['./validated-users.component.scss']
})
export class ValidatedUsersComponent{

  public pieChartLabels = ['Activated Account', 'Accounts not activated'];
  public pieChartData = [8,2];
  public pieChartType = 'pie';

  constructor() { }
  
}
