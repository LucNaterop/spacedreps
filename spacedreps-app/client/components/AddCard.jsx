import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import MathJax from 'react-mathjax-preview'

export default class AddCard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			frontContent: '',
			backContent : '',
		}
	}

	onClose() {
		this.props.navigator.popPage();
	}

	renderToolbar() {
		var cardNumber = 42;
		return (
			<Ons.Toolbar>
				<div className='center'>Card Number {cardNumber}</div>
				<div className='right'>
					<Ons.ToolbarButton onClick={this.onClose.bind(this)}>
						<Ons.Icon icon='ion-close' />
					</Ons.ToolbarButton>
				</div>
			</Ons.Toolbar>
		);
	}

	renderPreview() {
		if(this.state.frontContent.length > 0)
			var frontMath = <MathJax math={this.state.frontContent} />;

		if(this.state.backContent.length > 0)
			var backMath = <MathJax math={this.state.backContent} />
		return (
			<div>
				<p> <b> Front Content </b> </p>
				{frontMath}
				<p> <b> Back Content </b> </p>
				{backMath}
			</div>
		);
	}

	onSave() {
		var that = this;
		var card = {
			'userId': localStorage.getItem('userId'),
			'number': Math.round(Math.random()*100),
			'frontContent': this.state.frontContent,
			'backContent': this.state.backContent,
			'repetitions': [new Date()],
			'repetitionCount': 0
		};

		Globals.authCall('POST',BaseAPI+'/cards',card,r => {
			ons.notification.toast('card saved 👏', {timeout: 2000});
			this.props.navigator.popPage();
		});
	}

	render() {
		return (
			<Ons.Page renderToolbar={this.renderToolbar.bind(this)} contentStyle={{padding: 20}}>
				<textarea 
					value={this.state.frontContent}
					onChange={(e) => {this.setState({'frontContent': e.target.value})}} 
					className="textarea" 
					rows="3" 
					placeholder="Card Front Content" 
					style={{width: '100%'}}>
				</textarea>
				<br /> <br />
				<textarea 
					value={this.state.backContent}
					onChange={(e) => {this.setState({'backContent': e.target.value})}} 
					className="textarea" 
					rows="5" 
					placeholder="Card Back Content" 
					style={{width: '100%'}}>
				</textarea>
				<h2>Preview</h2>
				{this.renderPreview()}
				<br />
				<br />
				<Ons.Button onClick={this.onSave.bind(this)}> Save card </Ons.Button>
			</Ons.Page>
		);
	}
}
