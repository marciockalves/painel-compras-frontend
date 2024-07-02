import { Component } from '@angular/core';
import { ScannerQrcodeComponent } from '../../components/scanner-qrcode/scanner-qrcode.component';

@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [ScannerQrcodeComponent],
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.css'
})
export class ScannerComponent {


  
}
