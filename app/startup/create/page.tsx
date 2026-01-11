import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import StartupForm from './StartupForm';

const CreateStartup = async () => {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 -left-4 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-80 h-80 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
      </div>
      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Share Your Startup Idea
          </h1>
          <p className="text-xl text-muted-foreground">
            Tell us about your vision. The more details you provide, the better feedback you'll receive from the community.
          </p>
        </div>

        {/* Form Component */}
        <StartupForm />

        {/* Tips Section */}
        <div className="mt-12 bg-accent/50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">💡 Tips for a Great Post</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Be clear and concise about the problem you're solving</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Explain what makes your solution unique</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Include relevant market research or validation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Be open to feedback and constructive criticism</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CreateStartup;
