export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cima-cream border-b-4 border-cima-gold shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-5xl font-black text-cima-red font-serif tracking-wider">CIMA</h1>
          <div className="hidden md:flex gap-8 text-cima-black font-medium">
            <a href="#why" className="hover:text-cima-red transition">Why CIMA</a>
            <a href="#menu" className="hover:text-cima-red transition">Menu</a>
            <a href="#restaurants" className="hover:text-cima-red transition">Restaurants</a>
            <a href="#contact" className="hover:text-cima-red transition">Contact</a>
          </div>
          <button className="bg-cima-red text-cima-gold px-6 py-3 font-bold rounded-lg hover:bg-red-700 transition shadow-lg">
            Reserve
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-screen bg-gradient-to-br from-cima-red/20 via-cima-cream to-cima-gold/10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <pattern id="pasta" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10,2 Q15,10 10,18 Q5,10 10,2" stroke="currentColor" fill="none" className="text-cima-red"/>
            </pattern>
            <rect width="100" height="100" fill="url(#pasta)" />
          </svg>
        </div>

        <div className="relative text-center z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-8xl font-black text-cima-red font-serif mb-6 tracking-wider drop-shadow-lg">CIMA</h2>
          <p className="text-3xl italic text-cima-gold font-serif mb-8 drop-shadow">Sicilian Soul. Modern Hunger.</p>
          <p className="text-xl text-cima-black mb-12 leading-relaxed max-w-2xl mx-auto">
            Fresh pasta made daily. Sourced honestly. Community-driven. Experience authentic Sicilian culture in Hamburg.
          </p>
          <button className="bg-cima-red text-white px-12 py-5 text-xl font-bold rounded-lg hover:bg-red-800 transition shadow-2xl hover:shadow-3xl transform hover:scale-105">
            Experience CIMA
          </button>
        </div>
      </section>

      {/* Why CIMA */}
      <section id="why" className="py-24 bg-cima-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-6xl font-black text-cima-red font-serif text-center mb-4 tracking-wide">Why CIMA?</h3>
          <div className="h-1 w-32 bg-cima-gold mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="group bg-white border-4 border-cima-red p-10 rounded-lg hover:border-cima-gold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🍝</div>
              <h4 className="text-2xl font-black text-cima-red font-serif mb-4">Fresh Daily</h4>
              <p className="text-cima-black leading-relaxed">Every pasta is made fresh in-house, every morning. Using authentic Sicilian durum wheat and traditional methods.</p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white border-4 border-cima-gold p-10 rounded-lg hover:border-cima-red hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🌿</div>
              <h4 className="text-2xl font-black text-cima-red font-serif mb-4">Honest & Open</h4>
              <p className="text-cima-black leading-relaxed">Transparent ingredients. Open kitchen. Real partnerships with organic farms. Nothing to hide.</p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white border-4 border-cima-green p-10 rounded-lg hover:border-cima-red hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">❤️</div>
              <h4 className="text-2xl font-black text-cima-red font-serif mb-4">Community First</h4>
              <p className="text-cima-black leading-relaxed">Casual. Inviting. Nonna-approved. We're not a restaurant—we're a gathering place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-24 bg-white border-t-4 border-cima-gold">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-6xl font-black text-cima-red font-serif text-center mb-4 tracking-wide">Build Your Pasta</h3>
          <div className="h-1 w-32 bg-cima-gold mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-cima-red pl-6">
              <h4 className="text-2xl font-black text-cima-red font-serif mb-4">PASTA</h4>
              <ul className="space-y-3 text-cima-black">
                <li className="flex justify-between"><span>Tagliatelle</span> <span className="text-cima-gold">€12</span></li>
                <li className="flex justify-between"><span>Pappardelle</span> <span className="text-cima-gold">€12</span></li>
                <li className="flex justify-between"><span>Spaghetti</span> <span className="text-cima-gold">€11</span></li>
                <li className="flex justify-between"><span>Ravioli</span> <span className="text-cima-gold">€13</span></li>
              </ul>
            </div>

            <div className="border-l-4 border-cima-gold pl-6">
              <h4 className="text-2xl font-black text-cima-red font-serif mb-4">SAUCE</h4>
              <ul className="space-y-3 text-cima-black">
                <li className="flex justify-between"><span>Ragù Siciliano</span> <span className="text-cima-gold">+€4</span></li>
                <li className="flex justify-between"><span>Truffle Butter</span> <span className="text-cima-gold">+€5</span></li>
                <li className="flex justify-between"><span>Aglio e Olio</span> <span className="text-cima-gold">+€3</span></li>
                <li className="flex justify-between"><span>Burrata & Tomato</span> <span className="text-cima-gold">+€4</span></li>
              </ul>
            </div>

            <div className="border-l-4 border-cima-green pl-6">
              <h4 className="text-2xl font-black text-cima-red font-serif mb-4">TOPPINGS</h4>
              <ul className="space-y-3 text-cima-black">
                <li className="flex justify-between"><span>Black Truffle</span> <span className="text-cima-gold">+€3</span></li>
                <li className="flex justify-between"><span>Parmigiano</span> <span className="text-cima-gold">+€2</span></li>
                <li className="flex justify-between"><span>Microgreens</span> <span className="text-cima-gold">+€1</span></li>
                <li className="flex justify-between"><span>Burrata</span> <span className="text-cima-gold">+€3</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-cima-black text-lg mb-6">Total: €15-18</p>
            <button className="bg-cima-red text-white px-10 py-4 font-bold rounded-lg hover:bg-red-800 transition shadow-lg">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section id="restaurants" className="py-24 bg-cima-cream border-t-4 border-cima-gold">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-6xl font-black text-cima-red font-serif text-center mb-4 tracking-wide">Come as You Are</h3>
          <div className="h-1 w-32 bg-cima-gold mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-4 border-cima-red p-8 rounded-lg bg-white">
              <h4 className="text-3xl font-black text-cima-red font-serif mb-4">Hamburg Mitte</h4>
              <p className="text-cima-black mb-6">Open kitchen visible. Communal seating encouraged. Perfect for business lunches.</p>
              <p className="text-sm text-cima-black mb-4"><strong>Hours:</strong> Mon-Sun 11:00-23:00</p>
              <button className="bg-cima-red text-white px-8 py-3 font-bold rounded-lg hover:bg-red-800 transition">
                Reserve Now
              </button>
            </div>

            <div className="border-4 border-cima-gold p-8 rounded-lg bg-white">
              <h4 className="text-3xl font-black text-cima-red font-serif mb-4">Hamburg Neustadt</h4>
              <p className="text-cima-black mb-6">Urban vibe. Community-driven. Perfect for casual dinners with friends.</p>
              <p className="text-sm text-cima-black mb-4"><strong>Hours:</strong> Mon-Sun 11:00-23:00</p>
              <button className="bg-cima-red text-white px-8 py-3 font-bold rounded-lg hover:bg-red-800 transition">
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-cima-black text-cima-cream py-16 border-t-4 border-cima-gold">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-black font-serif mb-4">CIMA</h3>
              <p className="text-cima-gold">Sicilian Soul. Modern Hunger.</p>
            </div>

            <div>
              <h4 className="text-cima-gold font-bold mb-4">RESTAURANTS</h4>
              <ul className="space-y-2 text-sm">
                <li>Hamburg Mitte</li>
                <li>Hamburg Neustadt</li>
              </ul>
            </div>

            <div>
              <h4 className="text-cima-gold font-bold mb-4">HOURS</h4>
              <ul className="space-y-2 text-sm">
                <li>Mon-Sun</li>
                <li>11:00 - 23:00</li>
              </ul>
            </div>

            <div>
              <h4 className="text-cima-gold font-bold mb-4">FOLLOW</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cima-red transition">Instagram</a></li>
                <li><a href="#" className="hover:text-cima-red transition">Facebook</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cima-gold/30 pt-8 text-center text-sm">
            <p>© 2026 CIMA. Fresh pasta. Sicilian soul.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
