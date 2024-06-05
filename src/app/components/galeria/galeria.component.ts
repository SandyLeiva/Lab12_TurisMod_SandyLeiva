import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-galeria',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './galeria.component.html',
    styleUrls: ['./galeria.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaleriaComponent { }
