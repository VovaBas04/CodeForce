import React from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react'
//Главная страница после регистрации пользователя
//Задача - передать сюда данные пользователя, полученные по токену в LogPage
const Home = () =>{

    //Функция навигации - позволяет переходить по страницам используя историю браузера с помощью хука useNavigate
    //(Пока что не используем)
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    //Считываем и сохраняем id, который передается в названии пути страницы, с помощью хука useParams
    //(Пока что не используем)
    //const {id} = useParams();

    //Данные пользователя, динамически отслеживаемые через хук useState
    //(Пока что пустые)
    const {personData, setData} = useState({});

    //Хук, выполняющийся при рендере страницы, внутри надо использовать useState и получить данные пользователя
    useEffect(()=>{

    })

    return(
        <div>
            Home
        </div>
    );

};

export default Home;