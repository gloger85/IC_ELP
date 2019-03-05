import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-tree-test',
  templateUrl: './tree-test.component.html',
  styleUrls: ['./tree-test.component.css']
})

export class TreeTestComponent implements OnInit {

  public files: TreeNode[];
  public selectedFiles: TreeNode[];

  constructor() { }

  ngOnInit() {
    this.files = [
      {
        'label': 'Jan Kowalski (1 new)',
        'data': 'Jan Kowalski&#96;s files',
        'expandedIcon': 'fa fa-folder-open',
        'collapsedIcon': 'fa fa-folder',
        'children': [{
                'label': '2017',
                'data': '2017',
                'expandedIcon': 'fa fa-folder-open',
                'collapsedIcon': 'fa fa-folder',
                // tslint:disable-next-line:max-line-length
                'children': [
                  {'label': '01/02/2018 Parential Leave', 'icon': 'fa fa-file-word-o', 'data': '01/02/2017 Parential Leave'},
                  {'label': '06/06/2018 Holidays', 'icon': 'fa fa-file-word-o', 'data': '06/06/2017 Holidays'}]
            },
            {
                'label': '2018 (1 new)',
                'data': '2018',
                'expandedIcon': 'fa fa-folder-open',
                'collapsedIcon': 'fa fa-folder',
                'children': [
                  {'label': '01/02/2018 Parential Leave', 'icon': 'fa fa-file-word-o', 'data': '01/02/2018 Parential Leave'},
                  {'label': '04/04/2018 Parential Leave', 'icon': 'fa fa-file-word-o', 'data': '04/04/2018 Holidays'},
                  {'label': '06/06/2018 Holidays (new)', 'icon': 'fa fa-file-word-o', 'data': '06/06/2018 Holidays'}]
            }]
      },
      {
        'label': 'Roman Putas',
        'data': 'Roman Putas&#96;s files',
        'expandedIcon': 'fa fa-folder-open',
        'collapsedIcon': 'fa fa-folder',
        'children': [{
                'label': '2017',
                'data': '2017',
                'expandedIcon': 'fa fa-folder-open',
                'collapsedIcon': 'fa fa-folder',
                // tslint:disable-next-line:max-line-length
                'children': [
                  {'label': '06/06/2018 Holidays', 'icon': 'fa fa-file-word-o', 'data': '06/06/2018 Holidays'}]
            },
            {
                'label': '2018',
                'data': '2018',
                'expandedIcon': 'fa fa-folder-open',
                'collapsedIcon': 'fa fa-folder',
                'children': [
                  {'label': '01/02/2018 Parential Leave', 'icon': 'fa fa-file-word-o', 'data': '01/02/2018 Parential Leave'},
                  {'label': '06/06/2018 Holidays', 'icon': 'fa fa-file-word-o', 'data': '06/06/2018 Holidays'},
                  {'label': '06/06/2018 Holidays', 'icon': 'fa fa-file-word-o', 'data': '16/09/2018 Holidays'}]
            }]
        },
    /*{
      'label': 'Stefan Wojownik (Team Lead)',
      'data': 'Stefan Wojwnik&#96;s files',
      'expandedIcon': 'fa fa-folder-open',
      'collapsedIcon': 'fa fa-folder',
      'children': [{
              'label': 'Alicja Pacynka',
              'data': 'Alicja Pacynka&#96;s files',
              'expandedIcon': 'fa fa-folder-open',
              'collapsedIcon': 'fa fa-folder',
              // tslint:disable-next-line:max-line-length
              'children': [
                {'label': '01/02/2018 Parential Leave', 'icon': 'fa fa-file-word-o', 'data': '01/02/2018 Parential Leave'},
                {'label': '06/06/2018 Holidays', 'icon': 'fa fa-file-word-o', 'data': '06/06/2018 Holidays'}]
          },
          {
              'label': 'Mariusz Czerkawski',
              'data': 'Mariusz Czerkawski&#96;s files',
              'expandedIcon': 'fa fa-folder-open',
              'collapsedIcon': 'fa fa-folder',
              // tslint:disable-next-line:max-line-length
              'children': [
                {'label': '01/02/2018 Parential Leave', 'icon': 'fa fa-file-word-o', 'data': '01/02/2018 Parential Leave'},
                {'label': '06/06/2018 Holidays', 'icon': 'fa fa-file-word-o', 'data': '06/06/2018 Holidays'}]
          }]
    },*/
    /*{
        'label': 'Marianna Antonowska',
        'data': 'Marianna Anotowska&#96;s files',
        'expandedIcon': 'fa fa-folder-open',
        'collapsedIcon': 'fa fa-folder',
        'children': [
          {'label': '01/02/2018 Parential Leave', 'icon': 'fa fa-file-word-o', 'data': '01/02/2018 Parential Leave'},
          {'label': '06/06/2018 Holidays', 'icon': 'fa fa-file-word-o', 'data': '06/06/2018 Holidays'}]
    }*/
      {
        'label': 'Marianna Antonowska (2 new)',
        'data': 'Marianna Antonowska&#96;s files',
        'expandedIcon': 'fa fa-folder-open',
        'collapsedIcon': 'fa fa-folder',
        'children': [{
                'label': '2017',
                'data': '2017',
                'expandedIcon': 'fa fa-folder-open',
                'collapsedIcon': 'fa fa-folder',
                // tslint:disable-next-line:max-line-length
                'children': [
                  {'label': '01/02/2018 Parential Leave', 'icon': 'fa fa-file-word-o', 'data': '01/02/2018 Parential Leave'},
                  {'label': '06/06/2018 Holidays', 'icon': 'fa fa-file-word-o', 'data': '06/06/2018 Holidays'}]
            },
            {
                'label': '2018 (2 new)',
                'data': '2018',
                'expandedIcon': 'fa fa-folder-open',
                'collapsedIcon': 'fa fa-folder',
                'children': [
                  {'label': '01/02/2018 Parential Leave', 'icon': 'fa fa-file-word-o', 'data': '01/02/2018 Parential Leave'},
                  {'label': '06/06/2018 Holidays (new)', 'icon': 'fa fa-file-word-o', 'data': '06/06/2018 Holidays'},
                  {'label': '22/08/2018 Holidays (new)', 'icon': 'fa fa-file-word-o', 'data': '22/08/2018 Holidays'},
                  {'label': '16/09/2018 Holidays', 'icon': 'fa fa-file-word-o', 'data': '16/09/2018 Holidays'}]
            }]
        },
    ];
  }

  public approveRequests() {
  }

  public cancelRequests() {

  }
}
