import { AnimatedTestimonials } from "@/app/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                "elit, sed do eiusmod tempor incididunt ut labore et dolore magna" +
                " aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
                " in reprehenderit in voluptate velit esse ",
            name: "Heated Debates",
            designation: "aaaa",
            src: "/1.avif",
        },
        {
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                "elit, sed do eiusmod tempor incididunt ut labore et dolore magna" +
                " aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
                " in reprehenderit in voluptate velit esse ",
            name: "Crazy Contest",
            designation: "bbbb",
            src: "/2.avif",
        },
        {
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                "elit, sed do eiusmod tempor incididunt ut labore et dolore magna" +
                " aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
                " in reprehenderit in voluptate velit esse ",
            name: "Wide Exposure",
            designation: "cccc",
            src: "/3.avif",
        },
        {
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                "elit, sed do eiusmod tempor incididunt ut labore et dolore magna" +
                " aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
                " in reprehenderit in voluptate velit esse ",
            name: "Crazy Quality",
            designation: "dddd",
            src: "/4.avif",
        },
        {
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                "elit, sed do eiusmod tempor incididunt ut labore et dolore magna" +
                " aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
                " in reprehenderit in voluptate velit esse ",
            name: "Unlimited Fun",
            designation: "eeee",
            src: "/5.avif",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
