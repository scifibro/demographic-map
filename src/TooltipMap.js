import React from 'react';
import  SVGMap  from './SVGMap';
import { getLocationName } from './utils';
import Kazakhstan from "./Kazakhstan";
import './styles.css';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Addition from './components/Addition'	
import Scale from './components/Scale';
import Kazakhstan1 from './Kazakhstan1';



class TooltipMap extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pointedLocation: null,
			tooltipStyle: {
				display: 'none'
			}
		};

		this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
		this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
		this.handleLocationMouseMove = this.handleLocationMouseMove.bind(this);
	}

	handleLocationMouseOver(event) {
		const pointedLocation = getLocationName(event);
		this.setState({ pointedLocation });
	}

	handleLocationMouseOut() {
		this.setState({ pointedLocation: null, tooltipStyle: { display: 'none' } });
	}

	handleLocationMouseMove(event) {
		const tooltipStyle = {
			display: 'block',
			top: event.clientY + 10,
			left: event.clientX - 100
		};
		this.setState({ tooltipStyle });
	}

	getLocationClassName(location, index) {
		// Generate random heat map
		return `map-kaz__location--heat${index % 4}`;
	}

	render() {
		return (
			<article className="map-block">
				<h2 className="map-title">
					Demographic Map of Kazakhstan
				</h2>
                <div className = 'selector'>
					<AppBar position="static">
					<Tabs >
						<Tab label="Плотность населения  и этнический состав населения" data-id="11" data-rate ="ethnic"  />
						<Tab label="Процессы урбанизация населения" data-id='12' data-rate ="urban" />
						<Tab label="Поло-возрастная структура населения" data-id='13' data-rate ="age" />
						<Tab label="Воспроизводство населения" data-id='14' data-rate ="born" />
						<Tab label="Миграционные процессы населения" data-id ='15' data-rate ="migration" />
					</Tabs>
				    </AppBar>
				  
				</div>
				<div className = 'sub-selector'>

				</div>
				<div className = 'map' styles = {{height:'1000px'}}>
					<SVGMap
					    className = 'svg-map-kaz'
						map={Kazakhstan1}
						locationClassName={this.getLocationClassName}
						onLocationMouseOver={this.handleLocationMouseOver}
						onLocationMouseOut={this.handleLocationMouseOut}
						onLocationMouseMove={this.handleLocationMouseMove} />
					<div className="tooltip" style={this.state.tooltipStyle}>
						{this.state.pointedLocation}
					</div>
				</div>
				<div><Scale/></div>
				<div className = 'addition'><Addition/></div>
			</article>
		);
	}
}

export default TooltipMap;

