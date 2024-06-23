import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-scanner-qrcode',
  standalone: true,
  imports: [ZXingScannerModule, NgIf],
  templateUrl: './scanner-qrcode.component.html',
  styleUrl: './scanner-qrcode.component.css'
})
export class ScannerQrcodeComponent {
  torchEnabled = false;
  public currentDevice: MediaDeviceInfo | undefined;
  public hasPermission: boolean = false;
  public qrResult: string | undefined;
  public allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];
  

  handleQrCodeResult(result: string) {
    this.qrResult = result;
  }

  camerasFoundHandler(devices: MediaDeviceInfo[]): void {
    console.log('devices', devices)
    if (devices.length > 0) {
      this.currentDevice = devices[0];
    }
  }

  camerasNotFoundHandler(event: any): void {
    console.error('Nenhuma câmera encontrada.');
  }

  handlePermissionResponse(hasPermission: boolean): void {
    console.log('hasPermission', hasPermission);
    this.hasPermission = hasPermission;
  }
}
