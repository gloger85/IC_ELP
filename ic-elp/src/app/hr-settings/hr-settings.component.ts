import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';

interface Teams {
  name: string;
}

@Component({
  selector: 'app-hr-settings',
  templateUrl: './hr-settings.component.html',
  styleUrls: ['./hr-settings.component.css']
})

export class HrSettingsComponent implements OnInit {

  public display: Boolean = false;
  public displayTeam: Boolean = false;
  public members: TreeNode[];
  public selectedMembers: TreeNode[];
  public team: Teams[];
  public teams: Teams[];
  public requestStateData: any;

  constructor() {
    this.members = [
      {
        'label': 'Aon 360 (2 Members)',
        'data': 'Aon 360 (2 Members)',
        'expandedIcon': 'fa fa-folder-open',
        'collapsedIcon': 'fa fa-folder',
        'children': [
              {
                'label': 'Deepfak Pai',
                'data': 'Deepfak Pai',
                'expandedIcon': 'fa fa-chevron-down',
                'collapsedIcon': 'fa fa-chevron-right'
              },
              {
                'label': 'Lord Vater',
                'data': 'Lord Vater',
                'expandedIcon': 'fa fa-chevron-down',
                'collapsedIcon': 'fa fa-chevron-right'
              }
              ]
      },
      {
      'label': 'Nordicks (4 Members)',
      'data': 'Nordicks (4 Members)',
      'expandedIcon': 'fa fa-folder-open',
      'collapsedIcon': 'fa fa-folder',
      'children': [
            {
              'label': 'Greg Wasylow',
              'data': 'Greg Wasylow',
              'expandedIcon': 'fa fa-chevron-down',
              'collapsedIcon': 'fa fa-chevron-right'
            },
            {
              'label': 'Andrzej Jabcok',
              'data': 'Andrzej Jabcok',
              'expandedIcon': 'fa fa-chevron-down',
              'collapsedIcon': 'fa fa-chevron-right'
            },
            {
              'label': 'Bartek Szu',
              'data': 'Bartek Szu',
              'expandedIcon': 'fa fa-chevron-down',
              'collapsedIcon': 'fa fa-chevron-right'
            },
            {
              'label': 'Joanna K',
              'data': 'Joanna K',
              'expandedIcon': 'fa fa-chevron-down',
              'collapsedIcon': 'fa fa-chevron-right'
            }
            ]
    },
    {
      'label': 'Germany (3 Members)',
      'data': 'Germany (3 Members)',
      'expandedIcon': 'fa fa-folder-open',
      'collapsedIcon': 'fa fa-folder',
      'children': [
            {
              'label': 'Blady Kris',
              'data': 'Blady Kris',
              'expandedIcon': 'fa fa-chevron-down',
              'collapsedIcon': 'fa fa-chevron-right'
            },
            {
              'label': 'Andrzej Glogier',
              'data': 'Andrzej Glogier',
              'expandedIcon': 'fa fa-chevron-down',
              'collapsedIcon': 'fa fa-chevron-right'
            },
            {
              'label': 'Marcin Pijakowski',
              'data': 'Marcin Pijakowski',
              'expandedIcon': 'fa fa-chevron-down',
              'collapsedIcon': 'fa fa-chevron-right'
            }
            ]
      }
    ];
    this.team = [
      {name: 'Germany'},
      {name: 'Aon360'},
      {name: 'Nordicks'},
      {name: 'France'}];
  }

  ngOnInit() {
    this.requestStateData = {
      labels: ['Approved', 'Cancelled', 'Awaiting'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                '#36A2EB',
                '#FF6384',
                '#FFCE56'
              ],
              hoverBackgroundColor: [
                '#36A2EB',
                '#FF6384',
                '#FFCE56'
              ]
          }]
      };
  }

  showDialog(role: String) {
    if (role === 'Team-Group') {
      this.display = true;
    }
  }

  showTeamAdd(role: String) {
    if (role === 'Team-Group') {
      this.displayTeam = true;
    }
  }

  approveRequests() {
    this.display = false;
  }

  approveTeamAddition() {
    this.displayTeam = false;
  }
}
