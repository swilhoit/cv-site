import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container max-w-2xl mx-auto px-4 py-32">
      <h1 className="text-2xl font-extralight tracking-wide mb-12">Get in Touch</h1>
      
      <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
        <p className="text-sm text-muted-foreground font-light leading-relaxed">
          I&apos;m always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, feel free to reach out.
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid gap-6">
          <a 
            href="mailto:hello@example.com" 
            className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <Mail className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-mono font-extralight uppercase tracking-[0.2em] text-xs">Email</p>
              <p className="text-xs text-muted-foreground">hello@example.com</p>
            </div>
          </a>

          <a 
            href="tel:+1234567890" 
            className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <Phone className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-mono font-extralight uppercase tracking-[0.2em] text-xs">Phone</p>
              <p className="text-xs text-muted-foreground">+1 (234) 567-890</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-lg border bg-card">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-mono font-extralight uppercase tracking-[0.2em] text-xs">Location</p>
              <p className="text-xs text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t">
          <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-6">Connect on Social</h2>
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border bg-card hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border bg-card hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border bg-card hover:bg-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}