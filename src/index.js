import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import './themes/index.css';
import Label from './components/label';
import Icon from './components/icon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <>
        <Icon iconName={"facebook"} iconColor={"white"} iconBackgroundColor={"bg-dark-green"} iconSize={"big"} iconBordered={true}/>
        <Icon iconName={"instagram"} iconColor={"white"} iconBackgroundColor={"bg-dark-green"} iconSize={"big"} iconBordered={true}/>
        <Icon iconName={"youtube"} iconColor={"white"} iconBackgroundColor={"bg-dark-green"} iconSize={"big"} iconBordered={true}/>
        <Icon iconName={"mail outline"} iconColor={"white"} iconBackgroundColor={"bg-dark-green"} iconSize={"big"} iconBordered={true}/>
        <br/>
        <Label labelContent={"This is the Official Capybara Website"} />
    </>
);
