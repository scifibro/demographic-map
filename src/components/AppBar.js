import React from 'reacrt'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const AppBar = () => {
    return (<div className='selector'>
        <AppBar position="static">
            <Tabs >
                <Tab label="Плотность населения  и этнический состав населения" data-id="11" data-rate="ethnic" />
                <Tab label="Процессы урбанизация населения" data-id='12' data-rate="urban" />
                <Tab label="Поло-возрастная структура населения" data-id='13' data-rate="age" />
                <Tab label="Воспроизводство населения" data-id='14' data-rate="born" />
                <Tab label="Миграционные процессы населения" data-id='15' data-rate="migration" />
            </Tabs>
        </AppBar>
     </div>)}

export default AppBar