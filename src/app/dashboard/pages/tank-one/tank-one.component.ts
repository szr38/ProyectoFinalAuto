import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-tank-one',
  templateUrl: './tank-one.component.html',
  styleUrls: ['./tank-one.component.sass'],
})
export class TankOneComponent implements OnInit {
  public pumpOne: Observable<any>[];

  public tankOne: Observable<any>[];

  levelTank: number;
  graphLevelTank: any = { level: []=[], hour: []=[] };

  constructor(afDb: AngularFireDatabase) {
    const itemsRefTank: AngularFireList<any> = afDb.list('tank_one');
    itemsRefTank.valueChanges().subscribe((x: any[]) => {
      this.tankOne = x;
      this.levelTank = (Number(this.tankOne[1]) * 100) / 1000;
      this.graphLevelTank = {
        level: [...this.graphLevelTank.level, Number(this.tankOne[1])],
        hour: [...this.graphLevelTank.hour, new Date().toTimeString().split(' ')[0]],
      };
    });

    const itemsRefPump: AngularFireList<any> = afDb.list('pump_one');
    itemsRefPump.valueChanges().subscribe((x) => {
      this.pumpOne = x;
      console.log('this.pumpOne:', this.pumpOne);
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
      level: [...this.graphLevelTank.level, Number(this.tankOne[1])],
      hour: [...this.graphLevelTank.hour, chartTime],
    };
    if (this.graphLevelTank.level.length >= 5) {
      this.graphLevelTank.level.shift();
      this.graphLevelTank.hour.shift();
    }
    console.log(this.graphLevelTank);
  }
}
