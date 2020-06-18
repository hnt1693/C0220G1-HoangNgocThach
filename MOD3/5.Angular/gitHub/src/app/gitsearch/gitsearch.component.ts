import {Component, OnInit} from '@angular/core';

// tslint:disable-next-line:class-name
@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  public keyword: string;
  public listItems: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  inputChange(value: string) {
    this.keyword = value;
  }

  search2() {
    const url = 'https://api.github.com/search/repositories?q=' + this.keyword;
    console.log(url);
    let myObject: any;
    httpGet(url).then((value) => {
      myObject = JSON.parse(value);
      console.log(myObject);
      this.listItems = myObject.items;
    });
  }

}


function httpGet(url: string): Promise<any> {
  // @ts-ignore
  // tslint:disable-next-line:only-arrow-functions
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    request.onload = function() {
      if (this.status === 200) {
        // Success
        resolve(this.response);
      } else {
        // Something went wrong (404 etc.)
        reject(new Error(this.statusText));
      }
    };
    request.onerror = function() {
      reject(new Error('XMLHttpRequest Error: ' + this.statusText));
    };
    request.open('GET', url);
    request.send();
  });
}

// function search2() {
//   const keyword = (document.getElementById('keyword') as HTMLInputElement).value;
//   console.log(keyword);
//   const url = 'https://api.github.com/search/repositories?q=' + keyword;
//   console.log(url);
//   // tslint:disable-next-line:only-arrow-functions
//   httpGet(url).then(function(value) {
//     // let listItems = new MyObject();
//     const object = JSON.parse(value);
//     this.listItems = object.items;
//
//   });
//
// }

// function appendItems(listItems) {
//   const ul = document.getElementById('list');
//   while (ul.hasChildNodes()) {
//     ul.removeChild(ul.firstChild);
//   }
//   // tslint:disable-next-line:prefer-for-of
//   for (let i = 0; i < listItems.length; i++) {
//     const li = document.createElement('li');
//     const urlImg = listItems[i].owner.avatar_url;
//     // tslint:disable-next-line:max-line-length
//     li.innerHTML = '<a  target="_blank" href="' + listItems[i].html_url + '">' + '<img class="avatar"  src="' + urlImg + '"</img>' + listItems[i].html_url + '</a>';
//     ul.append(li);
//   }
// }
