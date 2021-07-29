import React from 'react';
/* import "./styles.css"; je trouve toujour un probleme si j'importe le fichier css, en faite ca n'a pas marcher meme si je veux importer un image dans le src, baaaah donc j'ai proceder in ligne pour le style de l'image  */


export default function ProfilePhoto() {
    return (
        <div>
            <img className="photo" src= "https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/48378962_10214153539572591_2675782544011558912_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=nCoSiQNPnXIAX8qu8dq&_nc_ht=scontent.ftun16-1.fna&oh=4477db8652160e4239cf303fb16b0bb4&oe=6127FE7F" alt="waelphoto"  style= {{height: 700,  width: 550}} />
        </div>
    )
}
