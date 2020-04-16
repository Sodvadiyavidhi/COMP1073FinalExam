// JavaScript Document
//the details of the item is grabbed from the given link below using the XML HTTP request.
		var requestURL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';
		var request = new XMLHttpRequest();
		request.open('GET', requestURL);
		request.responseType = 'json';
		request.send();
		request.onload= function() {
			var catDetail = request.response;
            //the detail is displayed in the console window.
			console.log(catDetail);
			cats(catDetail);
		};
// an onclick event is added using the eventlistener which uses the cat function to display.
let submit=document.querySelector('button');
submit.addEventListener(onclick,function(cats));
    //a function is created that stores the json object
		function cats(jsonObj){
			let cats = jsonObj.cats;
			//new elements are created where the detail is stored.
			for (let i = 0; i < cats.length; i++) {
				let article = document.createElement('article');
				let h2 = document.createElement('h2');
				let img = document.createElement('img');
				let p1 = document.createElement('p');
				let p2 = document.createElement('p');
				let list = document.createElement('ul');
        let section = document.querySelector('section');
                //images are extracted using the below link.
				img.setAttribute('src', 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/assets' + cats[i].image);
				img.setAttribute('alt', cats[i].name);
                //information is extracted from the json file.
				h2.textContent = cats[i].name;
				p1.textContent = 'Species: ' +
        cats[i].species;
				p2.textContent = 'Age: ' + cats[i].age;
				let favFoods = cats[i].favFoods;
				for (let j = 0; j < favFoods.length; j++) {
					let listItem = document.createElement('li');
					listItem.textContent = favFoods[j];
					list.appendChild(listItem);
				}
                //all elements are appended to article and then the article is appended to section element in the html page
				article.appendChild(img);
				article.appendChild(h2);
				article.appendChild(p1);
				article.appendChild(p2);
				article.appendChild(list);
				section.appendChild(article);
				}
			}