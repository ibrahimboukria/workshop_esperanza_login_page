'use client'
import { useState } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import {
  PenTool,
  Palette,
  Layers,
  MousePointer2,
  Shapes,
  User,
  PenLine,
  Mail,
  Lightbulb,
  Ticket,
  Send,
  Globe,
  Loader2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const translations = {
  en: {
    toggle: "Arabic",
    welcome: "Welcome to",
    title1: "Design",
    title2: "Workshop",
    desc: "Create, collaborate, and bring your ideas to life. Sign in to access your workspace.",
    organizedBy: "Orgnazed by",
    reserve: "Reserve your seat",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    motivation: "Motivation (optional)",
    register: "Register",
    sending: "Sending...",
    success: "You are registered",
    error: "Something went wrong",
  },
  ar: {
    toggle: "English",
    welcome: "مرحباً بكم في",
    title1: "ورشة",
    title2: "التصميم",
    desc: "أبدع وتعاون وحوّل أفكارك إلى واقع. سجّل الدخول للوصول إلى مساحة عملك.",
    organizedBy: "تنظيم",
    reserve: "احجز مقعدك",
    firstName: "الاسم",
    lastName: "اللقب",
    email: "البريد الإلكتروني",
    motivation: "الدافع (اختياري)",
    register: "تسجيل",
    sending: "جارٍ الإرسال...",
    success: "تم تسجيلك بنجاح",
    error: "حدث خطأ ما",
  },
};

export default function Login() {
  const [lang, setLang] = useState<"en" | "ar">("en")
  const t = translations[lang]

  const [Form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    motivation: ""
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...Form, [e.target.name]: e.target.value })
  }

  const mutation = useMutation({
    mutationFn: async (data: typeof Form) => {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Registration failed");
      return res.json();
    },
  });
  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(Form);
  }

  const inputClass =
    "w-full h-[40px] ps-10 pe-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const iconClass =
    "absolute start-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400 transition-all duration-300 group-focus-within:text-blue-600 group-focus-within:scale-125 group-focus-within:-rotate-6";

  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-slate-100 flex items-start lg:items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl lg:min-h-[620px] bg-white border-2 border-black rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

        <section className="relative overflow-hidden w-full lg:w-1/2 bg-[#0b1329] p-8 md:p-12 flex flex-col text-white">
          <div className="animate-glow absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.3),transparent_70%)]" />

          <PenTool className="animate-float absolute top-[8%] right-[9%] w-12 h-12 text-blue-400" />
          <Palette className="animate-float absolute bottom-[20%] right-[26%] w-11 h-11 text-violet-400 [animation-delay:-2s]" />
          <Layers className="animate-float absolute bottom-[9%] right-[8%] w-10 h-10 text-emerald-400 [animation-delay:-4s]" />
          <MousePointer2 className="animate-float absolute top-[22%] right-[30%] w-10 h-10 text-pink-400 [animation-delay:-1s]" />
          <Shapes className="animate-spin-slow absolute bottom-[6%] left-[46%] w-9 h-9 text-amber-400" />

          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="relative z-10 flex items-center gap-1.5 self-start text-[#0b1329] bg-blue-500 px-3 py-1 rounded-lg m-4 text-sm"
          >
            <Globe className="w-4 h-4" />
            {t.toggle}
          </button>
          <span className="relative z-10 text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
            {t.welcome}
          </span>
          <h1 className="relative z-10 text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {t.title1}<br />
            {t.title2}
          </h1>
          <p className="relative z-10 text-slate-300 text-base md:text-lg">
            {t.desc}
          </p>
          <p className="relative z-10 text-slate-300 text-base md:text-lg mt-5">{t.organizedBy}</p>
           
        <Image
         src="/espiranza.png"alt="Esperanza Club"  width={128} height={128}
       className="relative z-10 mt-3 w-32 h-auto"
/>
       
        </section>

        
        
        
        <section className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Ticket className="animate-pop w-8 h-8 text-blue-600" />
            {t.reserve}
          </h2>

          <div className="flex flex-col w-full max-w-md mx-auto gap-5 ms-4">
            <form onSubmit={handelSubmit} className="flex flex-col gap-5">

              
              
              
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  {t.firstName}
                </label>
                <div className="group relative">
                  <User className={iconClass} />
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              
              
              
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  {t.lastName}
                </label>
                <div className="group relative">
                  <PenLine className={iconClass} />
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              
              
              
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  {t.email}
                </label>
                <div className="group relative">
                  <Mail className={iconClass} />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              
              
              
              
              <div className="flex flex-col gap-2">
                <label htmlFor="motivation" className="text-sm font-medium text-gray-700">
                  {t.motivation}
                </label>
                <div className="group relative">
                  <Lightbulb className={iconClass} />
                  <input
                    id="motivation"
                    name="motivation"
                    type="text"
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

             
              
              
              <button
                type="submit"
                className="group w-full h-[44px] mt-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                {t.register}
                <Send className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12 rtl:-scale-x-100" />
              </button>

  {mutation.isPending && (
  <div className="flex items-center gap-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 font-medium">
    <Loader2 className="w-5 h-5 animate-spin" />
    {t.sending}
  </div>
)}
{mutation.isSuccess && (
  <div className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-300 text-green-700 px-4 py-3 font-semibold">
    <CheckCircle2 className="w-5 h-5" />
    {t.success}
  </div>
)}
{
  mutation.isError && (
  <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-300 text-red-700 px-4 py-3 font-semibold">
    <AlertCircle className="w-5 h-5" />
    {t.error}
  </div>
)}
            </form>
          </div>
        </section>

      </div>
    </main>
  );
}