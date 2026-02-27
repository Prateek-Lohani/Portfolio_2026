import logoUrl from 'url:../../public/assets/resume/Prateek_Lohani_Resume.jpg'
import { useState } from 'react'


const Resume=({setShowResume})=>
    {
    const [currentQuality, setCurrentQuality] = useState('low')
   
    return (
        <section id="resume"  className="z-99999 top-0 left-0 bg-black/95 w-screen h-screen fixed  flex justify-center items-center">
            <div className="flex justify-center items-center w-fit h-screen relative">
            {/* Low quality initial load */}
            <img 
              src={logoUrl} 
              alt="Resume" 
              className={`w-full h-auto md:h-[92%] relative transition-all duration-500 ${currentQuality === 'low' ? 'blur-sm' : 'blur-0'}`}
              onClick={(e)=>e.stopPropagation()}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            {/* High quality upgrade */}
            <img 
              src={logoUrl} 
              alt="Resume high quality" 
              className={`w-full h-auto md:h-[92%] absolute transition-opacity duration-700 ${currentQuality === 'high' ? 'opacity-100' : 'opacity-0'}`}
              onClick={(e)=>e.stopPropagation()}
              loading="lazy"
              decoding="async"
              fetchPriority="high"
              onLoad={() => setCurrentQuality('high')}
            />
            <div onClick={()=>setShowResume(false)} className='z-99999 absolute bottom-18 md:top-5 md:right-[-20] hover:cursor-pointer hover:text-[red]'>X</div>
            </div>
        </section>
    )
}
export default Resume;

