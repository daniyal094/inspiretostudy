import Link from 'next/link'
import React from 'react'

export default function HeroSlider() {
    return (
        <>
            <main>
                <section className='mt-200'>
                    <div>
                        <div>
                            <div>
                                <h3 className="p-absolute mt-200 ml-200" style={{ color: 'white', fontSize: '65px', wordSpacing: '2px' }}>
                                    Inspire To Study
                                </h3>
                            </div>
                            <div></div>
                            <img src="assets/img/hero/couple.jpg" alt="SRC" className='img-fluid' />
                        </div>
                    </div>

                </section>
            </main>
        </>
    )
}
