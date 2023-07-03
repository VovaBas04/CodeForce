import React from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useState, useEffect} from 'react'
import axios from 'axios';
//Главная страница после регистрации пользователя
//Задача - передать сюда данные пользователя, полученные по токену в LogPage
const Home = () =>{
    //Функция навигации - позволяет переходить по страницам используя историю браузера с помощью хука useNavigate
    //(Пока что не используем)
    // const navigate = useNavigate();
    // const goBack = () => navigate(-1);

    //Считываем и сохраняем id, который передается в названии пути страницы, с помощью хука useParams
    //(Пока что не используем)
    //const {id} = useParams();

    //Данные пользователя, динамически отслеживаемые через хук useState
    //(Пока что пустые)
    // const {personData, setData} = useState({});
    const [List,setList] = useState([])
    // const { data: { data } = {} } = useLocation();
    // console.log(data)
    //Хук, выполняющийся при рендере страницы, внутри надо использовать useState и получить данные пользователя

    //{'headers':{'Authorization':'Token '+match.data}}
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/home/')
        .then((response) =>{
            console.log(response.data) ;
            setList(response.data);
               });
    }, []);
    return(
        <div>
            Home
            <ul>
                {List.map(p=>(
                    <li key={p.id}>{p.username}</li>
                ))}
            </ul>
        </div>
    );

};

export default Home;