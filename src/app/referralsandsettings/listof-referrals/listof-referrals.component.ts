import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listof-referrals',
  templateUrl: './listof-referrals.component.html',
  styleUrls: ['./listof-referrals.component.css']
})
export class ListofReferralsComponent implements OnInit {


  term: string = "";
  p: number = 1;



  Referrals: any[] = [
    { No: 1, Photo: "Umair", Name: "Naiful Islam", ReferralId: "DF3324625", TotalReferrals: "1267", Referralsearnings: "$150.00" },
    { No: 1, Photo: "Nafiul Islam", Name: "Naiful Islam", ReferralId: "DF3324625", TotalReferrals: "1267", Referralsearnings: "$150.00" },
    { No: 1, Photo: "Nafiul Islam", Name: "Naiful Islam", ReferralId: "DF3324625", TotalReferrals: "1267", Referralsearnings: "$150.00" },
    { No: 1, Photo: "Taimoor Islam", Name: "Naiful Islam", ReferralId: "DF3324625", TotalReferrals: "1267", Referralsearnings: "$150.00" },
    { No: 1, Photo: "Nafiul Islam", Name: "Naiful Islam", ReferralId: "DF3324625", TotalReferrals: "1267", Referralsearnings: "$150.00" },
    { No: 1, Photo: "Nafiul Islam", Name: "Naiful Islam", ReferralId: "DF3324625", TotalReferrals: "1267", Referralsearnings: "$150.00" },
    { No: 1, Photo: "Nafiul Islam", Name: "Naiful Islam", ReferralId: "DF3324625", TotalReferrals: "1267", Referralsearnings: "$150.00" },
    { No: 1, Photo: "Nafiul Islam", Name: "Naiful Islam", ReferralId: "DF3324625", TotalReferrals: "1267", Referralsearnings: "$150.00" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
