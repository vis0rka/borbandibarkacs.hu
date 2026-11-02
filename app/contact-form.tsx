"use client";
import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
export default function ContactForm({recipient="mibkft@gmail.com",subject="Érdeklődés a weboldalról"}:{recipient?:string;subject?:string}) {
 const [prepared,setPrepared]=useState(false);
 function prepareEmail(event:FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const body=`Név: ${data.get("name")}\nVálasz e-mail: ${data.get("email")}\n\n${data.get("message")}`;
  window.location.href=`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  setPrepared(true);
 }
 return <form className="border border-line bg-white px-[18px] py-[23px] min-[451px]:p-8 [&>p]:text-[13px] [&>p]:text-muted [&_label]:mb-5 [&_label]:block [&_label]:text-[12px] [&_label]:font-semibold" onSubmit={prepareEmail}><h3>Írjon nekünk!</h3><p>Az üzenet a saját levelezőjében nyílik meg, ahonnan elküldheti.</p><p className="text-xs text-muted"><a className="text-brand underline" href="/adatvedelmi-iranyelvek/">Adatvédelmi irányelvek</a></p><div className="grid grid-cols-1 min-[451px]:grid-cols-2 min-[451px]:gap-[18px]"><label>Neve<input name="name" autoComplete="name" required maxLength={120}/></label><label>E-mail-címe<input name="email" type="email" autoComplete="email" required maxLength={254}/></label></div><label>Miben segíthetünk?<textarea name="message" required rows={5} maxLength={5000}/></label><button className="inline-flex min-h-[49px] cursor-pointer items-center justify-between gap-7 border px-[23px] py-3.5 text-[13px] font-bold transition-colors motion-reduce:transition-none border-brand bg-brand text-white hover:bg-[#0b628c]" type="submit">E-mail előkészítése <ArrowUpRight className="size-4 shrink-0" aria-hidden="true"/></button>{prepared && <p className="mt-5" role="status">Az e-mailt előkészítettük a levelezőjében. Ha nem nyílt meg, írjon közvetlenül a {recipient} címre. Az oldal nem küldött üzenetet.</p>}</form>;
}
