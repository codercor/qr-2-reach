import React from 'react'
import {AiOutlineShoppingCart as IconCart} from "react-icons/ai";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">qr2reach</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <IconCart/>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <h2 className="text-[1rem] cursor-alias"> Mağazalar </h2>
                            <div className="flex flex-col items-start justify-center">
                                <a href="https://trendyol.com" className="btn btn-ghost btn-sm"> Trendyol </a>
                                <a href="https://hepsiburada.com" className="btn btn-ghost btn-sm"> Hepsiburada </a>
                                <a href="https://n11.com" className="btn btn-ghost btn-sm"> N11 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
