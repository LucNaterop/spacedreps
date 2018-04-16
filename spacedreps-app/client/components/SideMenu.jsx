import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import CardsList from './CardsList.jsx';
import AddCard from './AddCard.jsx';
import Login from './Login.jsx';

export default class SideMenu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			contentComponent: <CardsList navigator={this.props.navigator}/>,
			contentTitle: 'My Cards',
		}
	}

	componentDidUpdate() {
		// handle the showing of the login screen
		return;
		if(!localStorage.getItem('authToken')) {
			this.props.navigator.resetPage({
				'component': Login
			}, {'animation': 'lift'});
		}
	}

	hide() {
		this.setState({isOpen: false});
	}

	show() {
		this.setState({isOpen: true});
	}

	onClickAddCard() {
		this.props.navigator.pushPage({
			'component': AddCard
		}, {'animation': 'lift'})
	}

	renderToolbar() {
		if(localStorage.getItem('authToken')) 
			var menuButton = (
				<Ons.ToolbarButton onClick={this.show.bind(this)}>
					<Ons.Icon icon='ion-navicon, material:md-menu' />
				</Ons.ToolbarButton>
			);
		return (
			<Ons.Toolbar>
				<div className='left'>
					{menuButton}
				</div>
				<div className='center'>{this.state.contentTitle}</div>
				<div className='right'>
					<Ons.ToolbarButton onClick={this.onClickAddCard.bind(this)}>
						<Ons.Icon icon='ion-plus' />
					</Ons.ToolbarButton>
				</div>
			</Ons.Toolbar>
		);
	}

	render() {
		
		var sideMenuEntries = [
			{
				title: 'My Cards',
				component: <CardsList navigator={this.props.navigator}/>
			},
			{
				title: 'Profile',
				component: <Login navigator={this.props.navigator}/>
			},
		];
		var sideMenuListItems = sideMenuEntries.map(entry => { return (
			<Ons.ListItem 
				tappable
				key={entry.title} 
				onClick={() => {
					this.setState({
						'contentComponent': entry.component,
						'contentTitle': entry.title,
						'isOpen': false,
					});
				}} 
			>
				{entry.title}
			</Ons.ListItem>
		)});
		
		return (
			<Ons.Page>
				<Ons.Splitter>
			        <Ons.SplitterSide
			        	style={{boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}}
						side='left'
						width={250}
						collapse={true}
						swipeable={true}
						isOpen={this.state.isOpen}
						onClose={this.hide.bind(this)}
						onOpen={this.show.bind(this)}
			        >
			          <Ons.Page>
			            <Ons.List>
			            	{sideMenuListItems}
			            </Ons.List>
			          </Ons.Page>
			        </Ons.SplitterSide>
					<Ons.SplitterContent>
						<Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
							{this.state.contentComponent}
						</Ons.Page>
			        </Ons.SplitterContent>

				</Ons.Splitter>
			</Ons.Page>
		);
	}
}
