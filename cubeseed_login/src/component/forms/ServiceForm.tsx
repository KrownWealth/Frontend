import { useState } from "react";
import Service from "../service-instance/Service";
import serviceStyles from "@/styles/serviceform.module.scss"


export default function ServiceForm() {
  const [service, setService] = useState<string>('');
  console.log("service", service);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if(!service) return alert('Please select a service');
  }

  return (
    <div className={serviceStyles.form} onSubmit={handleSubmit} >
        <Service value={'Farmer'} setService={setService} />
        <Service value={'Service Provider'} setService={setService} />
        <Service value={'Input Seller'} setService={setService} />
        <Service value={'Investor'} setService={setService} />
        <Service value={'Direct-to-Farm Buyer'} setService={setService} />
        <Service value={'Processing Storage'} setService={setService} />
    </div>
  )
}
