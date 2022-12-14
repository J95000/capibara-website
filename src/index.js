import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import './themes/index.css';
import Label from './components/label';
import Icon from './components/icon';
import Image from './components/image';
import Paragraph from './components/paragraph';
import Button from './components/button';
import Carousel from './components/carousel';
import Card from './components/card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Icon iconName={"facebook"} iconColor={"white"} iconBackgroundColor={"bg-dark-green"} iconSize={"big"} iconBordered={true} iconHref={"https://www.facebook.com/NGG.com.bo"}/>
        <Icon iconName={"instagram"} iconColor={"white"} iconBackgroundColor={"bg-dark-green"} iconSize={"big"} iconBordered={true} iconHref={"https://www.instagram.com/capybara.tech/"}/>
        <Icon iconName={"youtube"} iconColor={"white"} iconBackgroundColor={"bg-dark-green"} iconSize={"big"} iconBordered={true} iconHref={"https://www.youtube.com/irizam"}/>
        <Icon iconName={"mail outline"} iconColor={"white"} iconBackgroundColor={"bg-dark-green"} iconSize={"big"} iconBordered={true} iconHref={"mailto:capybaratechcbba@gmail.com"}/>
        <Icon iconName={"checkmark"} iconColor={"white"} iconBackgroundColor={"bg-gradient-green"} iconSize={"big"} iconBordered={true}/>
        <br/>
        <br/>
        <Image imageHeight={"240px"} imageSrc={"https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"}/>
        <br/>
        <Label labelContent={"This is the Official Capybara Website"} />
        <br/>
        <br/>
        <Paragraph paragraphTextAlign={"justified"} paragraphContent={
            `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.`
        }/>
        <br/>
        <Button className={"ui button"} content={"Option 1"} textColor={"#000000"} href={"https://www.google.es"}/>
        <br/>
        <Carousel carouselMessages={
            {
                carouselMessages:[
                    {
                        message:"Capibaras",
                        description:"Son capibaras",
                        image:{
                            imageClassName:"d-block w-100",
                            imageHeight:"100%",
                            imageSrc:"https://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_capybara.jpg",
                            imageAlt:"First slide"
                        }
                    },
                    {
                        message:"Mas Capibaras",
                        description:"Son mas capibaras",
                        image:{
                            imageClassName:"d-block w-100",
                            imageHeight:"100%",
                            imageSrc:"https://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_capybara.jpg",
                            imageAlt:"Second slide"
                        }
                    }
                ]
            }
        }/>
        <br/>
        <Card content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} image={<Image imageSrc={"https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"}/>}/>
    </>
);
