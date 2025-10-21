import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, Users, Sparkles } from "lucide-react";

const Index = () => {

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-sm font-medium tracking-wide">Voice Connect</div>
          <Button variant="ghost" size="sm" className="text-sm">
            Join the Waitlist
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 leading-tight">
            Many conversations,
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            yet so few feel <span className="italic font-serif">truly connected</span>.
          </p>
        </div>
      </section>

      {/* Story Section 1 */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-2xl md:text-3xl leading-relaxed">
            We scroll through feeds.
            <br />
            Send quick messages.
            <br />
            Like. Comment. Share.
          </p>
          <p className="text-2xl md:text-3xl leading-relaxed text-muted-foreground">
            But when was the last time you had a conversation that made you feel <span className="text-foreground italic font-serif">truly heard</span>?
          </p>
        </div>
      </section>

      {/* Story Section 2 */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-2xl md:text-3xl leading-relaxed">
            Social anxiety holds us back.
            <br />
            <span className="text-muted-foreground">We rehearse what to say.</span>
            <br />
            <span className="text-muted-foreground">Wonder if we're being awkward.</span>
            <br />
            <span className="text-muted-foreground">Miss the moment.</span>
          </p>
          <p className="text-2xl md:text-3xl leading-relaxed">
            What if technology could help us connect <span className="italic font-serif">more naturally</span>, not less?
          </p>
        </div>
      </section>

      {/* Product Introduction */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl leading-relaxed">
              That's why we built
            </p>
            <h2 className="text-7xl md:text-8xl font-serif italic">Voice Connect</h2>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Your personal voice assistant that helps you navigate conversations with confidence and authenticity.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-4 p-8 rounded-2xl bg-card shadow-soft transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:scale-105 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              <Phone className="w-12 h-12 text-accent transition-transform duration-300 hover:scale-110 hover:rotate-12" />
              <h3 className="text-3xl font-serif">Real-Time Guidance</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get gentle suggestions during conversations. Never feel stuck or anxious about what to say next.
              </p>
            </div>

            <div className="space-y-4 p-8 rounded-2xl bg-card shadow-soft transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:scale-105 animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
              <MessageCircle className="w-12 h-12 text-accent transition-transform duration-300 hover:scale-110 hover:rotate-12" />
              <h3 className="text-3xl font-serif">Conversation Practice</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Practice difficult conversations in a safe space. Build confidence before the real moment.
              </p>
            </div>

            <div className="space-y-4 p-8 rounded-2xl bg-card shadow-soft transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:scale-105 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
              <Users className="w-12 h-12 text-accent transition-transform duration-300 hover:scale-110 hover:rotate-12" />
              <h3 className="text-3xl font-serif">Context Awareness</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Understands your relationships and social context. Personalized support that feels natural.
              </p>
            </div>

            <div className="space-y-4 p-8 rounded-2xl bg-card shadow-soft transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:scale-105 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
              <Sparkles className="w-12 h-12 text-accent transition-transform duration-300 hover:scale-110 hover:rotate-12" />
              <h3 className="text-3xl font-serif">Always Learning</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Adapts to your communication style. Grows with you as you become more confident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-2xl md:text-3xl leading-relaxed">
            We believe technology should help us be <span className="font-serif italic">more human</span>, not less.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Not to replace genuine connection.
            <br />
            But to remove the barriers that keep us from it.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal leading-tight">
            A new era of personal software is here.
          </h2>
          <div className="flex flex-col items-center gap-4 max-w-xl mx-auto">
            <Input 
              type="email" 
              placeholder="Your email" 
              className="h-16 px-8 text-lg rounded-full bg-background/50 backdrop-blur-sm border border-muted-foreground/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.12)] hover:border-muted-foreground/20 transition-all duration-300"
            />
            <Button 
              size="lg" 
              className="h-14 px-12 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.16)] hover:scale-105 transition-all duration-300"
            >
              Join waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© 2024 Voice Connect. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
