import Cementliste from '../components/cementliste'
import Button from '../components/button'

export default function Cementsektion () {
    return (
        <>
        <div className="
            bg-[url('/cementsektion.jpg')]
            bg-cover bg-center relative 
            before:content-[''] 
            before:absolute 
            before:inset-0 
            before:bg-white/80
            py-(--content-padding)
            ">
            <div className="relative z-2">
                <div className='w-full flex '>
                    <h1 className='m-auto text-4xl font-(--font-weight)'>Hvad kan vi tilbyde</h1>
                </div>
                <Cementliste />
                <div className='mt-12'>
                    < Button knapTekst="Læs Mere"/>
                </div>
            </div>
        </div>
        </>
    )
}