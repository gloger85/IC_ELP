import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-tree-test',
  templateUrl: './tree-test.component.html',
  styleUrls: ['./tree-test.component.css']
})
export class TreeTestComponent implements OnInit {

  files : TreeNode[];
  selectedFiles: TreeNode[];

  constructor() { }

  ngOnInit() {
    this.files = [
      {
        "label": "Documents",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-folder-open",
        "collapsedIcon": "fa fa-folder",
        "children": [{
                "label": "Work",
                "data": "Work Folder",
                "expandedIcon": "fa fa-folder-open",
                "collapsedIcon": "fa fa-folder",
                "children": [{"label": "Expenses.doc", "icon": "fa fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "fa fa-file-word-o", "data": "Resume Document"}]
            },
            {
                "label": "Home",
                "data": "Home Folder",
                "expandedIcon": "fa fa-folder-open",
                "collapsedIcon": "fa fa-folder",
                "children": [{"label": "<b>Invoices.txt</b>", "icon": "fa fa-user", "data": "Invoices for this month"}]
            }]
    },
    {
        "label": "Pictures",
        "data": "Pictures Folder",
        "expandedIcon": "fa fa-folder-open",
        "collapsedIcon": "fa fa-folder",
        "children": [
            {"label": "barcelona.jpg", "icon": "fa fa-file-image-o", "data": "Barcelona Photo"},
            {"label": "logo.jpg", "icon": "fa fa-file-image-o", "data": "PrimeFaces Logo"},
            {"label": "primeui.png", "icon": "fa fa-file-image-o", "data": "PrimeUI Logo"}]
    },
    {
        "label": "Movies",
        "data": "Movies Folder",
        "expandedIcon": "fa fa-folder-open",
        "collapsedIcon": "fa fa-folder",
        "children": [{
                "label": "Al Pacino",
                "data": "Pacino Movies",
                "children": [{"label": "Scarface", "icon": "fa fa-file-video-o", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "fa fa-file-video-o", "data": "Serpico Movie"}]
            },
            {
                "label": "Robert De Niro",
                "data": "De Niro Movies",
                "children": [{"label": "Goodfellas", "icon": "fa fa-file-video-o", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "fa fa-file-video-o", "data": "Untouchables Movie"}]
            }]
    }
    ];
  }
}
