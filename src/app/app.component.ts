import { Component } from '@angular/core';
import { UrlService } from './service/url/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'sniptech';
  public longUrl: string;
  public pattern = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
  public shortUrl: string;

  constructor(
    private urlService: UrlService
  ) { }

  shortenUrl() {
    this.urlService.postUrl(this.longUrl).subscribe(
      rsp => {
        console.log(rsp);
        this.shortUrl = rsp;
      },
      err => {
        console.log(err);
      }
    )
  }

  copyToClipBoard() {
    navigator.clipboard.writeText(`https://sniptech-be.herokuapp.com/${this.shortUrl}`).then().catch(e => console.error(e));
  }

}
