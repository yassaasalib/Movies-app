import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaSerice } from '../media.service'
import { MediaDetails } from '../models/mediaDetails';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['../../styles/index.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private mediaSerice: MediaSerice, private route: ActivatedRoute) { }

  details?: MediaDetails;
  mediaItems?: MediaDetails[];

  ngOnInit(): void {
    this.mediaSerice.details(1).subscribe(media => this.mediaItems = media.results);
    this.route.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.mediaSerice.details(id).subscribe(details => this.details = details);
    })
  }

}
