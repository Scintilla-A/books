import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { StoreService } from 'src/shared/store/store.service';


@Component({
  selector: 'app-add-row',
  templateUrl: './add-row.component.html',
  styleUrls: ['./add-row.component.scss']
})
export class AddRowComponent implements OnInit {
  public logForm!: FormGroup;
  public submitted: boolean;
  public logs: any = [];
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(
  public dialogRef: MatDialogRef<AddRowComponent>,
  @Inject(MAT_DIALOG_DATA) data: any,
  public storeService: StoreService,
  public router: Router,
  public appRoot: AppComponent
  ) {
    this.logForm = new FormGroup({
      title: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      author_name: new FormControl('', Validators.required),
    });
    this.submitted = false;
  }
 

  ngOnInit(): void {
  }

   public add(formValue: any): void {
    this.submitted = true;
    if(formValue.title != "" && formValue.year !="" && formValue.author_name != "") {
      
     let val = {title: formValue.title, year: formValue.year.toString(), author_name: formValue.author_name}
      let arr = this.storeService.get(1);
      arr = [...arr];
      arr.push(val);
      this.storeService.set(1, arr);
      this.submitted = false;
      this.logForm.controls['title'].setValue('');
     this.logForm.controls['year'].setValue(0);
     this.logForm.controls['author_name'].setValue('');
    }
  }

  public yes(): void {  
    this.dialogRef.close();
  }

}
