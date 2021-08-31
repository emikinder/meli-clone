import React from 'react';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';

function Location ({ user }) {
    return (
        <div className="lg:w-1/6 text-sm relative">
            <div className="absolute px-xss bottom-0 ml-5 mr-12 flex items-center rounded-sm border border-transparent hover:border-gray-300">
                <div>
                    <LocationOnSharpIcon className="float-left text-gray-500" fontSize="default" />
                </div>
                <div className="leading-extra-xs">
                    <span className="text-xs text-gray-500">Enviar a {user.name}</span>
                    <br />
                    <span className="text-sm">{user.address}</span>
                </div>
            </div>
        </div>
    )
}

export default Location
