import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'practice1';

  @ViewChild('row') row!: ElementRef<HTMLElement>
  constructor(private translate: TranslateService) {
    this.addLanguage()



  }
  ngAfterViewInit(): void {
    console.log(this.row.nativeElement);
    if (localStorage.getItem('lang')?.includes('ar')) {

      this.row.nativeElement?.classList.add('flex-row-reverse')
    } else {

      this.row.nativeElement?.classList.remove('flex-row-reverse')

    }
  }
  languageArray: Array<string> = this.translate.getLangs();
  currentLanguage: string = this.translate.currentLang;

  addLanguage() {

    this.translate.addLangs([ 'en', 'ar' ])


    const lang = localStorage.getItem('lang')

    if (lang) {
      this.translate.setDefaultLang(lang);
    } else {
      this.translate.setDefaultLang('en');
    }
  }

  switchLanguage(language: string) {
    localStorage.setItem('lang', language)
    this.translate.use(language);
  }


  searchval !: any;
  panelOpenState = false;
  postform!: FormGroup
  dtOptions: DataTables.Settings = {};

  count: number = 1
  //dtTrigger: Subject<any> = new Subject<any>()

  ngOnInit(): void {
    this.postform = new FormGroup({

      // S/No: new FormControl(null, Validators.required),
      EstablishmentID: new FormControl(null, Validators.required),
      CRNumber: new FormControl(null, Validators.required),
      CustomsCode: new FormControl(null, Validators.required),
      Agencyname: new FormControl(null, Validators.required,),
      Status: new FormControl('', Validators.required),
      CreationDateFrom: new FormControl(null, Validators.required),
      ClearingAgencyType: new FormControl('', Validators.required),
      // CreationDateTo: new FormControl(null, Validators.required),

    })



    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      searching: true,
      lengthMenu: [ 5, 10, 15, 20 ]

    }
  }

  public data = [
    { Sno: 1, EstablishmentID: '12356784', CRNumber: '', CustomsCode: 'L2775', Agencyname: 'new ncm2', Status: 'pending Approval', CreationDate: '27/08/2023', ClearingAgencyType: 'Goverment' },
    { Sno: 2, EstablishmentID: '34555558', CRNumber: '', CustomsCode: 'L2775', Agencyname: 'new ncm2', Status: 'pending Approval', CreationDate: '27/08/2023', ClearingAgencyType: 'Goverment' },
    { Sno: 3, EstablishmentID: '32321324', CRNumber: '', CustomsCode: 'L2775', Agencyname: 'new ncm2', Status: 'pending Approval', CreationDate: '27/08/2023', ClearingAgencyType: 'Goverment' },
    { Sno: 4, EstablishmentID: '97876532', CRNumber: '', CustomsCode: 'L2775', Agencyname: 'new ncm2', Status: 'pending Approval', CreationDate: '27/08/2023', ClearingAgencyType: 'Goverment' },
    { Sno: 5, EstablishmentID: '37513751', CRNumber: '', CustomsCode: 'L2775', Agencyname: 'new ncm2', Status: 'pending Approval', CreationDate: '27/08/2023', ClearingAgencyType: 'Goverment' },

  ]


  Onpostformsearch() {
    console.log(this.postform.value)



  }

  onChangeLang(eve: Event) {
    // console.log(eve.target);
    let ele = <HTMLSelectElement>eve.target
    // console.log(ele.value);
    // if (ele.value === 'ar') {
    //   ele.closest('header')?.nextElementSibling?.classList.add('flex-row-reverse')
    // } else {
    //   ele.closest('header')?.nextElementSibling?.classList.remove('flex-row-reverse')

    // }


    ele.value === 'ar' ? ele.closest('header')?.nextElementSibling?.classList.add('flex-row-reverse') : ele.closest('header')?.nextElementSibling?.classList.remove('flex-row-reverse')

  }
  // onLangChange(eve: Event) {
  //   let ele = eve.target as HTMLButtonElement
  //   // flex-row-reverse
  //   // console.log(ele.closest('header')?.nextElementSibling);
  //   ele.closest('header')?.nextElementSibling?.classList.toggle('flex-row-reverse')
  // }
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



