import React from 'react'

export default function Stats() {
    return (
        <div className="stats bg-accent-content text-primary-content flex md:flex-row flex-col">

            <div className="stat">
                <div className="stat-title">Toplam Kullanıcımız</div>
                <div className="stat-value">3546</div>
            </div>

            <div className="stat">
                <div className="stat-title">Okutulan QR Sayısı</div>
                <div className="stat-value">24,423</div>
            </div>

        </div>
    )
}
