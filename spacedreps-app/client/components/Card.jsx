import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import MathJax from 'react-mathjax-preview'

import ReactCardFlip from 'react-card-flip';
import forgetCurve from '../util/forgetCurve.js';

export default class Card extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isFlipped: false
		}
	}

	renderToolbar() {
		return (
			<Ons.Toolbar>
				<div className="left">
					<Ons.BackButton>Back</Ons.BackButton>
				</div>
				<div className="center">Card</div>
			</Ons.Toolbar>
		);
	}

	onFlip() {
		this.setState({'isFlipped': !this.state.isFlipped}, function() {
			if(this.state.isFlipped){
				Cards.update({'_id': this.props.card._id}, {$push: {repetitions: new Date()}});
			}
		})	
	}

	onDelete() {
		var that = this;
		Cards.remove(this.props.card._id, function() {
			that.props.navigator.popPage();
			ons.notification.toast('card deleted', {timeout: 2000});
		})
	}

	render() {
		var f = forgetCurve(this.props.card.repetitions);
		return (
			<Ons.Page renderToolbar={this.renderToolbar.bind(this)} >
				<div onClick={this.onFlip.bind(this)}>
					<ReactCardFlip isFlipped={this.state.isFlipped} >
						<Ons.Card key="front" style={{height: 400}}>
							<h1 className="card__title" style={{textAlign: 'center', 'color': '#ccc', fontSize: 40}}>
								#{this.props.card.number}
							</h1>
							<MathJax math={this.props.card.frontContent} />
						</Ons.Card>

						<Ons.Card key="back" style={{height: 400}}>
							<MathJax math={this.props.card.backContent} />
						</Ons.Card>
					</ReactCardFlip>
				</div>
				<div style={{marginTop: 420, textAlign: 'center'}}>
					<Ons.Button modifier="quiet" onClick={this.onDelete.bind(this)}>
						<Ons.Icon size={30} icon="ion-trash-b" /> Delete
					</Ons.Button>
					<Ons.Button modifier="quiet" style={{marginLeft: 20}} onClick={() => {ons.notification.toast('TODO', {timeout: 500})}}>
						<Ons.Icon size={30} icon="ion-edit" /> Edit
					</Ons.Button>
				</div>
			</Ons.Page>
		);
	}
}
