import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Reviews() {
  const testimonials = [
    {
      quote:
        "FreshMart always has fresh fruits and vegetables. The store is well-organized, and the staff is friendly. I love their organic section!",
      name: "Priya Sharma",
      designation: "Customer",
      src: "/profile1.png",
    },
    {
      quote:
        "The store is clean and well-stocked, but some items are slightly expensive compared to other local markets. However, the quality makes up for it.",
      name: "Rahul Verma",
      designation: "Customer",
      src: "/profile2.png",
    },
    {
      quote:
        "I visit FreshMart regularly for groceries. They have everything I need, and their home delivery service is a lifesaver. Highly recommended! ",
      name: "Meera Joshi",
      designation: "Customer",
      src: "/profile3.png",
    },
    {
      quote:
        "The products are good, but the staff could be more helpful. I had trouble finding a product, and no one was available to assist me.",
      name: "Amit Singh",
      designation: "Customer",
      src: "/profile4.png",
    },
    {
      quote:
        "FreshMart offers fresh produce, great discounts, and a wide selection of products. I’ve been shopping here for years and never had a bad experience.",
      name: "Sonia Kapoor",
      designation: "Customer",
      src: "/profile5.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
