import React from 'react'

export default function Hero() {
    return (
        <div className="hero min-h-screen"
             style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        Qr2Reach
                    </h1>
                    <p className="mb-5">
                        Qr2Reach ile tek bir qr kod ile iletisim bilgilerinizi paylasabilirsiniz.
                    </p>
                    <button className="btn btn-primary">
                       Ürünü incele
                    </button>
                </div>
            </div>
        </div>
    )
}
