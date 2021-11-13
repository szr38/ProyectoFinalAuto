import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs'

@Component({
  selector: 'app-tank-two',
  templateUrl: './tank-two.component.html',
  styleUrls: ['./tank-two.component.sass']
})
export class TankTwoComponent implements OnInit {
  public pumpTwo: Observable<any>[];

  public tankTwo: Observable<any>[];

  levelTank: number;
  graphLevelTank: any = { level: []=[], hour: []=[] };

  constructor(afDb: AngularFireDatabase) {
    const itemsRefTank: AngularFireList<any> = afDb.list('tank_two');
    itemsRefTank.valueChanges().subscribe((x: any[]) => {
      this.tankTwo = x;
      this.levelTank = (Number(this.tankTwo[1]) * 100) / 1000;
      this.graphLevelTank = {
        level: [...this.graphLevelTank.level, Number(this.tankTwo[1])],
        hour: [...this.graphLevelTank.hour, new Date().toTimeString().split(' ')[0]],
      };
    });

    const itemsRefPump: AngularFireList<any> = afDb.list('pump_two');
    itemsRefPump.valueChanges().subscribe((x) => {
      this.pumpTwo = x;
    });
  }

  ngOnInit(): void {
    setInterval(() => {
      this.testingTemperature();
    }, 5000);
  }

  testingTemperature() {
    let chartTime: any = new Date().toTimeString().split(' ')[0]
    this.graphLevelTank = {
      level: [...this.graphLevelTank.level, Number(this.tankTwo[1])],
      hour: [...this.graphLevelTank.hour, chartTime],
    };
    if (this.graphLevelTank.level.length >= 5) {
      this.graphLevelTank.level.shift();
      this.graphLevelTank.hour.shift();
    }
    console.log(this.graphLevelTank);
  }
}
