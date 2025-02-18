import SafetyFloor from "./Services/SafetyFloor.jpg";
import EngineeredWood from "./Services/EngineeredWood.png";
import BespokeStairsRunner from "./Services/Bespoke.png";
import LVT from "./Services/LVT.png";
import Carpet from "./Services/Carpet.png";
import Vinyl from "./Services/Vinyl.png";
import Laminate from "./Services/Laminate.png";
import Herringbone from "./Services/Herringbone.png";

interface Service {
  title: string;
  image: string;
  content: string;
}

export const servicesList: Record<string, Service>[] = [
  
    {SafetyFloor: {
      title: "Safety Floor",
      image: SafetyFloor,
      content:
        "Safety Flooring by Quality Carpet Flooring – Protection You Can Trust. At Quality Carpet Flooring, we understand the importance of safety in both residential and commercial spaces. Our high-quality safety flooring solutions are designed to reduce the risk of slips and falls, making them ideal for high-traffic areas such as kitchens, bathrooms, hospitals, and commercial spaces. We offer anti-slip vinyl, non-slip coatings, and durable safety mats, ensuring a secure and long-lasting surface. Whether you need flooring for a workplace, healthcare facility, or home, our expert team provides customized solutions and professional installation to meet your specific needs. Enhance safety and peace of mind with Quality Carpet Flooring’s premium safety flooring options.",
    }},
    {EngineeredWood: {
      title: "Engineered Wood Flooring",
      image: EngineeredWood,
      content:
        "Engineered Wood Flooring – A Timeless Choice for Your Home. Engineered wood flooring is a popular and durable choice, offering a stylish and cost-effective alternative to solid wood flooring. At HS Carpets and Flooring, we provide a wide selection of engineered wood flooring from top manufacturers like Karndean, Amtico, Quickstep, Balterio, and Kährs. Our expert team helps you find the perfect fit for your home, offering professional installation services to ensure a flawless finish. Engineered wood flooring is moisture-resistant, easy to maintain, and available in a variety of colors and styles. Whether for your living room, kitchen, or bathroom, it adds value and elegance to any space. Contact us today for expert guidance and installation services.",
    }},
    {BespokeStairsRunner: {
      title: "Bespoke Stairs Runner",
      image: BespokeStairsRunner,
      content:
        "Transform Your Staircase with a Bespoke Stairs Runner. A bespoke stair runner is the perfect way to add a touch of elegance and sophistication to your home. At Quality Carpet Flooring, we offer a wide range of custom stair runners designed to complement any interior style. From classic woven designs to modern patterns, our expert craftsmen create stair runners that enhance the beauty of your staircase while providing comfort and durability. Our runners are available in various materials, including wool, synthetic blends, and natural fibers, ensuring long-lasting performance. Whether you want a bold statement piece or a subtle, neutral design, we tailor each stair runner to your specifications. Upgrade your home with a high-quality bespoke stair runner today.",
    }},
    {LVT: {
      title: "Luxury Vinyl Tile (LVT)",
      image: LVT,
      content:
        "Luxury Vinyl Tile (LVT) – Stylish, Durable, and Affordable. LVT flooring is an excellent choice for those seeking the beauty of natural flooring materials with added durability and water resistance. At HS Carpets and Flooring, we provide high-quality LVT from leading brands like Amtico and Karndean, offering realistic wood and stone effects with incredible detail. Our LVT flooring is perfect for homes and businesses, as it is easy to maintain, scratch-resistant, and comfortable underfoot. Whether for kitchens, bathrooms, or living areas, LVT is a versatile flooring option that blends aesthetics with functionality. Contact us for expert guidance on choosing and installing the best LVT flooring for your space.",
    }},
    {Carpet: {
      title: "Carpet Flooring",
      image: Carpet,
      content:
        "Soft, Comfortable, and Stylish Carpet Flooring. Carpet flooring brings warmth and comfort to any home, making it a popular choice for bedrooms, living rooms, and offices. At Quality Carpet Flooring, we offer an extensive range of carpets in various textures, colors, and materials, ensuring you find the perfect fit for your space. Whether you prefer plush, luxurious carpets for a cozy feel or durable, stain-resistant options for high-traffic areas, our collection has something for everyone. Our professional installation team ensures a seamless fit, enhancing both aesthetics and durability. Upgrade your home with premium carpet flooring that combines elegance, insulation, and comfort.",
    }},
    {Vinyl: {
      title: "Vinyl Flooring",
      image: Vinyl,
      content:
        "Vinyl Flooring – The Perfect Blend of Style and Practicality. Vinyl flooring is a versatile and cost-effective solution for both residential and commercial spaces. At HS Carpets and Flooring, we provide high-quality vinyl flooring options that mimic the appearance of natural wood, stone, and tile while offering excellent water resistance and durability. Vinyl flooring is easy to clean, making it ideal for kitchens, bathrooms, and busy areas. Our selection includes a variety of colors, patterns, and textures to match any décor style. Whether you want a modern, sleek finish or a traditional look, vinyl flooring is a reliable and stylish choice. Contact us for professional installation and expert advice.",
    }},
    {Laminate: {
      title: "Laminate Flooring",
      image: Laminate,
      content:
        "Laminate Flooring – Durable, Affordable, and Stylish. Laminate flooring is a practical and budget-friendly option for those who love the look of hardwood but need a more durable and easy-to-maintain solution. At HS Carpets and Flooring, we offer an extensive range of laminate flooring in various colors and finishes, replicating the natural beauty of real wood. Laminate flooring is scratch-resistant, moisture-resistant, and perfect for busy households with kids and pets. Our high-quality laminate floors provide excellent durability and a long lifespan, making them a great investment. Whether for your living room, office, or kitchen, laminate flooring offers elegance without the high maintenance of solid wood.",
    }},
    {Herringbone: {
      title: "Herringbone Flooring",
      image: Herringbone,
      content:
        "Herringbone Flooring – Timeless Elegance for Modern Homes. Herringbone flooring is a sophisticated and stylish choice that adds a luxurious feel to any space. At Quality Carpet Flooring, we provide high-quality herringbone flooring in wood, laminate, and vinyl finishes, giving you plenty of options to suit your interior design. The distinctive zigzag pattern enhances the visual appeal of any room while providing durability and longevity. Whether you prefer a classic oak finish or a modern grey-toned herringbone floor, we offer expert installation services to achieve the perfect look. Elevate your home with the timeless beauty of herringbone flooring today.",
    }},
];
