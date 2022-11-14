import React from 'react';
import ReactDOM from 'react-dom/client';
import Label from './components/label';
import Button from './components/button';
import 'semantic-ui-css/semantic.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Label labelContent={"This is the Capibara Oficial Website"}/>
        <Button className={"ui button"} content={"Option 1"}/>
    </>
    
);
