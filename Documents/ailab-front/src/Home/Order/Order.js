import s from "./Order.module.scss";
import hero from "./../../Data/HomePage/hero.png"
import {HiOutlineArrowDown} from "react-icons/hi";
import Typed from "react-typed";
import {Modal} from "../../Modal/Modal";
import {useState} from "react";
import $ from "jquery";

$(function () {
    const target_block = $(".number"); // Ищем блок
    const value = target_block.text()
    let blockStatus = true;

    $(window).scroll(function () {

        const scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if (scrollEvent && blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({numberValue: 0}).animate({numberValue: value}, {

                duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",

                step: function (val) {

                    $(".number").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }

            });

        }

    });

});
$(function () {
    const target_block = $(".numb"); // Ищем блок
    const value1 = target_block.text()
    let blockStatus = true;

    $(window).scroll(function () {

        const scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if (scrollEvent && blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({numberValue: 0}).animate({numberValue: value1}, {

                duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",

                step: function (val) {

                    $(".numb").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }

            });

        }

    });

});
$(function () {
    const target_block = $(".num"); // Ищем блок
    const value = target_block.text()
    let blockStatus = true;

    $(window).scroll(function () {

        const scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if (scrollEvent && blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({numberValue: 0}).animate({numberValue: value}, {

                duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",

                step: function (val) {

                    $(".num").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }

            });

        }

    });

});
$(function () {
    const target_block = $(".nu"); // Ищем блок
    const value = target_block.text()
    let blockStatus = true;

    $(window).scroll(function () {

        const scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if (scrollEvent && blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({numberValue: 0}).animate({numberValue: value}, {

                duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",

                step: function (val) {

                    $(".nu").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }

            });

        }

    });

});


export const Order = () => {
    const [modalActive, setModalActive] = useState(false);
    const textLines = [
        `Веб приложений`,
        `сайтов на  Wordpress`,
        `E-commerce решений`,
        `Сайтов на Tilda`
    ];

    return (
        <>
            <div className={s.container}>
                <div className={s.left_side}>
                    <div className={s.img}>
                        <img src={hero}/>
                    </div>

                </div>
                <div className={s.right_side}>
                    <h1 className={s.title}> Мы лучше в создании<br/>
                        <span> <Typed strings={textLines} typeSpeed={60}/></span>
                    </h1>


                    <p>
                        Проектируем бизнес-процессы, интерфейсы и техническую архитектуру веб-проектов под
                        ваши уникальные потребности. Разрабатываем серверные API:
                        <span className={s.css_typing}>Django Rest Framework, Django, Laravel, MySQL.</span>
                        Верстаем и программируем интерфейсы:
                        <span>JavaScript, TypeScript, Vue и React, Next.js.</span>
                    </p>


                    <button className={s.btn_order} onClick={() => setModalActive(true)}>
                        Заказать услугу
                        <i className={s.circle}>
                            <HiOutlineArrowDown/>
                        </i>

                    </button>


                </div>
            </div>
            <div className={s.container2}>
                <div className={s.row}>
                    <div className={s.block_item}>
                        <div><h5 className="number">350</h5><h5>+</h5></div>

                        <p>Завершенных проектов</p>
                        <hr className={s.line}/>

                    </div>
                    <div className={s.block_item}>
                        <div><h5 className="numb">92</h5><h5>%</h5></div>
                        <p>Позитывных отзывов</p>
                        <hr className={s.line}/>
                    </div>
                    <div className={s.block_item}>
                        <h5 className="num">1446</h5>
                        <p>Готовых кейсов</p>
                        <hr className={s.line}/>
                    </div>
                    <div className={s.block_item}>
                        <h5 className="nu">28</h5>
                        <p>Количество сотрудников</p>
                        <hr className={s.line}/>
                    </div>
                </div>
                <Modal active={modalActive} setActive={setModalActive}/>
            </div>
        </>

    )

}