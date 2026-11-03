'use client'
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { json } from "stream/consumers";
import { useMutation } from "@tanstack/react-query";





export default function Login() {
 const [Form,setForm]=useState({
    firstName: "",
    lastName: "",
    email: "",
    motivation: ""
})
const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setForm({...Form,[e.target.name]: e.target.value})

}
const mutation = useMutation({
  mutationFn: async (data: typeof Form) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },
});
const handelSubmit = async (e:React.FormEvent)=>{
    e.preventDefault();
    mutation.mutate(Form);
    }
        


 
 
 
 
 
    return (
    <main className="min-h-screen bg-slate-100 flex items-start lg:items-center justify-center p-4 md:p-8">
  <div className="w-full max-w-5xl lg:min-h-[620px] bg-white border-2 border-black rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
    
       
<section className="w-full lg:w-1/2 bg-[#0b1329] p-8 md:p-12 flex flex-col  text-white ">
          <button className="text-[#0b1329] bg-blue-500 w-1/5 rounded-lg m-4">Arabic</button>
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2 ">
            Welcome to
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Design<br/>
            Workshop
          </h1>
          <p className="text-slate-300 text-base md:text-lg">
            Create, collaborate, and bring your ideas to life. Sign in to access your workspace.
          </p>
          <p className="text-slate-300 text-base md:text-lg mt-5">Orgnazed by</p>
         
          
        
    </section>


<section className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col bg-white">
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Reserve your seat</h2>

  <div className="flex flex-col w-full max-w-md mx-auto gap-5 ml-4">
    
      
      
    <form onSubmit={handelSubmit}>
    
     <div className="flex flex-col gap-2"> 
      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
        First name
      </label>
     <input
       name="firstName"
        type="text"
        onChange={handleChange}
        className="w-full h-[40px] px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    
    
    <div className="flex flex-col gap-2">
      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
        Last name
     </label>
      <input
        name="lastName"
        type="text"
        onChange={handleChange}
        className="w-full h-[40px] px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    
    
    
    
    <div className="flex flex-col gap-2">
      <label htmlFor="email" className="text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        name="email"
       type="email"
       onChange={handleChange}
        className="w-full h-[40px] px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    
    
    
    <div className="flex flex-col gap-2">
      <label htmlFor="motivation" className="text-sm font-medium text-gray-700">
        Motivation (optional)
      </label>
      <input
        name="motivation"
        type="text"
         onChange={handleChange}
        className="w-full h-[40px] px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    
    
    
    
    <button
      type="submit"
      className="w-full h-[44px] mt-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
    >
      Register
    </button>
   </form>
 
  </div>
</section>

      </div>
    </main>
  );
}