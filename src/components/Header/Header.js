import React, { useState, useEffect } from 'react'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import Location from '../Location/Location';

function Header() {
    const [options,setOptions] = useState([]);
    const [user,setUser] = useState([]);
    const getOptions = () => {
        fetch('./data/options.json')
        .then(response => response.json())
        .then(data => {
            setOptions(data.items);
            setUser(data.user);
        });
    }

    useEffect(() => {
        getOptions();
    }, []);
    
    return (
        <div className="bg-meli w-screen lg:flex lg:flex-wrap lg:justify-center">
            <div className="flex pb-3 md:w-full lg:pb-1 pt-2 px-3 lg:w-full xl:w-4/6">
                <div className="w-16 lg:w-1/6">
                    <img className="block lg:hidden w-11"
                        src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.15.0/mercadolibre/logo__small@2x.png" />
                    <img className="ml-6 mt-1 hidden lg:block w-logo"
                        src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.15.0/mercadolibre/logo__large_plus.png" />
                </div>
                <div className="flex-grow">
                    <div className="bg-white rounded-sm p-1 lg:p-2 lg:pl-3 shadow-md">
                        <button className="w-8 float-left block lg:hidden text-gray-300 cursor-pointer">
                            <SearchSharpIcon fontSize='small' />
                        </button>
                        <input className="xs:w-3/12 outline-none text-gray-700 text-base md:w-11/12 placeholder-gray-300" type="text" placeholder="Buscar productos..." />
                        <button className="float-right p-0 hidden lg:block pl-2 border-l-2 text-gray-300 cursor-pointer">
                            <SearchSharpIcon />
                        </button>
                    </div>
                </div>
                <div className="w-20 lg:hidden flex justify-around">
                    <div className="object-center text-gray-600 pt-1">
                        <MenuIcon />
                    </div>
                    <div className="object-center text-gray-600 pt-1">
                        <ShoppingCartSharpIcon />
                    </div>
                </div>
                <div className="hidden lg:block lg:flex-none lg:w-3/6 lg:pl-8 lg:max-w-sm lg:min-w-min">
                    <img src="https://http2.mlstatic.com/D_NQ_634588-MLA47258738837_082021-OO.webp" alt="" />
                </div>
            </div>
            <div className="text-gray-500 p-1.5 border-t border-gray-300 w-screen lg:hidden">
                <LocationOnSharpIcon fontSize="small" />
                <span className="text-xs">Enviar a Santa Fe 2300</span>
                <KeyboardArrowRightIcon className="float-right text-gray-400" fontSize="small"/>
            </div>
            <div className="lg:flex px-3 pb-2 hidden lg:w-full xl:w-4/6">
                <Location user={user}/>
                <div className="pt-6 lg:flex-grow text-sm">
                    <ul className="text-gray-500 flex justify-around items-center w-4/5">
                        {options && options.map((option, index) => <li className="cursor-pointer hover:text-gray-600" key={index}>{option}</li>)}
                    </ul>
                </div>
                <div className="pt-5 lg:w-2/6 pl-10 text-sm">
                    <ul className="flex items-center justify-around cursor-pointer text-gray-700">
                        <li className="flex items-center">
                            {user ? <> <img className="rounded-full w-5 h-5 mr-1" src={user.img} alt="" />
                                    {user.name} </>
                            :
                                "Ingresar"
                            }
                        </li>
                        <li>Mis compras</li>
                        <li>Favoritos</li>
                        <li><NotificationsNoneIcon /></li>
                        <li><ShoppingCartSharpIcon /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
