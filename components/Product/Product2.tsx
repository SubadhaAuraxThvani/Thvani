import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Product2() {
    return (
        <div className="flex h-full w-full flex-col bg-color5">
            <div className="flex text-4xl font-bold pt-4 text-color1 text-center justify-center">
                <h1>FAQs</h1>
            </div>
            <div className="flex justify-center px-4 md:px-16 lg:px-[200px] xl:px-[400px] py-10">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full border-2 border-color3 rounded-lg"
                >
                    <AccordionItem
                        value="item-1"
                        className="border-b border-gray-300"
                    >
                        <AccordionTrigger className="py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none">
                            How do I subscribe to a service on Craft Unique
                            Essence?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                            Every woman needs her crew and ours is one you can
                            definitely count on. Its got the perfect relaxed
                            fit and is made with 100% Organic Cotton Jersey that
                            is so super soft. The search for the perfect crew
                            neck tee is over.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-2"
                        className="border-b border-gray-300"
                    >
                        <AccordionTrigger className="py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none">
                            What is Craft Unique Essence?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                            OneTapay is a platform that provides
                            subscription-based services, offering seamless
                            access to flexible payment options.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-3"
                        className="border-b border-gray-300"
                    >
                        <AccordionTrigger className="py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none">
                            Can I get the real fabric & Natural Products?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                            Yes. Its animated by default, but you can disable
                            it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-4"
                        className="border-b border-gray-300"
                    >
                        <AccordionTrigger className="py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none">
                            What payment methods are accepted?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                            Yes. Its animated by default, but you can disable
                            it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-5"
                        className="border-b border-gray-300"
                    >
                        <AccordionTrigger className="py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none">
                            Is customer support available 24/7?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                            Yes. Its animated by default, but you can disable
                            it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
