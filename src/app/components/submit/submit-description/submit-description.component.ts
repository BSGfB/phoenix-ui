import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-submit-description',
  templateUrl: './submit-description.component.html',
  styleUrls: ['./submit-description.component.css']
})
export class SubmitDescriptionComponent implements OnInit, OnChanges {

  @Input() public commonCategories;
  @Input() public photosWithCategories;

  public activeCommonCategoryId: number;
  public activeCategoryId: number;

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
    const theMost = this.photosWithCategories
      .map(v => this.findMax(v))
      .reduce((totals, p) => ({...totals, [p[0]]: (totals[p[0]] || 0.0) + parseFloat(p[1])}), {});

    console.log(theMost);
    const mostCategoryName = this.findMax(theMost)[0];
    const mostCommonCategory = this.findCommonCategoryByCategory(mostCategoryName);
    this.activeCommonCategoryId = mostCommonCategory.id;
    this.form.get('categoryId').setValue(mostCommonCategory.categories.find(v => v.name.toUpperCase() === mostCategoryName.toUpperCase()).id);
  }

  private findCommonCategoryByCategory(categoryName) {
    return this.commonCategories.find(v => v.categories.find(c => c.name.toUpperCase() === categoryName.toUpperCase()) !== undefined);
  }

  private findMax(obj: any) {
    const entries = Object.entries(obj);
    return entries.reduce((max, v) => max[1] >= v[1] ? max : v, entries[0]);
  }
}
