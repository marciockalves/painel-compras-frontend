import { Component } from '@angular/core';
import { TecladoNumericoComponent } from '../../components/teclado-numerico/teclado-numerico.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { MensageriaComponent } from '../../components/mensageria/mensageria.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-entrada',
  standalone: true,
  imports: [TecladoNumericoComponent, MatFormFieldModule, MatInputModule, NgIf, ReactiveFormsModule],
  templateUrl: './entrada.component.html',
  styleUrl: './entrada.component.css'
})
export class EntradaComponent {

  public formDocument: FormGroup;
  public isDocumentInvalid: boolean = false;
  public key: string= '';
  cpfCnpjMask: string = '000.000.000-00';


  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog
    
  
  ){
      this.formDocument = this.formBuilder.group({
        document:['',[Validators.required]]
      })

    
  }

  get cpfCnpj() {
    return this.formDocument.get('document');
  }
  recieveEventKey(event:any){

    if(event === 'backspace'){
      this.backspaceAction();
    }else if(event === 'send'){
      console.log('event', event);
    
      this.dialog.open(MensageriaComponent,{
        data:{title:'Cadastro de Usuários', content:'Não encontramos seu cadastro, deseja cadastrar?'}
      })

    }else{
      const currentValue = this.formDocument.get('document')?.value || '';
    const newValue = currentValue + event;
    this.formDocument.get('document')?.setValue(newValue);
    }
  } 

  backspaceAction(){
    const currentValue = this.formDocument.get('document')?.value || '';
    const newValue = currentValue.slice(0, -1);
    this.formDocument.get('document')?.setValue(newValue);

  }

  updateMask() {
    const value = this.cpfCnpj?.value.replace(/\D/g, '');
    if (value.length > 11) {
      this.cpfCnpjMask = '00.000.000/0000-00';
    } else {
      this.cpfCnpjMask = '000.000.000-00';
    }
  }

}
