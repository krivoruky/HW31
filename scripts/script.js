const navBtnElem = document.querySelector('.nav-btn');
const menuElem = document.querySelector('.menu');
const navBtnLine = document.querySelector('.nav-btn-line')


navBtnElem.addEventListener('click', ()=>{
	menuElem.classList.toggle('active');
	navBtnLine.classList.toggle('active');
});

const pointsArr = document.querySelectorAll('.menu ul li');
const pageArr = document.querySelectorAll('.page');


const galleryElem = document.querySelector('#gallery');
const objList = [
	{
		text: 'Бухгалтерские услуги в Санкт-Петербурге 1',
		img: '1.png',
	},
	{
		text: 'Бухгалтерские услуги в Санкт-Петербурге 2',
		img: '2.png',
	},
	{
		text: 'Бухгалтерские услуги в Санкт-Петербурге 3',
		img: '3.png',
	},
	{
		text: 'Бухгалтерские услуги в Санкт-Петербурге 4',
		img: '4.png',
	}
];
const mediaPath = 'media/';
let imgIndex = 0;

const slider_container = document.createElement('div');
const slider_main = document.createElement('div');
const slider_film = document.createElement('div');
const slider_trigger = document.createElement('div');

const slider_trigger_left = document.createElement('div');
const slider_trigger_right = document.createElement('div');
slider_trigger_left.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
slider_trigger_right.innerHTML = '<i class="fa-solid fa-angle-right"></i>';

slider_container.classList.add('slider-container');
slider_main.classList.add('slider-main');
slider_trigger.classList.add('slider-trigger');
slider_film.classList.add('slider-film');

slider_trigger.append(slider_trigger_left, slider_trigger_right);

slider_main.append(slider_film, slider_trigger);
slider_container.append(slider_main);
galleryElem.append(slider_container);

const film_elems = objList.map(obj=>{
	const slider_width = slider_container.offsetWidth;
	const divElem = document.createElement('div');
	divElem.style.width = slider_width + 'px';
	divElem.style.backgroundImage = `url('${mediaPath+obj.img}')`;

	const h2Elem = document.createElement('h2');
	const btnElem = document.createElement('button');
	const contentElem = document.createElement('div');

	h2Elem.innerText = obj.text;
	btnElem.innerText = 'Наша презентация';
	
	h2Elem.classList.add('h2-header');
	btnElem.classList.add('btn-header');
	contentElem.classList.add('content-header')

	contentElem.append(h2Elem, btnElem);
	divElem.append(contentElem);
	return divElem;
});

const render = ()=>{
	const slider_width = slider_container.offsetWidth;
	slider_film.style.right = slider_width * imgIndex + 'px';

	const liList = document.querySelectorAll('.slider-points li');
	liList.forEach(t=>t.classList.remove('active'));
	liList[imgIndex].classList.add('active');
};

const changeSize = ()=>{
	const slider_width = slider_container.offsetWidth;
	slider_film.style.width = slider_width * objList.length + 'px';
	film_elems.forEach(elem => elem.style.width = slider_width + 'px');
	render();
};

window.addEventListener('resize', changeSize);

slider_film.append(...film_elems);

slider_trigger_left.addEventListener('click', ()=>{
	if(imgIndex > 0){
		imgIndex--;
	}else{
		imgIndex = objList.length - 1;
	};
	render();
});

slider_trigger_right.addEventListener('click', ()=>{
	if(objList.length - 1 > imgIndex){
		imgIndex++;
	}else{
		imgIndex = 0;
	};
	render();
});

const ulElem = document.createElement('ul');
ulElem.classList.add('slider-points');

ulElem.append(...objList.map((_, index)=>{
	const elem = document.createElement('li');
	elem.addEventListener('click', event=>{
		const liElem = event.target;
		const liList = [...liElem.parentNode.children];
		imgIndex = liList.indexOf(liElem);
		render();
	});
	return elem;
}));

slider_container.append(ulElem);

render()
changeSize();

const galleryClientsElem = document.querySelector('#gallery-clients');
const imgList = ['visa.png', 'lukoil.png', 'msi.png', 'MTS.png'];
let clientsIndex = 0;

const client_container = document.createElement('div');
const client_main = document.createElement('div');
const client_film = document.createElement('div');
const client_trigger = document.createElement('div');

const client_trigger_left = document.createElement('div');
const client_trigger_right = document.createElement('div');
client_trigger_left.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
client_trigger_right.innerHTML = '<i class="fa-solid fa-angle-right"></i>';

client_container.classList.add('client-container');
client_main.classList.add('client-main');
client_trigger.classList.add('client-trigger');
client_film.classList.add('client-film');

client_trigger.append(client_trigger_left, client_trigger_right);

client_main.append(client_film, client_trigger);
client_container.append(client_main);
galleryClientsElem.append(client_container);

const client_elems = imgList.map(list=>{
	const client_width = client_container.offsetWidth;
	const divElem = document.createElement('div');
	divElem.style.width = '280' + 'px';
	divElem.style.backgroundImage = `url('${mediaPath+list}')`;
	return divElem;
});

const renderClient = ()=>{
	const client_width = client_container.offsetWidth;
	if(client_width >= 1200){
		client_film.style.right = client_width/4 * clientsIndex + 'px';
	}else if(client_width < 1200 && client_width > 850){
		client_film.style.right = client_width/3 * clientsIndex + 'px';
	}else if(client_width < 850 && client_width > 600){
		client_film.style.right = client_width/2 * clientsIndex + 'px';
	}else{
		client_film.style.right = client_width/1 * clientsIndex + 'px';
	};
	const liList = document.querySelectorAll('.client-points li');
	liList.forEach(t=>t.classList.remove('activeClient'));
	liList[clientsIndex].classList.add('activeClient');
};

const changeSizeClient = ()=>{
	const client_width = client_container.offsetWidth;
	if(client_width >= 1200){
		client_film.style.width = client_width/4 * imgList.length + 'px';
	}else if(client_width < 1200 && client_width > 850){
		client_film.style.width = client_width/3 * imgList.length + 'px';
	}else if(client_width < 850 && client_width > 600){
		client_film.style.width = client_width/2 * imgList.length + 'px';
	}else{
		client_film.style.width = client_width/1 * imgList.length + 'px';
	};
	client_elems.forEach(elem => elem.style.width = '280' + 'px');
	renderClient();
};

window.addEventListener('resize', changeSizeClient);

client_film.append(...client_elems);

client_trigger_left.addEventListener('click', ()=>{
	if(clientsIndex > 0){
		clientsIndex--;
	}else{
		clientsIndex = imgList.length - 1;
	};
	renderClient();
});

client_trigger_right.addEventListener('click', ()=>{
	if(imgList.length - 1 > clientsIndex){
		clientsIndex++;
	}else{
		clientsIndex = 0;
	};
	renderClient();
});

const ulClient = document.createElement('ul');
ulClient.classList.add('client-points');

ulClient.append(...imgList.map((_, index)=>{
	const elem = document.createElement('li');
	elem.addEventListener('click', event=>{
		const liElem = event.target;
		const liList = [...liElem.parentNode.children];
		clientsIndex = liList.indexOf(liElem);
		renderClient();
	});
	return elem;
}));

client_container.append(ulClient);

renderClient()
changeSizeClient();

const galleryfeedbackElem = document.querySelector('#gallery-feedback');
const objFb = [
	{
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
		img: 'human.png',
		name: 'Екатерина Иванова',
		company: 'Директор ООО “Раз-два”',
	},
	{
		text: 'С учётом сложившейся международной обстановки, базовый вектор развития в значительной степени обусловливает важность благоприятных перспектив! Прежде всего, сплочённость команды профессионалов требует от нас анализа поставленных обществом задач.',
		img: 'human.png',
		name: 'Надежда Геннадьевна',
		company: 'Директор АО “ММЗ”',
	},
	{
		text: 'Приятно, граждане, наблюдать, как интерактивные прототипы могут быть объективно рассмотрены соответствующими инстанциями. Приятно, граждане, наблюдать, как предприниматели в сети интернет формируют глобальную экономическую сеть и при этом - объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что многие известные личности обнародованы! Приятно, граждане, наблюдать, как базовые сценарии поведения пользователей будут ограничены исключительно образом мышления!',
		img: 'human.png',
		name: 'Вера Анатольевна',
		company: 'Директор ООО “ВАЛТЕХ”',
	},
	{
		text: 'Таким образом, консультация с широким активом напрямую зависит от как самодостаточных, так и внешне зависимых концептуальных решений. Равным образом, семантический разбор внешних противодействий способствует подготовке и реализации новых принципов формирования материально-технической и кадровой базы. Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира в равной степени предоставлены сами себе.',
		img: 'human.png',
		name: 'Арина Станиславовна',
		company: 'Директор АО “ОГО”',
	}
];
let feedbackIndex = 0;

const feedback_container = document.createElement('div');
const feedback_main = document.createElement('div');
const feedback_film = document.createElement('div');
const feedback_trigger = document.createElement('div');

const feedback_trigger_left = document.createElement('div');
const feedback_trigger_right = document.createElement('div');
feedback_trigger_left.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
feedback_trigger_right.innerHTML = '<i class="fa-solid fa-angle-right"></i>';

feedback_container.classList.add('feedback-container');
feedback_main.classList.add('feedback-main');
feedback_trigger.classList.add('feedback-trigger');
feedback_film.classList.add('feedback-film');

feedback_trigger.append(feedback_trigger_left, feedback_trigger_right);

feedback_main.append(feedback_film, feedback_trigger);
feedback_container.append(feedback_main);
galleryfeedbackElem.append(feedback_container);

const feedback_elems = objFb.map(obj=>{
	const feedback_width = feedback_container.offsetWidth;
	const divElem = document.createElement('div');
	divElem.style.width = feedback_width + 'px';
	divElem.style.backgroundColor = `#EBEBEB`;

	const contentElem = document.createElement('div');
	const pElem = document.createElement('p');
	const humanElem = document.createElement('div');
	const humanImg = document.createElement('div');
	const humanText = document.createElement('div');
	const humanName = document.createElement('h5');
	const humanСompany = document.createElement('p');


	pElem.innerText = obj.text;
	humanImg.style.backgroundImage = `url('${mediaPath+obj.img}')`;
	humanName.innerText = obj.name;
	humanСompany.innerText = obj.company;
	
	contentElem.classList.add('content-feedback')
	pElem.classList.add('p-feedback');
	humanElem.classList.add('human');
	humanImg.classList.add('humanImg');
	humanText.classList.add('humanText');
	humanName.classList.add('humanName');
	humanСompany.classList.add('humanСompany');

	humanText.append(humanName, humanСompany);
	humanElem.append(humanImg, humanText);
	contentElem.append(pElem, humanElem);
	divElem.append(contentElem);
	return divElem;
});

const renderFeedback = ()=>{
	const feedback_width = feedback_container.offsetWidth;
	feedback_film.style.right = feedback_width * feedbackIndex + 'px';

	const liList = document.querySelectorAll('.feedback-points li');
	liList.forEach(t=>t.classList.remove('active'));
	liList[feedbackIndex].classList.add('active');
};

const changeSizeFeedback = ()=>{
	const feedback_width = feedback_container.offsetWidth;
	feedback_film.style.width = feedback_width * objFb.length + 'px';
	feedback_elems.forEach(elem => elem.style.width = feedback_width + 'px');
	renderFeedback();
};

window.addEventListener('resize', changeSizeFeedback);

feedback_film.append(...feedback_elems);

feedback_trigger_left.addEventListener('click', ()=>{
	if(feedbackIndex > 0){
		feedbackIndex--;
	}else{
		feedbackIndex = objFb.length - 1;
	};
	renderFeedback();
});

feedback_trigger_right.addEventListener('click', ()=>{
	if(objFb.length - 1 > feedbackIndex){
		feedbackIndex++;
	}else{
		feedbackIndex = 0;
	};
	renderFeedback();
});

const ulFeedback = document.createElement('ul');
ulFeedback.classList.add('feedback-points');

ulFeedback.append(...objFb.map((_, index)=>{
	const elem = document.createElement('li');
	elem.addEventListener('click', event=>{
		const liElem = event.target;
		const liList = [...liElem.parentNode.children];
		feedbackIndex = liList.indexOf(liElem);
		renderFeedback();
	});
	return elem;
}));

feedback_container.append(ulFeedback);

renderFeedback()
changeSizeFeedback();

