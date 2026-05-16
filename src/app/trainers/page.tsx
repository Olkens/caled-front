import {TrainerCard} from "@/components/trainers/TrainerCard";

const trainers = [
    { id: 1, name: 'Michael Jackson', specialty: 'Strength' },
    { id: 2, name: 'Big Shaq', specialty: 'Endurance' },
    { id: 3, name: 'Kendrick Lamar', specialty: 'Flexibility' },
];

export default function Trainers() {
    return (
        <main className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col w-2/3">
                <h1 className="pb-4 pt-4 m-auto">Trainers</h1>
                <div className="grid grid-cols-2 gap-6">
                    {trainers.map((trainer) => (
                        <TrainerCard key={trainer.id} name={trainer.name} specialty={trainer.specialty} />
                    ))}</div>
            </div>
        </main>
    )
}