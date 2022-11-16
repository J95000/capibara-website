import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import './themes/index.css';
import Label from './components/label';
import Icon from './components/icon';
import Image from './components/image';
import Button from './components/button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <>
        <Icon iconName={"facebook"} iconColor={"white"} iconBackgroundColor={"bg-dark-green"} iconSize={"big"} iconBordered={true}/>
        <Icon iconName={"instagram"} iconColor={"white"} iconBackgroundColor={"bg-dark-green"} iconSize={"big"} iconBordered={true}/>
        <Icon iconName={"youtube"} iconColor={"white"} iconBackgroundColor={"bg-dark-green"} iconSize={"big"} iconBordered={true}/>
        <Icon iconName={"mail outline"} iconColor={"white"} iconBackgroundColor={"bg-dark-green"} iconSize={"big"} iconBordered={true}/>
        <br/>
        <br/>
        <Image imageHeight={"240px"} imageSrc={"https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"}/>
        <br/>
        <Label labelContent={"This is the Official Capybara Website"} />
        <br/>
        <Button className={"ui button"} content={"Option 1"} textColor={"#000000"} href={"https://www.google.es"}/>
    </>
);
