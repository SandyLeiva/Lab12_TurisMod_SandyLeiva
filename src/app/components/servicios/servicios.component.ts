import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-servicios',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './servicios.component.html',
    styleUrls: ['./servicios.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponent { }
