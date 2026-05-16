"use client"

import { useEffect, useState } from "react"
import { TrainerCard } from "@/components/trainers/TrainerCard"
import { api } from "@/lib/api"
import { Trainer } from "@/types/trainer"

export default function Trainers() {
    const [trainers, setTrainers] = useState<Trainer[]>([])

    useEffect(() => {
        api.get<Trainer[]>("/trainers/").then(({ data }) => {
            setTrainers(data)
        })
    }, [])

    return (
        <main className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col w-2/3">
                <h1 className="pb-4 pt-4 m-auto">Trainers</h1>
                <div className="grid grid-cols-2 gap-6">
                    {trainers.map((trainer) => (
                        <TrainerCard key={trainer.id} name={trainer.name} specialty={trainer.specialty} />
                    ))}
                </div>
            </div>
        </main>
    )
}