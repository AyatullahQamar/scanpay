import Header from "@/components/Header";
import {
  ArrowRight,
  Smartphone,
  Zap,
  BarChart3,
  Clock,
  Video as VideoIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Index() {
  const demoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!demoRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!demoRef.current) return;
        if (entry.isIntersecting) {
          demoRef.current.play().catch(() => {});
        } else {
          demoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(demoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

 
{/* Hero Section */}
<section
  className="relative min-h-[100svh] md:min-h-screen flex items-center overflow-hidden bg-no-repeat bg-[position:75%_top] md:bg-right-top"
  style={{
    backgroundImage: "url('/hero.png')",
    backgroundSize: "cover",
    backgroundColor: "#123d7a",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 container flex flex-col items-start justify-center text-left gap-6 md:gap-8 px-4 sm:px-6 lg:px-16 py-24 sm:py-28">
    
    {/* Heading + Description */}
    <div className="space-y-8 max-w-3xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-lg leading-tight"
      >
        Scan.{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Pay.
        </span>{" "}
        Go.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white/90 leading-relaxed drop-shadow-md max-w-2xl"
      >
        The future of retail checkout. Customers scan product QR codes,
        pay instantly with UPI, and skip the billing line.
      </motion.p>
    </div>

    {/* Buttons
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <button className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-primary/90 transition-colors gap-2 shadow-lg hover:shadow-xl">
        Book a Demo
        <ArrowRight className="w-4 h-4" />
      </button>

      <button className="inline-flex items-center justify-center rounded-lg bg-white/20 backdrop-blur border border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/30 transition-colors shadow-lg">
        Learn More
      </button>
    </div> */}

    {/* Stats */}
    {/* <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-2xl text-white/90 drop-shadow-md w-full">
      <div className="text-left">
        <p className="text-4xl sm:text-2xl md:text-3xl font-bold">500+</p>
        <p className="text-xs md:text-sm">Active Stores</p>
      </div>

      <div className="text-left">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold">10M+</p>
        <p className="text-xs md:text-sm">Transactions</p>
      </div>

      <div className="text-left">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold">45%</p>
        <p className="text-xs md:text-sm">Faster Checkout</p>
      </div>
    </div> */}

  </div>
</section>
```


      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 lg:py-32 bg-white relative overflow-visible"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, secure, and seamless payments in just 4 steps
            </p>
          </motion.div>

          <div className="space-y-20 lg:space-y-32">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-stretch"
            >
              <div className="flex flex-col justify-center order-last lg:order-first">
                <div className="h-80 flex flex-col justify-center bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      1
                    </div>
                    <h3 className="text-4xl font-semibold text-gray-900">
                      Scan QR Code
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Customers scan the unique QR code at your store entrance
                    using their smartphone camera or our app.
                  </p>
                </div>
              </div>
              <div className="h-[400px] flex items-center justify-center order-first lg:order-last">
                <img
                  src="/scan.png"
                  alt="QR Code Scanning"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-stretch"
            >
            <div className="h-[420px] flex items-center justify-center overflow-hidden">
  <img
    src="/payment.png"
    alt="Digital Payment"
    className="w-full h-full object-cover object-center rounded-2xl shadow-lg"
  />
</div>
              <div className="flex flex-col justify-center">
                <div className="h-80 flex flex-col justify-center bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      2
                    </div>
                    <h3 className="text-4xl font-semibold text-gray-900">
                      Make Payment
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Secure digital payment through UPI, cards, or wallets with
                    instant confirmation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-stretch"
            >
              <div className="flex flex-col justify-center order-last lg:order-first">
                <div className="h-80 flex flex-col justify-center bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      3
                    </div>
                    <h3 className="text-4xl font-semibold text-gray-900">
                      Checkout Process
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Seamless checkout at POS with automatic payment verification
                    and receipt generation.
                  </p>
                </div>
              </div>
              <div className="h-[400px] flex items-center justify-center order-first lg:order-last">
                <img
                  src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop"
                  alt="Retail Checkout"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-stretch"
            >
              <div className="h-[400px] flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                  alt="Happy Customer"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-80 flex flex-col justify-center bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      4
                    </div>
                    <h3 className="text-4xl font-semibold text-gray-900">
                      Exit Store
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Customers leave with digital receipt and enhanced shopping
                    experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Stickers */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute top-[-80px] left-[-180px] opacity-20">
            <svg
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="5"
                y="5"
                width="14"
                height="14"
                rx="1"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="absolute top-[-120px] right-[-210px] opacity-20">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="18"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="9" cy="9" r="1" fill="currentColor" />
              <path
                d="M7 17h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="absolute bottom-[-60px] right-[-180px] opacity-20">
            <svg
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M16 10a4 4 0 0 1-8 0"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="absolute bottom-[-80px] left-[-220px] opacity-20">
            <svg
              width="64"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="4"
                width="20"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="6"
                y="8"
                width="12"
                height="8"
                rx="1"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Everything you need to transform your retail checkout experience
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "QR-based Checkout",
                description:
                  "Fast, contactless, and secure product scanning. Works with any smartphone camera. No additional hardware needed beyond standard product tags.",
                icon: "📱",
              },
              {
                title: "UPI Instant Payments",
                description:
                  "Direct payment integration with Paytm, Google Pay, PhonePe, BHIM, and all major UPI providers. Bank-level security and instant settlement.",
                icon: "💳",
              },
              {
                title: "POS Integration",
                description:
                  "Seamless API integration with Vend, Square, Shopify, and all major POS systems. Automatic sync updates inventory in real-time.",
                icon: "🔗",
              },
              {
                title: "Real-time Inventory",
                description:
                  "Automatic stock level updates as transactions complete. Prevents overselling and provides accurate inventory visibility across all channels.",
                icon: "📊",
              },
              {
                title: "Faster Customer Experience",
                description:
                  "Complete checkout in under 10 seconds. No billing queues. SMS/Email receipts instant delivery. Improves NPS and customer lifetime value.",
                icon: "⚡",
              },
              {
                title: "Advanced Analytics",
                description:
                  "Real-time dashboards with sales trends, customer insights, conversion metrics, and predictive analytics for better business decisions.",
                icon: "📈",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ amount: 0.3 }}
                className="rounded-2xl border border-muted bg-white p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/60">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & ROI Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose ScanPay?
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Measurable benefits for your retail business
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                icon: "👥",
                title: "Improved Customer Satisfaction",
                points: [
                  "Eliminate checkout queues and reduce wait times",
                  "Modern payment experience increases customer loyalty",
                  "Positive in-store experience leads to repeat visits",
                ],
              },
              {
                icon: "💰",
                title: "Increased Revenue",
                points: [
                  "Faster checkouts mean higher transaction capacity",
                  "Real-time inventory prevents stockouts",
                  "Better analytics drive targeted promotions",
                ],
              },
              {
                icon: "📊",
                title: "Operational Efficiency",
                points: [
                  "Reduce staff required at billing counters",
                  "Automated POS updates eliminate manual work",
                  "Detailed transaction logs for better auditing",
                ],
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                points: [
                  "Bank-grade encryption for all transactions",
                  "PCI-DSS compliance for payment security",
                  "Detailed audit trails and fraud detection",
                ],
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="rounded-2xl border border-muted bg-gradient-to-br from-white to-muted/30 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <ul className="space-y-3">
                  {benefit.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-foreground/70"
                    >
                      <span className="text-primary font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              See ScanPay in Action
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Watch how customers can scan, pay, and walk out in seconds
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="group relative overflow-hidden rounded-3xl bg-muted shadow-2xl">
              <video
                ref={demoRef}
                className="w-full h-full aspect-video bg-black rounded-3xl"
                controls
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect fill='%232563EB' width='1200' height='675'/%3E%3C/svg%3E"
              >
                <source
                  src="/demo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center mt-6 text-sm text-foreground/60">
              Mobile phone scanning a QR code on a clothing tag in a modern
              retail store
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Loved by Retail Managers
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              See what retail leaders are saying about ScanPay
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Rajesh Kumar",
                role: "Store Manager, Zara Mumbai",
                quote:
                  "ScanPay reduced our checkout time by 50%. Customers love the frictionless experience, and our staff is much happier without billing bottlenecks.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "Operations Head, H&M India",
                quote:
                  "The real-time inventory integration is a game-changer. We have better stock visibility and fewer disputes at checkout.",
                rating: 5,
              },
              {
                name: "Amit Patel",
                role: "Regional Manager, Reliance Trends",
                quote:
                  "Implementation was seamless. Our customers appreciate the modern payment options, and transaction success rate is excellent.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-muted bg-white p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-muted pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Retail Stores Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Built for Modern Retail Stores
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Designed for fashion and retail brands looking to reduce checkout
              friction and improve in-store customer experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {["Zara", "H&M", "Reliance Trends"].map((brand, index) => (
              <div
                key={index}
                className="rounded-2xl border border-muted bg-white p-12 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center">
                  <p className="text-sm font-semibold text-primary mb-2">
                    TRUSTED BY
                  </p>
                  <p className="text-2xl font-bold text-foreground">{brand}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-muted bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  99.8%
                </p>
                <p className="text-xs md:text-sm text-foreground/60">
                  Success Rate
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  24/7
                </p>
                <p className="text-xs md:text-sm text-foreground/60">
                  Support Available
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  3 mins
                </p>
                <p className="text-xs md:text-sm text-foreground/60">
                  Setup Time
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  ₹0
                </p>
                <p className="text-xs md:text-sm text-foreground/60">
                  Setup Cost
                </p>
              </div>
            </div>
            <p className="text-foreground/60 mb-3 text-center">
              ScanPay is trusted by leading retail chains across India to
              deliver frictionless checkout experiences
            </p>
            <p className="text-sm text-foreground/50 text-center">
              Used by thousands of stores, processing millions of transactions
              daily with industry-leading security and reliability
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contact"
        className="py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-white"
      >
        <div className="container">
          <div className="rounded-3xl bg-white border border-muted p-12 lg:p-16 text-center max-w-3xl mx-auto shadow-lg">
            <div className="mb-6 inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <p className="text-sm font-semibold text-primary">
                Limited Time Offer
              </p>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Transform Your Checkout Today.
            </h2>

            <p className="text-lg text-foreground/60 mb-2">
              Join 500+ stores already using ScanPay to revolutionize their
              retail experience.
            </p>

            <p className="text-base text-foreground/50 mb-8">
              Get 45% faster checkouts, happier customers, and real-time
              inventory management. All in 3 minutes.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-2 text-sm text-foreground/70">
                <span>✓</span>
                <span>Free setup and training</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-foreground/70">
                <span>✓</span>
                <span>Flexible pricing with no lock-in</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-foreground/70">
                <span>✓</span>
                <span>24/7 dedicated support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/90 transition-colors gap-2 shadow-lg hover:shadow-xl">
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-muted transition-colors">
                Contact Sales
              </button>
            </div>

            <p className="text-xs text-foreground/50 mt-8">
              Free consultation • No credit card required • Response within 24
              hours
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-muted bg-white py-12 lg:py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-4 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <span className="text-sm font-bold text-white">S</span>
                </div>
                <span className="font-bold text-foreground">ScanPay</span>
              </div>
              <p className="text-sm text-foreground/60">
                The future of retail checkout powered by UPI payments.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a
                    href="#features"
                    className="hover:text-primary transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-primary transition-colors"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-primary transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a
                    href="#about"
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="hover:text-primary transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="hover:text-primary transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © 2024 ScanPay Retail. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <span className="text-sm">Twitter</span>
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
