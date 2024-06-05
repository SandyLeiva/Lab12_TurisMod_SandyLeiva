import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-nosotros',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './nosotros.component.html',
    styleUrls: ['./nosotros.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosComponent { }
