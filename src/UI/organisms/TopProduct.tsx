import {
  ArrowUpRight,
  AwardIcon,
  CheckCircle,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/UI/shadcn/ui/button'
import { Card, CardContent, CardHeader, CardFooter } from '@/UI/shadcn/ui/card'
import { Link } from '@tanstack/react-router'

const topProduct = {
  name: 'Ecommerce',
  description:
    'Arezon’s Ecommerce Platform is designed to help businesses sell smarter, faster, and more efficiently.',
  image:
    'https://cdn.pixabay.com/photo/2020/08/03/10/00/laptop-5459712_1280.png',
  features: [
    'Intuitive navigation, fast search, and smart product filters',
    'Clean layouts with detailed product info, customer reviews, wishlists, and high-quality images',
    'Dynamic inventory updates, social sharing options, discount management, and secure checkout',
    'Multiple payment gateways, shipping options, and fully integrated shopping cart',
    'Designed for performance, built for conversion',
  ],
}

export default function TopProduct() {
  return (
    <Card className="bg-background text-foreground ">
      <CardHeader className="p-4 md:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Button
            variant="secondary"
            className="rounded-full p-2 sm:p-4 text-base sm:text-lg flex items-center gap-2 sm:gap-4"
          >
            <AwardIcon className="w-4 h-4 sm:w-5 sm:h-5" /> Our #1 Best-Selling Product: Ecommerce Platform
          </Button>
          <Link to="/products">
            <Button
              variant="secondary"
              className="group text-primary flex items-center gap-2"
            >
              View All
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6 lg:p-8 pt-0">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <Card className="bg-card text-card-foreground">
            <CardContent className="p-4 md:p-6">
              <div className="grid gap-4">
                <h3 className="text-sm sm:text-base lg:text-lg">
                  {topProduct.description}
                </h3>
                {topProduct.features.map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1 w-5 h-5" />
                    <p className="text-sm sm:text-base lg:text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 p-4 md:p-6">
              <Button variant="secondary" className="group w-full sm:w-auto">
                Request for Demo
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="group w-full sm:w-auto text-white">
                Request for Quotation
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-primary overflow-hidden flex items-center justify-center">
            <CardContent className="p-0">
              <img
                src={topProduct.image}
                alt="Ecommerce Platform"
                className="w-full h-auto object-contain"
              />
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
