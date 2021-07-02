import React from 'react'
import './HeaderTailwind.css';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
                
function HeaderTailwind() {
    return (
        <div className="bg-meli w-screen lg:flex lg:flex-wrap lg:justify-center">
            <div className="header__up flex pb-3 md:w-full lg:pb-0 pt-3 px-3 lg:w-full xl:w-5/6">
                <div className="header__logo w-16 lg:w-1/6">
                    <img className="block lg:hidden w-11"
                        src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.15.0/mercadolibre/logo__small@2x.png" 
                        alt="" />
                    <img className="hidden lg:block big"
                        src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.15.0/mercadolibre/logo__large_plus.png" 
                        alt="" />
                </div>
                <div className="header__center flex-grow">
                    <div className="header__search p-1 lg:p-2">
                        <button className="header__search__button__mobile w-8 float-left block lg:hidden"><SearchSharpIcon fontSize='small' /></button>
                        <input type="text" placeholder="Estoy buscando..." />
                        <button className="header__search__button float-right p-0 hidden lg:block"><SearchSharpIcon /></button>
                    </div>
                </div>
                <div className="header__right w-20 lg:hidden flex justify-around">
                    <div className="object-center text-gray-600 pt-1">
                        <MenuIcon />
                    </div>
                    <div className="object-center text-gray-600 pt-1">
                        <ShoppingCartSharpIcon />
                    </div>
                </div>
                <div className="header__disney block hidden lg:block lg:flex-none lg:w-2/6 lg:pl-8 lg:max-w-sm lg:min-w-min">
                    <img src="https://http2.mlstatic.com/D_NQ_902822-MLA46518515602_062021-OO.webp" alt="" />
                </div>
            </div>
            <div className="header__shipping text-gray-500 p-1.5 border-t border-gray-300 w-screen lg:hidden">
                <LocationOnSharpIcon className="ico_location" fontSize="small" />
                <span className="text-xs">Enviar a Santa Fe 2300</span>
                <KeyboardArrowRightIcon className="float-right text-gray-400" fontSize="small"/>
            </div>
            <div className="header__down lg:flex px-3 pb-3 hidden lg:block lg:w-full xl:w-5/6">
                <div className="header__nav__left lg:w-1/6 text-sm">
                    <div className="header__nav__left__geo">
                        <LocationOnSharpIcon className="ico_location float-left" fontSize="large" />
                        <div className="">
                            <span className="enviar_a text-xs">Enviar a</span><br />
                            <span className="provincia text-sm">Santa Fe 2300</span>
                        </div>
                    </div>
                </div>
                <div className="header__nav__center pt-6 lg:flex-grow text-sm">
                    <ul className="header__nav__center__ul flex justify-around items-center w-4/5">
                        <li>Categorías</li>
                        <li>Ofertas</li>
                        <li>Historial</li>
                        <li>Supermercado</li>
                        <li>Moda</li>
                        <li>Vender</li>
                        <li>Ayuda</li>
                    </ul>
                </div>
                <div className="header__nav__right pt-5 lg:w-2/6 pl-10 text-sm">
                    <ul className="header__nav__right__ul flex items-center justify-around">
                        <li className="flex items-center">
                            <img className="rounded-full w-5 h-5 mr-1" src="https://http2.mlstatic.com/D_2X_906670-MLA41510685054_042020-M.webp" alt="" />
                            Emiliano
                        </li>
                        <li>Mis compras</li>
                        <li>Favoritos</li>
                        <li><NotificationsNoneIcon className="li_ico" /></li>
                        <li><ShoppingCartSharpIcon className="li_ico" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderTailwind
