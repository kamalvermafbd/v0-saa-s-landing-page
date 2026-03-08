'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle2, Menu, X, ArrowRight, Zap, Users, TrendingUp, Smartphone, CreditCard, Database, Tag, Rocket, BarChart3, Lock, Calendar } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    city: '',
    monthlyOrders: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        businessName: '',
        city: '',
        monthlyOrders: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">WL</span>
              </div>
              <span className="font-bold text-lg text-foreground">WebsiteLelo</span>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-foreground hover:text-primary transition">Features</a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition">How It Works</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition">Pricing</a>
              <a href="#contact" className="text-foreground hover:text-primary transition">Contact</a>
              <Button className="bg-primary hover:bg-primary/90">Sign In</Button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a href="#features" className="block text-foreground hover:text-primary transition py-2">Features</a>
              <a href="#how-it-works" className="block text-foreground hover:text-primary transition py-2">How It Works</a>
              <a href="#pricing" className="block text-foreground hover:text-primary transition py-2">Pricing</a>
              <a href="#contact" className="block text-foreground hover:text-primary transition py-2">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <Zap size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Launch in Minutes, Not Months</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Launch Your Own Food Ordering Website
              </h1>

              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                WebsiteLelo helps restaurants create their own online ordering system like Zomato or Swiggy without coding. Own your customer data, accept direct orders, and eliminate commission fees.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Book Demo <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/5">
                  Get Early Access
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-sm text-foreground/60">Restaurants Trust Us</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">50K+</p>
                  <p className="text-sm text-foreground/60">Orders Monthly</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">$2M+</p>
                  <p className="text-sm text-foreground/60">Saved in Commissions</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 shadow-2xl">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="bg-gradient-to-r from-primary to-accent h-32 rounded-lg mb-4 flex items-center justify-center text-white font-bold">
                    Your Restaurant App Preview
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-32 bg-gray-100 rounded"></div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-10 bg-primary/20 rounded"></div>
                      <div className="flex-1 h-10 bg-accent/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 sm:py-32 bg-secondary/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Problems We Solve</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Restaurants lose significant revenue and control using third-party delivery platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'High Commission Fees',
                description: 'Third-party apps take 25-30% commission on each order. That\'s thousands every month lost to platform fees.',
              },
              {
                icon: Lock,
                title: 'No Customer Control',
                description: 'You don\'t own customer data. Delivery platforms own your customer relationships and contact information.',
              },
              {
                icon: Rocket,
                title: 'Expensive Development',
                description: 'Building a custom app costs $30K-$50K and takes months. WebsiteLelo does it in minutes.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition">
                <item.icon size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">How WebsiteLelo Helps</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Take control of your business with a platform built for restaurants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { title: 'Create Your Own Ordering Website', icon: Globe },
                { title: 'Own Your Customer Database', icon: Database },
                { title: 'Accept Direct Orders (0% Commission)', icon: CreditCard },
                { title: 'Build Brand Loyalty', icon: Users },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 h-96 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 size={64} className="text-primary mx-auto mb-4 opacity-50" />
                <p className="text-foreground/60 font-medium">Admin Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Powerful Features</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Everything you need to manage your online restaurant business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Menu, title: 'Online Menu Management', desc: 'Manage your menu items and pricing easily' },
              { icon: Zap, title: 'Variant-based Menu Items', desc: 'Offer sizes, flavors, and customizations' },
              { icon: CreditCard, title: 'Cart & Checkout', desc: 'Smooth shopping experience for customers' },
              { icon: Users, title: 'Guest & Login Orders', desc: 'Accept orders from anyone, anywhere' },
              { icon: Calendar, title: 'Order Tracking', desc: 'Real-time order status updates' },
              { icon: BarChart3, title: 'Admin Dashboard', desc: 'Manage all orders from one place' },
              { icon: Smartphone, title: 'Mobile Web App (PWA)', desc: 'Works like a native app on phones' },
              { icon: CreditCard, title: 'Payment Integration', desc: 'Accept all major payment methods' },
              { icon: Tag, title: 'Coupons & Discounts', desc: 'Run promotions and boost sales' },
              { icon: Database, title: 'Customer Database', desc: 'Own your customer relationships' },
              { icon: Rocket, title: 'Auto Invoices', desc: 'Generate bills automatically' },
              { icon: Zap, title: 'Fast Loading System', desc: 'Lightning-fast performance always' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition">
                <feature.icon size={28} className="text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Register Your Business',
                description: 'Sign up with your restaurant details and create your account in minutes.',
                icon: Rocket,
              },
              {
                step: '02',
                title: 'Setup Menu & Pricing',
                description: 'Add your menu items, variants, and prices. Upload images and organize categories.',
                icon: Menu,
              },
              {
                step: '03',
                title: 'Start Accepting Orders',
                description: 'Share your ordering link and start receiving orders directly to your dashboard.',
                icon: TrendingUp,
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-xl text-white mb-6">
                  <h1 className="text-5xl font-bold opacity-20 mb-2">{item.step}</h1>
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-20 sm:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">See It In Action</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Check out how our platform works
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Customer Ordering Page', bg: 'from-primary/20 to-primary/10' },
              { title: 'Cart System', bg: 'from-accent/20 to-accent/10' },
              { title: 'Admin Dashboard', bg: 'from-blue-500/20 to-blue-500/10' },
              { title: 'Order Management', bg: 'from-green-500/20 to-green-500/10' },
            ].map((preview, i) => (
              <div key={i} className={`bg-gradient-to-br ${preview.bg} rounded-xl p-8 h-64 border border-border flex items-center justify-center`}>
                <p className="text-foreground/60 font-medium text-center">{preview.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Simple, Transparent Pricing</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Choose the plan that fits your restaurant
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '₹999',
                period: '/month',
                description: 'Perfect for small restaurants',
                features: [
                  'Up to 100 orders/month',
                  'Basic menu management',
                  '5 menu items',
                  'Email support',
                ],
                highlighted: false,
              },
              {
                name: 'Pro',
                price: '₹4,999',
                period: '/month',
                description: 'For growing restaurants',
                features: [
                  'Up to 1000 orders/month',
                  'Advanced menu management',
                  'Unlimited menu items',
                  'Priority support',
                  'Customer analytics',
                ],
                highlighted: true,
              },
              {
                name: 'Business',
                price: '₹9,999',
                period: '/month',
                description: 'For established chains',
                features: [
                  'Unlimited orders',
                  'Multi-location support',
                  'API access',
                  '24/7 support',
                  'Custom integrations',
                ],
                highlighted: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl p-8 transition ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-primary to-accent text-white border-2 border-primary shadow-xl scale-105'
                    : 'bg-white border border-border'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? 'text-white/80' : 'text-foreground/70'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlighted ? 'text-white/80' : 'text-foreground/60'}>
                    {plan.period}
                  </span>
                </div>
                <Button
                  className={`w-full mb-8 ${
                    plan.highlighted
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                >
                  Get Started
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex gap-2 items-start">
                      <CheckCircle2 size={20} className={plan.highlighted ? 'text-white' : 'text-primary'} />
                      <span className={plan.highlighted ? 'text-white' : 'text-foreground'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Lead Capture Form */}
      <section id="contact" className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Ready to Transform Your Restaurant?</h2>
            <p className="text-lg text-foreground/70">
              Get in touch with our team and we'll help you launch your ordering platform
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-12 border-2 border-primary shadow-lg text-center">
              <CheckCircle2 size={64} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-foreground/70">
                Our team will contact you shortly with more information about your demo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-border">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mobile Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="border-border"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Name
                  </label>
                  <Input
                    type="text"
                    name="businessName"
                    placeholder="Your restaurant name"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    City
                  </label>
                  <Input
                    type="text"
                    name="city"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="border-border"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Estimated Monthly Orders
                </label>
                <select
                  name="monthlyOrders"
                  value={formData.monthlyOrders}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg text-foreground bg-white"
                >
                  <option value="">Select range</option>
                  <option value="0-100">0-100 orders</option>
                  <option value="100-500">100-500 orders</option>
                  <option value="500-1000">500-1000 orders</option>
                  <option value="1000+">1000+ orders</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your restaurant..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg text-foreground"
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Request Demo <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">WL</span>
                </div>
                <span className="font-bold text-lg">WebsiteLelo</span>
              </div>
              <p className="text-white/70 text-sm">
                Empowering restaurants to own their online ordering business.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="mailto:hello@websitelelo.com" className="hover:text-white transition">hello@websitelelo.com</a></li>
                <li><a href="tel:+918000000000" className="hover:text-white transition">+91 8000-000-000</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
            <p>&copy; 2024 WebsiteLelo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Globe icon from lucide-react
function Globe(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a14.5 14.5 0 0 1 10 24M12 2a14.5 14.5 0 0 0-10 24"></path>
      <path d="M2 12h20"></path>
    </svg>
  )
}
