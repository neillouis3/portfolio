import {Card, CardHeader, CardBody, CardFooter, Image, Chip} from "@nextui-org/react";

export default function CustomCard() {
  return (
    <div className="h-fit w-fit">
        <Card className="py-2" isBlurred>
            <CardBody className="overflow-visible -my-1">
                <Image
                alt="Card background"
                className="object-cover rounded-xl m-0"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
                />
            </CardBody>
            <CardFooter>
                <div className="flex flex-col text-sm w-full">
                    <div className="flex flex-row justify-between w-full items-center">
                        <h4 className="font-bold text-large">JCHEKIM</h4>
                        <Chip size="sm" className="mt-0" variant="dot">Maintanance</Chip>
                    </div>
                    
                    <div>
                        This is a website for a church
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                
            </CardFooter>
        </Card>
    </div>
    
  );
}