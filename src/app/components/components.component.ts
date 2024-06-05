import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    },
    .itinerarios {
    padding: 0;
    list-style: none;
    text-align: left;
    }
    .itinerario-item {
        background-color: #f7f7f7;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 5px;
        padding: 20px;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .itinerario-item:hover {
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .itinerario-item .title {
        font-size: 1.5rem;
        color: #e74c3c;
        margin-bottom: 10px;
    }

    .itinerario-item p {
        font-size: 1rem;
        color: #333;
    }

    `]
})

export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor( private renderer : Renderer2) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }

}