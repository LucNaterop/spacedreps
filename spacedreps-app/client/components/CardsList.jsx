import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import MathJax from 'react-mathjax';
import moment from 'moment';

import Card from './Card.jsx';
import forgetCurve from '../util/forgetCurve.js';



class ListItem extends React.Component {

	onOpenCard() {
		this.props.navigator.pushPage({
			'component': Card,
			'props': {
				card: this.props.card
			}
		}, {animation: 'slide'})
	}

	getPercentage() {
		var lastRepetition = this.props.card.repetitions[this.props.card.repetitions.length-1];
		var f = forgetCurve(this.props.card.repetitions);
		var dt = new Date() - lastRepetition;
		dt = dt/(1000*3600);
		return Math.round(f(dt)*100);
	}

	render() {
		var card = this.props.card;
		if(card.repetitions.length == 1) var lastRepetition = 'never';
		else var lastRepetition = moment(card.repetitions[card.repetitions.length-1]).fromNow();
		return (
			<Ons.ListItem tappable key={card._id} onClick={this.onOpenCard.bind(this)}>
				<div className="list-item__left" style={{fontSize: 20, color: '#ccc'}}>
					{this.getPercentage()}%
				</div>
		        <div className="center">
					<div className="list-item__title">
						{card.frontContent}
					</div>
					<div className="list-item__subtitle">
						last repetition: {lastRepetition}
					</div>
		        </div>
			</Ons.ListItem>
		);
	}

}

class CardsList extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			'searchInput': ''
		}
	}

	renderSearchBar() {
		var classes = 'search-input';
		if(ons.platform.isAndroid()) classes += ' search-input--material'
		return (
			<Ons.ListItem>
				<input 
					type="search" 
					value={this.state.searchInput}
					placeholder="Search" 
					className={classes}
					style={{ width: '100%'}} 
					onChange={(e) => {this.setState({searchInput: e.target.value})}}
				/>
			</Ons.ListItem>
		);
	}

	render() {
		var that = this;
		var listItems = this.props.cards.filter(function(card) {
			if(card.frontContent.toLowerCase().indexOf(that.state.searchInput.toLowerCase()) > -1) return true;
			return false;
		});
		listItems = listItems.map(card => <ListItem card={card} key={card._id} navigator={this.props.navigator} />)
		return (
			<Ons.Page>
				<Ons.List>
					{this.renderSearchBar()}
			        {listItems}
		        </Ons.List>
			</Ons.Page>
		);	
	}

}


export default createContainer(() => {
	return {
		cards: Cards.find({userId: Meteor.userId()}).fetch()
	};
}, CardsList);