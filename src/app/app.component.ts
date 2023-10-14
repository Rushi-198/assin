

import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent implements OnInit {
  title = 'practice1';
  languageArray: Array<string> = this.translate.getLangs();
  currentLanguage: string = this.translate.currentLang;
  lang: any

  @ViewChild('row') row!: ElementRef<HTMLElement>

  constructor(
    private translate: TranslateService
  ) { }


  ngOnInit(): void {
    this.addLanguage()

    this.postform = new FormGroup({
      EstablishmentID: new FormControl(null, Validators.required),
      CRNumber: new FormControl(null, Validators.required),
      CustomsCode: new FormControl(null, Validators.required),
      Agencyname: new FormControl(null, Validators.required,),
      Status: new FormControl('', Validators.required),
      CreationDateFrom: new FormControl(null, Validators.required),
      ClearingAgencyType: new FormControl('', Validators.required),
    })


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      searching: true,
      lengthMenu: [ 5, 10, 15, 20 ]

    }
  }




  addLanguage() {

    this.translate.addLangs([ 'en', 'ar' ])
    this.lang = localStorage.getItem('lang')

    if (this.lang) {
      this.translate.setDefaultLang(this.lang);
      this.currentLanguage = this.lang
    } else {
      this.translate.setDefaultLang('en');
    }
  }


  switchLanguage(language: string) {
    localStorage.setItem('lang', language)
    this.translate.use(language);
    this.lang = language
  }


  searchval !: any;
  panelOpenState = false;
  postform!: FormGroup
  dtOptions: DataTables.Settings = {};

  count: number = 1
  //dtTrigger: Subject<any> = new Subject<any>()


  public data = [
    { Sno: 1, EstablishmentID: '12356784', CRNumber: '', CustomsCode: 'L2775', Agencyname: 'new ncm2', Status: 'pending Approval', CreationDate: '27/08/2023', ClearingAgencyType: 'Goverment' },
    { Sno: 2, EstablishmentID: '34555558', CRNumber: '', CustomsCode: 'L2774', Agencyname: 'angular FZc', Status: 'Rejected', CreationDate: '27/08/2023', ClearingAgencyType: 'Private' },
    { Sno: 3, EstablishmentID: '32321324', CRNumber: '', CustomsCode: 'L2770', Agencyname: 'non gov', Status: 'pending Approval', CreationDate: '25/08/2023', ClearingAgencyType: 'Private' },
    { Sno: 4, EstablishmentID: '97876532', CRNumber: '', CustomsCode: 'L2769', Agencyname: 'new ncm legacy', Status: 'pending Approval', CreationDate: '24/08/2023', ClearingAgencyType: 'Goverment' },
    { Sno: 5, EstablishmentID: '37513751', CRNumber: '188433', CustomsCode: 'L2751', Agencyname: 'Abu Sukun 81', Status: 'pending Approval', CreationDate: '30/08/2023', ClearingAgencyType: 'Public' },

  ]


  Onpostformsearch() {
    if (this.postform.valid) {
      console.log(this.postform.value)
    }
  }


  increaseCount() {
    if (this.count < 71) {
      this.count++
    }
  }


  decreaseCount() {
    if (this.count > 1) {
      this.count--
    }

  }

  Ongo() {
    console.log('click')
  }
}