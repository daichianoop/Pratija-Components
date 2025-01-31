import React from 'react';
import './styles/flipCards.css';
import Image from "next/image";
import { Yeseva_One } from 'next/font/google';


const yeseva = Yeseva_One({
    weight: ['400'],
    subsets: ['latin'],
});


const FlipCard: React.FC = () => {
    return (
       <>
           <section className="flipCards px-20 py-10" style={{ backgroundColor: "#EBCE89" }}>
               <div className="flex flex-row justify-around py-4">
                   <div className="flip-card">
                       <div className="flip-card-inner">
                           <div className="flip-card-front">
                               <Image src={"/poster-21.png"} width={390} height={500} alt={"21"}/>
                           </div>
                           <div className="px-7 py-9 flip-card-back bg-[url('/flipcardbg.png')] bg-cover bg-center h-screen">
                               <p className={`title mb-5 text-4xl ${yeseva.className}`}>INCEPTION</p>
                               <p className={`h-full text-lg ${yeseva.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                   elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                   aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                   in reprehenderit in voluptate velit esse </p>
                           </div>
                       </div>
                   </div>
                   <div className="flip-card">
                       <div className="flip-card-inner">
                           <div className="flip-card-front">
                               <Image src={"/poster-22.png"} width={390} height={500} alt={"21"}/>
                           </div>
                           <div className="px-7 py-9 flip-card-back bg-[url('/flipcardbg.png')] bg-cover bg-center h-screen">
                           <p className={`title mb-5 text-4xl ${yeseva.className}`}>DISCLOSURE</p>
                               <p className={`h-full text-lg ${yeseva.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                   elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                   aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                   in reprehenderit in voluptate velit esse </p>
                           </div>
                       </div>
                   </div>
                   <div className="flip-card">
                       <div className="flip-card-inner">
                           <div className="flip-card-front">
                               <Image src={"/poster-23.png"} width={390} height={500} alt={"21"}/>
                           </div>
                           <div className="px-7 py-9 flip-card-back bg-[url('/flipcardbg.png')] bg-cover bg-center h-screen">
                               <p className={`title mb-5 text-4xl ${yeseva.className}`}>EPILOGUE</p>
                               <p className={`h-full text-lg ${yeseva.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                   elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                   aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                   in reprehenderit in voluptate velit esse </p>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
       </>
    );
}

export default FlipCard;