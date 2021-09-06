import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from 'src/app/service/url/url.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  public showError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private urlService: UrlService,
  ) { }

  ngOnInit(): void {
    const shortUrl = this.route.snapshot.url[0].path;

    this.urlService.getUrl(shortUrl).subscribe(
      rsp => {
        if (rsp === undefined) {
          this.showError = true;
        }
        this.redirect(rsp);
      },
      err => {
        console.error(err);
        this.showError = true;
      }
    );
  }

  redirect(url: string) {
    window.location.href = this.validateUrl(url);
  }

  validateUrl(str: string) {
    var url = str;
    if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
      return str;
    }

    return "http://" + str;
  }

}
