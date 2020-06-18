// class MyObject {
//     private items: Item[];
//     private total_count: number;
//     private incomplete_results: boolean;
//
//     constructor() {
//
//     }
//
//     get getItems(): Item[] {
//         return this.items;
//     }
//
//     get getTotalCount(): number {
//         return this.total_count;
//     }
//
//     get getIncompleteResults(): boolean {
//         return this.incomplete_results;
//     }
// }
//
// class Item {
//     name: string;
//
//     constructor(name: string
//     ) {
//         this.name = name;
//     }
// }
// httpGet('https://api.github.com/search/repositories?q=angular').then(
//     function (value) {
//         let listItems = new MyObject();
//         let object = JSON.parse(value);
//         listItems = object.items;
//         console.log(listItems)
//         appendItems(listItems);
//
//     },
//     function (reason) {
//         console.error('Something went wrong', reason);
//     }
// );
function httpGet(url) {
    // @ts-ignore
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.onload = function () {
            if (this.status === 200) {
                // Success
                resolve(this.response);
            }
            else {
                // Something went wrong (404 etc.)
                reject(new Error(this.statusText));
            }
        };
        request.onerror = function () {
            reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };
        request.open('GET', url);
        request.send();
    });
}
function search2() {
    let keyword = document.getElementById('search').value;
    console.log(keyword);
    let url = 'https://api.github.com/search/repositories?q=' + keyword;
    console.log(url);
    httpGet(url).then(function (value) {
        // let listItems = new MyObject();
        let object = JSON.parse(value);
        let listItems = object.items;
        appendItems(listItems);
    });
}
function appendItems(listItems) {
    var ul = document.getElementById("list");
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
    for (let i = 0; i < listItems.length; i++) {
        let li = document.createElement("li");
        let urlImg = listItems[i].owner.avatar_url;
        li.innerHTML = '<a  target="_blank" href="' + listItems[i].html_url + '">' + '<img class="avatar" src="' + urlImg + '"</img>' + listItems[i].html_url + '</a>';
        ul.append(li);
    }
}
