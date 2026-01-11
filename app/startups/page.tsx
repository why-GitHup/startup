import { getStartups } from '@/lib/db';
import { auth } from '@/auth';
import Link from 'next/link';
import Image from 'next/image';

const StartupsPage = async () => {
  const session = await auth();
  const startups = await getStartups();

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute top-40 -right-4 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                Startup Ideas
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover innovative startups from entrepreneurs around the world
              </p>
            </div>
            {session && (
              <Link href="/startup/create">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                  + Share Your Idea
                </button>
              </Link>
            )}
          </div>
          
          {/* Stats */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="font-semibold">{startups.length} Startups</span>
          </div>
        </div>

        {/* Startup Grid */}
        {startups.length === 0 ? (
          <div className="text-center py-20">
            <div className="mb-6">
              <svg className="w-24 h-24 mx-auto text-muted-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No Startups Yet</h3>
            <p className="text-muted-foreground mb-8">Be the first to share your innovative idea!</p>
            {session && (
              <Link href="/startup/create">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Share Your Idea
                </button>
              </Link>
            )}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {startups.map((startup) => (
              <article key={startup.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                {/* Image */}
                {startup.image ? (
                  <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                    <Image
                      src={startup.image}
                      alt={startup.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <svg className="w-16 h-16 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Category & Stage Badge */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {startup.category}
                    </span>
                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full capitalize">
                      {startup.stage}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {startup.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {startup.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    {/* Author */}
                    <div className="flex items-center gap-2">
                      {startup.authorImage ? (
                        <Image
                          src={startup.authorImage}
                          alt={startup.authorName}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-semibold text-sm">
                            {startup.authorName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <div className="text-sm">
                        <p className="font-medium text-foreground">{startup.authorName}</p>
                      </div>
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>{startup.views}</span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="mt-3 text-xs text-muted-foreground">
                    {new Date(startup.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StartupsPage;
