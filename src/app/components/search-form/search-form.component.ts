import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {regex} from "../../constants";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;

  constructor() {
    this.createForm()
  }

  ngOnInit(): void {
  }

  public createForm() {
    this.form = new FormGroup({
      search: new FormControl(null, [
        Validators.minLength(1), Validators.maxLength(30),
        Validators.pattern(regex.onlyLatinLetters)
      ])
    })
  }

  public disabled() {
    this.errorMessage = '';
    if (this.form.invalid) {
      this.errorMessage = 'no valid form';
    }
  }

  public submit() {
    console.log(this.form.getRawValue());
  }

}
