/******************************Eventos*************************************/
/*en el mismo nivel .data*/
import {dataFiltradoRol,dataFiltradoTop,dataFiltradoOrden} from './data.js';
  
/*****************************Elementos************************************/
const selectRoles = document.querySelector('.roles');
const selectTop = document.querySelector('.top');
const selectOrden = document.querySelector('.orden');

/**********************Otra manera de crear funciones:*********************/

/************/     
//Elemento objeto.funcion   (P1:string, en este caso tipo de evento change,
selectRoles.addEventListener("change", 
//cuando ocurra el evento change se ejecutara la funcion(param)=>{}
(param)=>{      //parametro enviado cuando se ejecute change
                //(este param es objeto.objeto.propiedad)
    dataFiltradoRol(param.target.value); //el valor mage se encuentra en target.value
  }
);

/************/
selectTop.addEventListener("change", (event)=>{
    dataFiltradoTop(event.target.value);
});

/************/
selectOrden.addEventListener("change", (event)=>{
    dataFiltradoOrden(event.target.value);
});
/**************************************************************************/
/**********************Otra manera de crear funciones:*********************/

// function ejecutareventoChangeRol(event){
//   dataFiltradoRol(event.target.value);
// }
//Elemento .      funcion   (P1:string, P2:evento que es una funcion);
//selectRoles.addEventListener("change", ejecutarParamChange_Rol);
/**************************************************************************/

/**********************Otra manera de crear funciones:*********************/
//const ejecutarParamChange_Rol = (event)=>{
//  dataFiltradoRol(event.target.value);
//}
//Elemento .      funcion   (P1:string, P2:evento que es una funcion);
//selectRoles.addEventListener("change", ejecutarParamChange_Rol);
/**************************************************************************/
