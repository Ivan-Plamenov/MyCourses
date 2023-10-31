/* eslint-disable import/extensions */
/* eslint-disable import/no-relative-packages */
import { html, render } from '../node_modules/lit-html/lit-html.js';
import towns from './towns.js';

const button = document.querySelector('button');
const input = document.getElementById('searchText');
const result = document.getElementById('result');
const root = document.getElementById('towns');

const template = (data, srch = '') => html`
	<ul>
		${data.map((el) =>
			el.includes(srch)
				? html`<li class="active">${el}</li>`
				: html`<li>${el}</li>`
		)};
	</ul>
`;

render(template(towns), root);
button.addEventListener('click', () => {
	render(template(towns, input.value), root);
	result.textContent = `${
		document.getElementsByClassName('active').length
	} matches found`;
});
