import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type TrainerCardProps = {
    name: string
    specialty: string
    image?: string
}

export function TrainerCard({ name, specialty, image }: TrainerCardProps) {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src="https://avatar.vercel.sh/shadcn1"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardAction>
                    <Badge variant="secondary">{specialty}</Badge>
                </CardAction>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                    Want to build strength, it has never been easier with Michael Jackson!
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">View Schedule</Button>
            </CardFooter>
        </Card>
    )
}
