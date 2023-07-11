import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import './Home.css';
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
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
    // const [List,setList] = useState([])
    // const { data: { data } = {} } = useLocation();
    // console.log(data)
    //Хук, выполняющийся при рендере страницы, внутри надо использовать useState и получить данные пользователя

    //{'headers':{'Authorization':'Token '+match.data}}


//
//     const dispatch = useDispatch();
//     //для получения состяния - useSelector
// const token = useSelector(state => state.tokenR.token);
//     console.log(token + 'penis');
//
// const getToken = () =>{
//     dispatch({type: "GET_TOKEN"});
// }



    // useEffect(()=>{
    //     axios.get('http://127.0.0.1:8000/home/')
    //     .then((response) =>{
    //         console.log(response.data) ;
    //         setList(response.data);
    //            });
    // }, []);
    return(
        <div>
        <div className="container pt-5 pb-5 text-center">
            <header>
                <h1 className="text-center">Авторы учебного проекта</h1>
            </header>
            <body className="pt-5 text-center row row-cols-md-3 g-5">
            <div className="col1">
                <div className="sz card h-100 border-light bg-dark-subtle">
                    <div className="card-img-container">
                        <img src="../../../media/images/4f5f2654-36f3-42d0-aaf9-1d539fe95fea.jpg" className="card-img-top" alt="Артём"/>
                    </div>
                    <div className="card-body">
                            <h5 className="sz-tit card-title">Артём Еремов</h5>
                            <p className="sz-txt card-text">Фронт-энд и связь с бэком</p>
                            <NavLink className="btn btn-primary" to= "https://vk.com/atonim_nice_wh">Написать</NavLink>
                    </div>
                </div>
            </div>
            <div className="col2">
                <div className="sz card h-100 border-light bg-dark-subtle">
                    <div className="card-img-container">
                        <img src="../../../media/images/5NIsIeiSxdSrPgi31RTaPHhNlRIn0Jj3j_o_UbdAxWaLsw1ljLCuFEUtYWjEH0M.jpg" className="card-img-top" alt="Вова"/>
                    </div>
                    <div className="card-body">
                        <h5 className="sz-tit card-title">Владимир Басыров</h5>
                        <p className="sz-txt card-text">Бэк-энд и базы данных</p>
                        <NavLink className="btn btn-primary" to= "https://vk.com/id161900910">Написать</NavLink>
                    </div>
                </div>
            </div>
            <div className="col3">
                <div className="sz card h-100 border-light bg-dark-subtle">
                    <div className="card-img-container">
                        <img src="../../../media/images/shadow-the-hedgehog-fanart-v0-a48sxu77zu091.jpg" className="card-img-top" alt="Мишаня"/>
                    </div>
                    <div className="card-body">
                        <h5 className="sz-tit">Михаил Новицкий</h5>
                        <p className="sz-txt card-text">Вёрстка и дизайн</p>
                        <NavLink className="btn btn-primary" to= "https://vk.com/id352192966">Написать</NavLink>
                    </div>
                </div>
            </div>
            </body>
        </div>
            <div className="marquee-container pt-10">
                <p className="marquee">
                    Учебный проект ЛЭТИ выполнили - Новицкий Михаил - Басыров Владимир - Ефремов Артём -
                </p>
            </div>
        </div>
    );
};

export default Home