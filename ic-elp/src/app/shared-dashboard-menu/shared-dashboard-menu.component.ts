import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-shared-dashboard-menu',
  templateUrl: './shared-dashboard-menu.component.html',
  styleUrls: ['./shared-dashboard-menu.component.css']
})

export class SharedDashboardMenuComponent implements OnInit {

  private mainMenuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
      this.mainMenuItems = [
        {
            label: 'Manager Inbox (new: 5)', icon: 'fa fa-fw fa-check',
            items: [
                [
                  {
                      label: 'Team: Aon360',
                      items: [{label: 'TV 1.1'}, {label: 'TV 1.2'}]
                  },
                  {
                      label: 'Team: Luxemburg',
                      items: [{label: 'TV 2.1'}, {label: 'TV 2.2'}]
                  }
                ],
                [
                  {
                      label: 'Team: Nordics',
                      items: [{label: 'TV 3.1'}, {label: 'TV 3.2'}]
                  },
                  {
                      label: 'Team: South Africa',
                      items: [{label: 'TV 4.1'}, {label: 'TV 4.2'}]
                  }
                ],
                [
                  {
                      label: 'Team: UK',
                      items: [{label: 'TV 3.1'}, {label: 'TV 3.2'}]
                  },
                  {
                      label: '- - -',
                      items: null
                  }
              ]
            ]
        },
        {
            label: 'HR Inbox (new: 0)', icon: 'fa fa-fw fa-soccer-ball-o',
            items: [
                [
                    {
                        label: 'Sports 1',
                        items: [{label: 'Sports 1.1'}, {label: 'Sports 1.2'}]
                    }
                ],
                [
                    {
                        label: 'Sports 3',
                        items: [{label: 'Sports 3.1'}, {label: 'Sports 3.2'}]
                    }
                ],
                [
                    {
                        label: 'Sports 5',
                        items: [{label: 'Sports 5.1'}, {label: 'Sports 5.2'}]
                    }
                ]
            ]
        },
        {
          label: 'Event log', icon: 'fa fa-fw fa-gears',
          items: [
              [
                  {
                      label: 'Sports 1',
                      items: [{label: 'Sports 1.1'}, {label: 'Sports 1.2'}]
                  },
                  {
                      label: 'Sports 2',
                      items: [{label: 'Sports 2.1'}, {label: 'Sports 2.2'}]
                  },

              ],
              [
                  {
                      label: 'Sports 3',
                      items: [{label: 'Sports 3.1'}, {label: 'Sports 3.2'}]
                  },
                  {
                      label: 'Sports 4',
                      items: [{label: 'Sports 4.1'}, {label: 'Sports 4.2'}]
                  }
              ],
              [
                  {
                      label: 'Sports 5',
                      items: [{label: 'Sports 5.1'}, {label: 'Sports 5.2'}]
                  },
                  {
                      label: 'Sports 6',
                      items: [{label: 'Sports 6.1'}, {label: 'Sports 6.2'}]
                  }
              ]
          ]
      }
    ];
  }
}

