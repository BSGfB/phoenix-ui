import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-submit-description',
  templateUrl: './submit-description.component.html',
  styleUrls: ['./submit-description.component.css']
})
export class SubmitDescriptionComponent implements OnInit, OnChanges {

  @Input() public commonCategories;
  @Input() public photosWithCategories;
  @Output() public isValid = new EventEmitter();

  public activeCommonCategoryId: number;
  public activeCategoryId: number;
  public topResults = [];

  public form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      type: new FormControl('', [
        Validators.required
      ]),
      categoryId: new FormControl('', [
        Validators.required
      ]),
      rubles: new FormControl('', [
        Validators.required,
        Validators.min(0)
      ]),
      pennies: new FormControl('', [
        Validators.required,
        Validators.min(0)
      ])
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  get categories() {
    return this.commonCategories.find(commonCategory => commonCategory.id === this.activeCommonCategoryId).categories;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.photosWithCategories.length > 0) {
      this.topResults = this.findTopResults(this.photosWithCategories, 3);
      this.setUpCategory(this.topResults[0][0]);
    }
  }

  private findCommonCategoryByCategory(categoryName) {
    return this.commonCategories.find(v => v.categories.find(c => c.name.toUpperCase() === categoryName.toUpperCase()) !== undefined);
  }

  public setUpCategory(categoryName) {
    console.log(categoryName);
    const mostCommonCategory = this.findCommonCategoryByCategory(categoryName);
    this.activeCommonCategoryId = mostCommonCategory.id;
    this.form.get('categoryId').setValue(mostCommonCategory.categories.find(v => v.name.toUpperCase() === categoryName.toUpperCase()).id);
  }

  private findTopResults(array, topNumber) {
    const tops = array
      .reduce((out, item) => out.concat(this.objectToEntries(item)), [])
      .reduce((totals, p) => ({...totals, [p[0]]: (totals[p[0]] || 0.0) + parseFloat(p[1])}), {});
    return Object.entries(tops)
      .sort((a, b) => a[1] < b[1] ? 1 : (b[1] < a[1] ? -1 : 0))
      .slice(0, topNumber);
  }

  private objectToEntries(obj) {
    return Object.entries(obj).map(value => [value[0].replace('_', ' '), parseFloat(value[1])]);
  }

  public onSubmit() {
    this.isValid.emit({isValid: this.form.valid, body: this.form.getRawValue()});
  }
}
