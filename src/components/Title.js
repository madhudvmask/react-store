import React from 'react'

export default function Title({ name, title}) {
    return (
        <div className="row">
            <div className="text-center text-title col-10 mx-auto">
                <h1 className="text-capitalize fon-weight-bold"> 
                    {name} <strong> {title}</strong>
                </h1>
            </div>
        </div>
    )
}
