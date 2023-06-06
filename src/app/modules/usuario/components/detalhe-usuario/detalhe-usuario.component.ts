import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Observable, map, startWith } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';


@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.scss']
})
export class DetalheUsuarioComponent implements OnInit {


  @ViewChild('filtroInput') filtroInput!: ElementRef<HTMLInputElement>

  form: FormGroup;
  perfis!: any[];

  perfisFiltrados$!: Observable<any[]>;

  constructor(
    private _matSnackBar: MatSnackBar,
    private _formBuilder: FormBuilder
  ) {
    this.form = this._formBuilder.group({
      id: [null, []],
      nome: [null, [Validators.required]],
      tipo: ['2', [Validators.required]],
      usuario: [null, [Validators.required]],
      ativo: [null, []],
      administrador: [null, []],
      data_inativacao: [null, []],
      perfis: [[], []],
      perfilFiltro: [null, []],
      instituicao: [null, []]
    });
  }

  private _setChipsPerfis(): void {
    this.perfis = [
      { label: 'Usuário CIAP', value: 1 },
      { label: 'Usuário Entidade', value: 2 },
      { label: 'Administrador', value: 3 },
      { label: 'administrador', value: 5 },
    ];

  }

  private _filtrarPerfil(perfil: any): any[] {
    const value = perfil?.label?.toLowerCase() || perfil.toLowerCase();
    return this.perfis.filter((perfil: any) => perfil.label.toLowerCase().includes(value));
  }

  ngOnInit(): void {
    this._setChipsPerfis();

    this.perfisFiltrados$ = this.form.controls['perfilFiltro']?.valueChanges.pipe(
      startWith(null),
      map((perfil: string) => {
        console.log(perfil);

        return (perfil ? this._filtrarPerfil(perfil) : this.perfis.slice())
      })
    );
  }

  onAdicionar(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      //this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    //this.fruitCtrl.setValue(null);
  }

  onSelecionarOpcao(event: MatAutocompleteSelectedEvent): void {
    if (this.form.get('perfis')?.value?.findIndex((perfil: any) => perfil?.value === event.option.value.value) === -1) {
      this.form.get('perfis')?.patchValue([...this.form.get('perfis')?.value, ...[event.option.value]]);
      return;
    } else {
      this._matSnackBar.open("O usuário já possui esse perfil!", "OK");
    }

    setTimeout(() => {
      this.form.get('perfilFiltro')?.setValue('');
      this.filtroInput.nativeElement.value = '';
      event.option.deselect();
    });
  }

  onAtualizarPrestadorSelecionado(valor: any) {
    this.form.get('instituicao')?.patchValue(valor);
  }
}
